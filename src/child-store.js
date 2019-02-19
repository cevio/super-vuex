import {
  formatExpressionToArray,
  getValueFromExpressionArray,
  setValueFromExpressionArray,
  setArrayValueFromExpressionArray
} from './utils';

export default class ChildStore {
  constructor(namespace, storage) {
    this.root = null;
    this._namespace = namespace;
    this._state = {};
    this._getters = {};
    this._mutations = {};
    this._actions = {};
    this._storage = storage;
    this.committer();
    this.arrayCommitter();
  }
  
  get value() {
    return {
      state: this._state,
      getters: this._getters,
      mutations: this._mutations,
      actions: this._actions,
    };
  }
  
  _missRoot() {
    if (!this.root.store) throw new Error(`you should bind ${this._namespace} ChildVuex first.`);
  }
  
  _getterName(expression) {
    return `${this._namespace}:GETTER:${expression}`;
  }
  
  _commitName(expression) {
    return `${this._namespace}:COMMITTER:${expression}`;
  }
  
  _actionName(expression) {
    return `${this._namespace}:ACTION:${expression}`;
  }
  
  get _sysCommitName() {
    return `${this._namespace}:SYS:COMMITTER`;
  }
  
  get _arrayCommitName() {
    return `${this._namespace}:ARRAY:COMMITTER`;
  }
  
  async setState(state) {
    this._state = state;
    if (this._storage) {
      const res = await this._storage.get('super_vuex_' + this._namespace);
      if (res) {
        try {
          const converts = JSON.parse(res);
          this._state = converts;
        } catch(e) {}
      }
    }
  }
  
  get(expression) {
    this._missRoot();
    const getterName = this._getterName(expression);
    if (this._getters[getterName]) return this.root.store.getters[getterName];
    return getValueFromExpressionArray(this.root.store.state[this._namespace], formatExpressionToArray(expression));
  }
  
  setGetter(expression, cb) {
    this._getters[this._getterName(expression)] = cb;
  }

  _persister(state) {
    if (this._storage) {
      clearTimeout(this._persistTimer);
      this._persistTimer = setTimeout(() => {
        this._storage.set('super_vuex_' + this._namespace, JSON.stringify(state));
      }, 0);
    }
  }
  
  committer() {
    this._mutations[this._sysCommitName] = (state, { expression, data }) => {
      setValueFromExpressionArray(state, formatExpressionToArray(expression), data);
      this._persister(state);
    }
  }
  
  arrayCommitter() {
    this._mutations[this._arrayCommitName] = (state, { expression, method, args }) => {
      setArrayValueFromExpressionArray(state, formatExpressionToArray(expression), method, args);
      this._persister(state);
    }
  }

  clear() {
    if (this._storage) {
      this._storage.delete('super_vuex_' + this._namespace);
    }
  }
  
  commit(expression, data) {
    this._missRoot();
    const mutationName = this._commitName(expression);
    if (this._mutations[mutationName]) {
      this.root.store.commit(mutationName, data);
    } else {
      this.root.store.commit(this._sysCommitName, { expression, data });
    }
  }
  setCommit(expression, cb) {
    this._mutations[this._commitName(expression)] = cb;
  }
  
  setAction(expression, cb) {
    this._actions[this._actionName(expression)] = cb;
  }
  
  dispatch(expression, ...args) {
    this._missRoot();
    return this.root.store.dispatch(this._actionName(expression), ...args);
  }
  
  push(expression, ...args) {
    this._missRoot();
    return this.root.store.commit(this._arrayCommitName, {
      expression, args,
      method: 'push'
    });
  }
  
  unshift(expression, ...args) {
    this._missRoot();
    return this.root.store.commit(this._arrayCommitName, {
      expression, args,
      method: 'unshift'
    });
  }
  
  pop(expression, ...args) {
    this._missRoot();
    return this.root.store.commit(this._arrayCommitName, {
      expression, args,
      method: 'pop'
    });
  }
  
  shift(expression, ...args) {
    this._missRoot();
    return this.root.store.commit(this._arrayCommitName, {
      expression, args,
      method: 'shift'
    });
  }
  
  splice(expression, ...args) {
    this._missRoot();
    return this.root.store.commit(this._arrayCommitName, {
      expression, args,
      method: 'splice'
    });
  }
  
  reverse(expression, ...args) {
    this._missRoot();
    return this.root.store.commit(this._arrayCommitName, {
      expression, args,
      method: 'reverse'
    });
  }
  
  sort(expression, ...args) {
    this._missRoot();
    return this.root.store.commit(this._arrayCommitName, {
      expression, args,
      method: 'sort'
    });
  }
}