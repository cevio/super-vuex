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
  import store from './store';
  export default {
    store: store,
    name: "index",
    methods: {
      changeName() {
        this.$store.user.commit('name', 'someone');
      },
      changeAllow() {
        this.$store.user.commit('load.allow', false);
      },
      pushStudent() {
        this.$store.user.push('students', {
          name: 'huaping',
          age: 300
        });
      },
      unshiftStudent() {
        this.$store.user.unshift('students', {
          name: 'huaping1',
          age: 302
        });
      },
      deleteStudent() {
        this.$store.user.splice('students', 0, 1);
      },
      gets() {
        this.$store.user.dispatch('load.data');
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

> 注意：我们也可以通过简化的方式来获取数据，比如：

```javascript
Factory.user.commit('a.n.c', data);
```


