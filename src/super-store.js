import Vue from 'vue';
import Vuex from 'vuex';
import ChildStore from './child-store';
import { defineReactive } from './utils';

Vue.use(Vuex);

export default class SuperStore extends ChildStore {
  constructor(namespace, data) {
    super(namespace, data);
    this._modules = {};
    this._plugins = [];
    this._components = [];
    this.store = null;
    this.root = this;
  }
  
  init() {
    this.store = new Vuex.Store(Object.assign({
      modules: this._modules,
      plugins: this._plugins,
    }, this.value));
    
    this.store.$connect = this;
    defineReactive(this.store, this._namespace, this);
    defineReactive(this, this._namespace, this);
    
    for (let i = 0; i < this._components.length; i++) {
      const component = this._components[i];
      defineReactive(this.store, component._namespace, component);
      defineReactive(this, component._namespace, component);
    }
    
    return this.store;
  }
  
  setPlugin(...plugins) {
    this._plugins.push(...plugins);
    return this;
  }
  
  setModule(...args) {
    args.forEach(obj => {
      if (obj instanceof ChildStore) {
        obj.root = this;
        this._modules[obj._namespace] = obj.value;
        this._components.push(obj);
      }
    });
    return this;
  }
  
  registerModule(...args) {
    args.forEach(obj => {
      if (obj instanceof ChildStore) {
        obj.root = this;
        this._modules[obj._namespace] = obj.value;
        defineReactive(this.store, obj._namespace, obj);
        defineReactive(this, obj._namespace, obj);
        this.store.registerModule(obj._namespace, obj.value);
      }
    });
    return this;
  }
  
  unregisterModule(...args) {
    args.forEach(name => {
      if (this[name] && this.store[name]) {
        delete this.store[name];
        delete this[name];
        this.store.unregisterModule(name);
      }
    });
    return this;
  }
}