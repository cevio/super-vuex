# demo

创建ChildVuex实例，存储user数据
```javascript
// ./store/user.js
import { ChildVuex } from "super-vuex";

// 'user'为命名空间
const child = new ChildVuex('user');
export default child;

// 初始化vuex配置参数
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
    allow: true,
    total: 100
  }
};

// 你也可以写成这样
child.setState({
  name: 'evio',
  age: 18,
  students: [
    {
      name: 'yixianle',
      age: 10
    }
  ],
  load: {
    allow: true,
    total: 100
  }
})
```

可以创建多个，这里再创建一个ChildVuex实例，存储sub数据

```javascript
// ./store/sub.js
import { ChildVuex } from "super-vuex";

// 'sub'为命名空间
const sub = new ChildVuex('sub');
export default sub;

sub.value = {
  name: 'evio',
  subs: [1,2,3,4],
  isVip: false,
};

```

创建一个SuperVuex实例

```javascript
// store.js
import { SuperVuex } from 'super-vuex';

// 两个vuex插件，vuexPromise和vuejsStorage
import vuexPromise from 'vuex-promise';
import vuejsStorage from 'vuejs-storage';

import UserStore from './store/user';
import Subs from './store/sub'

const Main = new SuperVuex();
Main.setModule(UserStore);
// 可以set多个module
Main.setModule(Subs);
// 在SuperVuex中使用插件
Main.setPlugin(vuexPromise, vuejsStorage);

export default Main.init();
```
在VUE中如何使用
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
      pushSubs() {
        this.$store.sub.push('subs', 10);
      },
      popSubs() {
        this.$store.sub.pop('subs');
      },
      unshiftStudent() {
        this.$store.user.unshift('students', {
          name: 'huaping1',
          age: 302
        });
      },
      shiftStudent() {
        this.$store.user.shift('students')
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
