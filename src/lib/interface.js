import Vue from 'vue';
import {
  getterName,
  commitName,
  actionName,
  arrayPushCommitName,
  arrayUnShiftCommitName,
  arraySpliceCommitName,
  objectDeleteCommitName,
  getTarget,
  setTarget
} from './util';

export default class ChildVuex {
  constructor(name) {
    this._state = {};
    this._getters = {};
    this._mutations = {};
    this._actions = {};
    this._namespace = name;
  }
  
  get value() {
    return {
      state: this._state,
      getters: this._getters,
      mutations: this._mutations,
      actions: this._actions,
      modules: this._modules
    };
  }
  
  set value(value) {
    this._state = value;
    this._parseState(value);
  }
  
  _parseState(value) {
    for (let i in value) {
      this._parse(value, i, [i]);
    }
  }
  
  _parse(object, name, path = []) {
    if (Array.isArray(object[name])) {
      this.setGetter(path, state => getTarget(state, path));
      this.setCommit(path, (state, data) => setTarget(state, path, (result, shortName) => Vue.set(result, shortName, data)));
      this.setPushCommit(path, (state, data) => setTarget(state, path, (result, shortName) => result[shortName].push(data)));
      this.setUnShiftCommit(path, (state, data) => setTarget(state, path, (result, shortName) => result[shortName].unshift(data)));
      this.setSpliceCommit(path, (state, data) => setTarget(state, path, (result, shortName) => result[shortName].splice(...data)));
      this.setDeleteCommit(path, state => setTarget(state, path, (result, shortName) => Vue.delete(result, shortName)));
    } else if (typeof object[name] === 'object') {
      for (const i in object[name]) {
        const _path = path.slice(0);
        _path.push(i);
        this.setGetter(_path, state => getTarget(state, _path));
        this.setCommit(_path, (state, data) => setTarget(state, _path, (result, shortName) => Vue.set(result, shortName, data)));
        this.setDeleteCommit(_path, state => setTarget(state, _path, (result, shortName) => Vue.delete(result, shortName)));
        this._parse(object[name], i, _path);
      }
    } else {
      this.setGetter(path, state => getTarget(state, path));
      this.setCommit(path, (state, data) => setTarget(state, path, (result, shortName) => Vue.set(result, shortName, data)));
      this.setDeleteCommit(path, state => setTarget(state, path, (result, shortName) => Vue.delete(result, shortName)));
    }
  }
  
  setGetter(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._getters[getterName(this._namespace, names)] = cb;
  }
  
  setCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[commitName(this._namespace, names)] = cb;
  }
  
  setPushCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[arrayPushCommitName(this._namespace, names)] = cb;
  }
  
  setUnShiftCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[arrayUnShiftCommitName(this._namespace, names)] = cb;
  }
  
  setSpliceCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[arraySpliceCommitName(this._namespace, names)] = cb;
  }
  
  setDeleteCommit(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._mutations[objectDeleteCommitName(this._namespace, names)] = cb;
  }
  
  setAction(name, cb) {
    const names = Array.isArray(name) ? name : name.split('.');
    this._actions[actionName(this._namespace, names)] = cb;
  }
}