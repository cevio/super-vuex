import Vue from 'vue';
import Vuex from 'vuex';
import ChildVuex from './interface';
import {
  getterName,
  commitName,
  actionName,
  arrayPushCommitName,
  arrayUnShiftCommitName,
  arraySpliceCommitName,
  objectDeleteCommitName,
  parseModuleExpression
} from './util';

Vue.use(Vuex);

export default class SuperVuex extends ChildVuex {
  constructor(name) {
    super(name || 'Global');
    this._modules = {};
    this.store = null;
  }
  
  _getName(name, formatter) {
    if (!this.store) throw new Error('please init SuperVuex first.');
    let { moduleName, expression } = parseModuleExpression(name);
    if (!moduleName) moduleName = this._namespace;
    return formatter(moduleName, expression);
  }
  
  init() {
    this.store = new Vuex.Store(this.value);
    return {
      store: this.store,
      factory: this
    }
  }
  
  get(name) {
    const path = this._getName(name, getterName);
    return this.store.getter[path];
  }
  
  commit(name, data) {
    const path = this._getName(name, commitName);
    return this.store.commit(path, data);
  }
  
  push(name, ...data) {
    const path = this._getName(name, arrayPushCommitName);
    data.forEach(dat => this.store.commit(path, dat));
  }
  
  unshift(name, ...data) {
    const path = this._getName(name, arrayUnShiftCommitName);
    data.forEach(dat => this.store.commit(path, dat));
  }
  
  splice(name, ...data) {
    const path = this._getName(name, arraySpliceCommitName);
    return this.store.commit(path, data);
  }
  
  delete(name) {
    const path = this._getName(name, objectDeleteCommitName);
    return this.store.commit(path);
  }
  
  dispatch(name, ...data) {
    const path = this._getName(name, actionName);
    return this.store.dispatch(path, ...data);
  }
  
  setModule(obj) {
    if (obj instanceof ChildVuex) {
      this._modules[obj._namespace] = obj.value;
    }
  }
}