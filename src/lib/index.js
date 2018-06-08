import Vue from 'vue';
import Vuex from 'vuex';
import ChildVuex from './interface';

Vue.use(Vuex);

export default class SuperVuex extends ChildVuex {
  constructor(name) {
    super(name || 'Global');
    this._pools = [];
    this.store = null;
    this.app = this;
  }
  
  /**
   * init for vuex
   * @returns {SuperVuex}
   */
  init() {
    this.store = new Vuex.Store(this.value);
    this._pools.forEach(item => {
      if (this.store[item._namespace]) throw new Error(`${item._namespace} has already exists on store`);
      this.store[item._namespace] = item;
    });
    return this.store;
  }
  
  /**
   * link module to vuex store
   * @param args
   * @returns {SuperVuex}
   */
  setModule(...args) {
    args.forEach(obj => {
      if (obj instanceof ChildVuex) {
        if (this[obj._namespace]) throw new Error(`${obj._namespace} is exists`);
        this._modules[obj._namespace] = obj.value;
        this[obj._namespace] = obj;
        obj.app = this;
        this._pools.push(obj);
      }
    });
    return this;
  }
  
  setPlugin(...plugins) {
    this._plugins.push(...plugins);
    return this;
  }
}