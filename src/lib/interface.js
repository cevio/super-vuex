import Vue from 'vue';
import {
  getterName,
  commitName,
  actionName,
  arrayPushCommitName,
  arrayUnShiftCommitName,
  arraySpliceCommitName,
  getTarget,
  setTarget
} from './util';

/**
 * single vuex layer
 * child is provide to main root.
 */
export default class ChildVuex {
  constructor(name) {
    this._state = {};
    this._getters = {};
    this._mutations = {};
    this._actions = {};
    this._namespace = name;
    this.app = null;
  }
  
  /**
   * get all data
   * in order to provide store
   * @returns {{state: ({}|*), getters: {}, mutations: {}, actions: {}, modules: *}}
   */
  get value() {
    return {
      state: this._state,
      getters: this._getters,
      mutations: this._mutations,
      actions: this._actions,
      modules: this._modules
    };
  }
  
  /**
   * set state in this store layer
   * @param value
   */
  set value(value) {
    this._state = value;
    this._parseState(value);
  }
  
  /**
   * loop inject
   * @param value
   * @private
   */
  _parseState(value) {
    for (let i in value) {
      this._parse(value, i, [i]);
    }
  }
  
  /**
   * parse data
   * add getter and committer
   * @param object
   * @param name
   * @param path
   * @private
   */
  _parse(object, name, path = []) {
    if (Array.isArray(object[name])) {
      this.setGetter(path, state => getTarget(state, path));
      this.setCommit(path, (state, data) => setTarget(state, path, (result, shortName) => Vue.set(result, shortName, data)));
      this.setPushCommit(path, (state, data) => setTarget(state, path, (result, shortName) => result[shortName].push(data)));
      this.setUnShiftCommit(path, (state, data) => setTarget(state, path, (result, shortName) => result[shortName].unshift(data)));
      this.setSpliceCommit(path, (state, data) => setTarget(state, path, (result, shortName) => result[shortName].splice(...data)));
    } else if (typeof object[name] === 'object') {
      for (const i in object[name]) {
        const _path = path.slice(0);
        _path.push(i);
        this.setGetter(_path, state => getTarget(state, _path));
        this.setCommit(_path, (state, data) => setTarget(state, _path, (result, shortName) => Vue.set(result, shortName, data)));
        this._parse(object[name], i, _path);
      }
    } else {
      this.setGetter(path, state => getTarget(state, path));
      this.setCommit(path, (state, data) => setTarget(state, path, (result, shortName) => Vue.set(result, shortName, data)));
    }
  }
  
  /**
   * make a getter
   * @param name
   * @param cb
   */
  setGetter(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._getters[getterName(this._namespace, names)] = cb;
  }
  
  /**
   * make a committer
   * @param name
   * @param cb
   */
  setCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[commitName(this._namespace, names)] = cb;
  }
  
  /**
   * make an array.push committer
   * @param name
   * @param cb
   */
  setPushCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[arrayPushCommitName(this._namespace, names)] = cb;
  }
  
  /**
   * make an array.unshift committer
   * @param name
   * @param cb
   */
  setUnShiftCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[arrayUnShiftCommitName(this._namespace, names)] = cb;
  }
  
  /**
   * make an array.splice committer
   * @param name
   * @param cb
   */
  setSpliceCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[arraySpliceCommitName(this._namespace, names)] = cb;
  }
  
  /**
   * make a action
   * @param name
   * @param cb
   */
  setAction(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._actions[actionName(this._namespace, names)] = async (t, ...args) => await cb(...args);
  }
  
  /**
   * how to make path name?
   * @param name
   * @param formatter
   * @returns {*}
   * @private
   */
  _getName(name, formatter) {
    if (!this.app || !this.app.store) throw new Error('please init SuperVuex first.');
    return formatter(this._namespace, name.split('.'));
  }
  
  /**
   * get a getter
   * @param name
   * @returns {*}
   */
  get(name) {
    const path = this._getName(name, getterName);
    return this.app.store.getter[path];
  }
  
  /**
   * normal commit data
   * @param name
   * @param data
   */
  commit(name, data) {
    const path = this._getName(name, commitName);
    return this.app.store.commit(path, data);
  }
  
  /**
   * array commit data for push
   * @param name
   * @param data
   */
  push(name, ...data) {
    const path = this._getName(name, arrayPushCommitName);
    data.forEach(dat => this.app.store.commit(path, dat));
  }
  
  /**
   * array commit data for unshift
   * @param name
   * @param data
   */
  unshift(name, ...data) {
    const path = this._getName(name, arrayUnShiftCommitName);
    data.forEach(dat => this.app.store.commit(path, dat));
  }
  
  /**
   * array commit data for splice
   * @param name
   * @param data
   */
  splice(name, ...data) {
    const path = this._getName(name, arraySpliceCommitName);
    return this.app.store.commit(path, data);
  }
  
  /**
   * dispatch an action
   * @param name
   * @param data
   * @returns {Promise<any>}
   */
  async dispatch(name, ...data) {
    const path = this._getName(name, actionName);
    return await this.app.store.dispatch(path, ...data);
  }
}