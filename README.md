# super-vuex

一套用于简化`Vuex`的数据架构，使开发者能够摈弃繁琐的书写，减少代码量，便于维护。此框架主要解决的问题是我们在日常开发中`Vuex`被诟病的书写和理念，基本使开发者只需关心数据的定义即可，对于对象和数组的操作能够通过`this.$store[${namespace}][$action]`的模式快速调用。

## Install

```shell
npm i super-vuex
```

> 安装完毕后，此模块已包含最新的`vue`与`vuex`，开发者可以直接引用。

## Core

它的核心主要是两部分：

1. SuperVuex 核心，用于创建实例。
2. ChildVuex 模块，用于对单独的业务逻辑进行模块化。

`SuperVuex`也是继承自`ChildVuex`，所以它也具备`ChildVuex`的所有方法与属性。

### SuperVuex

初始化：

```javascript
import { SuperVuex } from 'super-vuex';
const Main = new SuperVuex('NameSpace');
```

SuperVuex实例只有一个参数，那就是命名空间，但是我们也可以省略，如果被省略，默认命名空间是`Gloabl`。

#### [SuperVuex].setModule

装载一个业务逻辑模块

> 模块必须继承自ChildVuex, 否则无法装载上。

```javascript
import UserStore from './store/user';
import CompanyStore from './store/company';
Main.setModule(UserStore, CompanyStore, ...);
```

#### [SuperVuex].setPlugin

增加额外的插件供使用，插件也是纯`Vuex`支持的插件。

```javascript
Main.setPlugin(MyPlugin_1, Myplugin_2, ...);
```

#### [SuperVuex].init

用于初始化整个数据结构，同时返回纯原生的`new Vuex.Store`对象。可以在`Vue`文件中直接使用该返回对象。

```javascript
export default Main.init();
```

#### [SuperVuex].registerModule

动态注册模块

```javascript
Main.registerModule(A, B, C, ...);
```

#### [SuperVuex].unregisterModule

解注模块

```javascript
Main.unregisterModule('abc', 'def', ...);
```

### ChildVuex

主要用于业务逻辑数据模块化。它与`SuperVuex`相似，只有一个参数即命名空间。

```javascript
import { ChildVuex } from "super-vuex";
const child = new ChildVuex('user');
export default child;
```

#### [ChildVuex].value

- `getter:value` 获取整个`Vuex`初始化配置参数。一般不需要用到这个属性（由系统自动调用）。
- `setter:value` 定义整个模块的数据初始化内容。

```javascript
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
    data: {},
    total: 100
  }
}
```

你也可以通过`setState`方法来设置一个数据树

```javascript
child.setState({
  name: 'evio',
  age: 18
})
```

其实`.value`是`setState`的变型而已。

#### ChildVuex data path

数据路径，在之后的所有方法中，数据路径至关重要，它是一个数据的直观路径字符串，也就是上面`[ChildVuex].value` 数据定义的数据路径。

比如我们需要获取allow的路径：

```javascript
'load.allow'
```

ChildVuex只对Object类型进行深度路径处理，一旦遇到非`object`类型，路径就停止跟踪。数组虽然属于`object`类型，但是它在这里也是停止跟踪的。比如

```javascript
'students'
```

#### [ChildVuex].setGetter

自定义Getter属性，相当于`Vuex`中的`getter`。

**覆盖式：**

```javascript
child.setGetter('load.total', state => {
    return state.load.total + 100;
});
```

当我们调用这个getter的时候，值默认就是`200`。

**自定义：**


```javascript
child.setGetter('demo.getter.self', state => {
    return state.load.total + 200;
});
```


#### [ChildVuex].setCommit

对于一般数据对象的值覆盖行为，相当于`Vuex`中的`commit`

**覆盖式：**

```javascript
child.setCommit('load.data', (state, data) => {
    state.load.data = Object.assign(state.load.data, data);
});
```

**自定义：**

```javascript
child.setCommit('demo.set.commit', (state, data) => {
    state.load.total = state.load.total + state.age + data;
});
```

#### [ChildVuex].set{ArrayAction}Commit

如果我们对一个数组进行操作的话，我们有非常简便的方法。

- **[ChildVuex].setPushCommit** 数组的`push`操作行为
- **[ChildVuex].setUnShiftCommit** 数组的`unshift`操作行为
- **[ChildVuex].setSpliceCommit** 数组的`splice`操作行为
- **[ChildVuex].setPopCommit** 数组的`pop`操作行为
- **[ChildVuex].setShiftCommit** 数组的`shift`操作行为


```javascript
child.setPushCommit(path, callback<(state, data)>);
child.setUnShiftCommit(path, callback<(state, data)>);

// 注意splice使用方法，在`data`中是一个数组
child.setSpliceCommit(path, callback<(state, data)>);

child.setPopCommit(path);
child.setShiftCommit(path);
```

#### [ChildVuex].setAction

设定`Vuex`的自定义行为，由`dispatch`触发。

```javascript
child.setAction('load.data.fetch', async () => {
  const res = await axios.get('https://registry.npm.taobao.org/');
  child.commit('load.data', res.data);
});
```


#### [ChildVuex].get

获取一个`Getter`属性

```javascript
child.get('demo.getter.self');
```

#### [ChildVuex].commit

提交处理一个数据

```javascript
child.commit('load.data', 1000);
child.commit('demo.set.commit', 2000);
```

#### [ChildVuex].push

提交一个数据 `push`行为

```javascript
const data = [
  {
     name: 'dafa',
     age: 22
  },
  {
    name: 'dsfetree',
    age: 34
  }
]
child.push('students', ...data);
```

#### [ChildVuex].pop

删除最后一个数据 `pop`行为

```javascript
child.pop('students');
```

#### [ChildVuex].unshift

提交一个数据 `unshift`行为

```javascript
const data = [
  {
     name: 'dafa',
     age: 22
  },
  {
    name: 'dsfetree',
    age: 34
  }
]
child.unshift('students', ...data);
```

#### [ChildVuex].shift

删除最前一个数据 `shift`行为

```javascript
child.shift('students');
```

#### [ChildVuex].splice

删除或者替换一个数据

```javascript
child.splice('students', 0, 1);
child.splice('students', 0, 1, {
  name: 'tttt',
  age: 21
})
```

#### [ChildVuex].dispatch

它是一个`async/await`型的调用函数。与`Vuex`中的`dispatch`一致，用于出发`setAction`定义的行为。

```javascript
await child.disptach('load.data.fetch', ...data);
```

## Use in vue

在`Vue`中我们可以简单使用，与`Vuex`的store使用完全不冲突。

```javascript
import store from './store';
export default {
  store: store,
  name: "index",
  ...
}
```

调用模式有些许区别：

```javascript
this.$store.user.commit('name', 'someone');
this.$store.user.commit('load.allow', false);
this.$store.user.splice('students', 0, 1);
this.$store.user.dispatch('load.data');
this.$store.user.push('students', {
  name: 'huaping',
  age: 300
});
this.$store.user.unshift('students', {
  name: 'huaping1',
  age: 302
});
```

# 最后

非常感谢大家看完文档，如果遇到什么问题，请提交给我。我也很乐意大家给我提PR.