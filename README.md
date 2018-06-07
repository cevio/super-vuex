# super-vuex

超级强大的VUEX操作库，基本只需要定义数据结构即可

## Install

```shell
npm i super-vuex
```

## Usage

创建一个根实例

```javascript
// store.js
import { SuperVuex } from 'super-vuex';
import UserStore from './store/user';

const Main = new SuperVuex();
Main.setModule(UserStore);
export default Main.init();
```

创建user数据

```javascript
// ./store/user.js
import { ChildVuex } from "super-vuex";

const child = new ChildVuex('user');
export default child;

child.value = {
  name: 'evio',
  age: 18,
  students: [
    {
      name: 'yixianle',
      age: 10
    }
  ],
  load: {
    allow: true
  }
};
```

如何在VUE文件中使用

```vue
<template>
  ...
</template>

<script>
  import Store from './store';
  export default {
    store: Store.store,
    name: "index",
    methods: {
      changeName() {
        Store.factory.commit('user:name', 'someone');
      },
      changeAllow() {
        Store.factory.commit('user:load.allow', false);
      },
      pushStudent() {
        Store.factory.push('user:students', {
          name: 'huaping',
          age: 300
        });
      },
      unshiftStudent() {
        Store.factory.unshift('user:students', {
          name: 'huaping1',
          age: 302
        });
      },
      deleteStudent() {
        Store.factory.splice('user:students', 0, 1);
      },
      deleteAllow() {
        Store.factory.delete('user:load.allow');
      }
    }
  }
</script>
```

## Setters

- setGetter
- setCommit
- setPushCommit
- setUnShiftCommit
- setSpliceCommit
- setDeleteCommit
- setAction


## Factory

- init
- get
- commit
- push
- unshift
- splice
- delete
- dispatch
- setModule


