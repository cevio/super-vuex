# 使用

## 安装

```shell
npm i super-vuex
```
## 使用


### SuperVuex
初始化
```javascript
import { SuperVuex } from 'super-vuex';
const Main = new SuperVuex('NameSpace');
```
参数为命名空间，可不传

#### [SuperVuex].setModule
装载一个业务模块（module模块）。
> 该模块必须继承自ChildVuex。

```javascript
import UserStore from './store/user';
import CompanyStore from './store/company';
Main.setModule(UserStore, CompanyStore, ...);
```

#### [SuperVuex].setPlugin
增加额外的插件供使用，插件也是纯Vuex支持的插件。
```javascript
Main.setPlugin(MyPlugin_1, Myplugin_2, ...);
```
#### [SuperVuex].init
用于初始化整个数据结构，同时返回纯原生的new Vuex.Store对象。可以在Vue文件中直接使用该返回对象。
```javascript
export default Main.init();
```

#### [SuperVuex].$connect.registerModule

在实例SuperVuex.init执行之后，动态注入module模块
```javascript
Main.$connect.registerModule(A:ChildVuex, B:ChildVuex, C:ChildVuex, ...);
```
#### [SuperVuex].$connect.unregisterModule

在实例SuperVuex.init执行之后，解注module模块
```javascript
Main.$connect.unregisterModule(a:ChildVuex.namespace,b:ChildVuex.namespace,c:ChildVuex.namespace, ...);
```

### ChildVuex
主要用于业务逻辑数据模块化（相当于vuex中module中的模块）。它与SuperVuex相似，只有一个参数即命名空间。
```javascript
import { ChildVuex } from "super-vuex";
const child = new ChildVuex('user');
export default child;
```
#### [ChildVuex].value

- getter:value 获取整个Vuex初始化配置参数。一般不需要用到这个属性（由系统自动调用）。
- setter:value 定义整个模块的数据初始化内容。

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
你也可以通过setState方法来设置一个数据树
```javascript
child.setState({
  name: 'evio',
  age: 18
})
```
setState方法等同于value的setter方法。

#### ChildVuex data path
数据路径，在之后的所有方法中，数据路径至关重要，它是一个数据的直观路径字符串，也就是上面[ChildVuex].value 数据定义的数据路径。

比如我们需要获取allow的路径：
```javascript
'load.allow'
```
ChildVuex只对Object类型进行深度路径处理，一旦遇到非object类型，路径就停止跟踪。数组虽然属于object类型，但是它在这里也是停止跟踪的。比如
```javascript
'students'
```

### 操作方法

调用语法
```javascript
  import store from './store';
  /*
   *store：super-vuex在调用init后生成的实例；
   *namespace：module的命名空间；
   *function：需要调用的方法；
   *arguments：参数
  */
  store[namespace][function](arguments)
```

#### 方法列表function
- get(name):获取一个getter属性；例：store.sub.get('subs')
- commit(name, data):提交处理一个属性；例：store.user.commit('age', data)
- push(name, ...data):提交一个数据的push行为
- pop(name):提交一个数据的pop行为
- unshift(name, ...data):提交一个数据的unshift行为
- shift(name): 提交一个数据的shift行为
- splice(name, arguments):用法同Array.prototype.splice
- dispatch(name, data):个async/await型的调用函数。与Vuex中的dispatch一致，用于出发setAction定义的行为

#### 辅助方法adjFunction(对ChildVuex自动生成的属性进行覆盖或自定义)

##### [ChildVuex].setGetter(path, cb)
自定义或覆盖模块中相应getter的属性，相当于原生vuex的getter属性。

**覆盖原有的getter**
```javascript
    child.setGetter('load.total', state => {
        return state.load.total + 100;
    });
    /* 调用$store.user.get('load.total') 
     * 返回 200
     */
```
**自定义新的getter**

```javascript
    child.setGetter('myNewPath', state => {
        return -state.load.total;
    });
    /* 调用$store.user.get('myNewPath') 
     * 返回 -100
     */
```

#### [ChildVuex].setCommit
自定义或覆盖模块中相应的commit属性，相当于Vuex中的commit。

**覆盖式**
```javascript
    child.setCommit('load.total', (state, data) => {
        state.load.total = state.load.total+data+100;
    });
```

**自定义**
```javascript
    child.setCommit('myNewPath', (state, data) => {
        state.name = 'data';
    });
    /* 调用$store.user.commit('myNewPath', 'yixianle') 
     * user中的'name'改为'yixianle'
     */
```

#### [ChildVuex].set{ArrayAction}Commit
自定义或覆盖数组的commit操作。
- [ChildVuex].setPushCommit 数组的push操作行为
- [ChildVuex].setUnShiftCommit 数组的unshift操作行为
- [ChildVuex].setSpliceCommit 数组的splice操作行为
- [ChildVuex].setPopCommit 数组的pop操作行为
- [ChildVuex].setShiftCommit 数组的Shift操作行为

```javascript
    child.setPushCommit(path, callback<(state, data)>);
    child.setUnShiftCommit(path, callback<(state, data)>);
    child.setPopCommit(path, callback<(state)>);
    child.setShiftCommit(path, callback<(state)>);
    
    // 注意splice使用方法，在`data`中是一个数组
    child.setSpliceCommit(path, callback<(state, data)>);
```

#### [ChildVuex].setAction
设定Vuex的自定义行为，由dispatch触发。

```javascript
    child.setAction('load.data.fetch', async () => {
      const res = await axios.get('https://registry.npm.taobao.org/');
      child.commit('load.data', res.data);
    });
```


