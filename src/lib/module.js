import {
  actionName,
  arrayPushCommitName,
  arraySpliceCommitName,
  arrayUnShiftCommitName,
  commitName,
  getterName, objectDeleteCommitName
} from "./util";

export default class SuperVuexModule {
  constructor(app, name) {
    this.app = app;
    this.name = name;
  }
  
  _getName(name, formatter) {
    if (!this.app.store) throw new Error('please init SuperVuex first.');
    return formatter(this.name, name.split('.'));
  }
  
  get(name) {
    const path = this._getName(name, getterName);
    return this.app.store.getter[path];
  }
  
  commit(name, data) {
    const path = this._getName(name, commitName);
    return this.app.store.commit(path, data);
  }
  
  push(name, ...data) {
    const path = this._getName(name, arrayPushCommitName);
    data.forEach(dat => this.app.store.commit(path, dat));
  }
  
  unshift(name, ...data) {
    const path = this._getName(name, arrayUnShiftCommitName);
    data.forEach(dat => this.app.store.commit(path, dat));
  }
  
  splice(name, ...data) {
    const path = this._getName(name, arraySpliceCommitName);
    return this.app.store.commit(path, data);
  }
  
  delete(name) {
    const path = this._getName(name, objectDeleteCommitName);
    return this.app.store.commit(path);
  }
  
  async dispatch(name, ...data) {
    const path = this._getName(name, actionName);
    return await this.app.store.dispatch(path, ...data);
  }
}