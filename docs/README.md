---
home: true
actionText: 起步
actionLink: /md/introduce/introduce
features:
- title: 数据驱动
  details: 用户只需定义好数据结构，其他操作SuperVuex全部自动生成。
- title: 完美生态
  details: 支持所有原生vuex插件。
- title: 个性化配置
  details: 用户可覆盖SuperVuex生成的所有操作，并且可自定义生成自己的操作。
---

## 快速安装

```javascript
npm i super-vuex
```
## 快速使用

```javascript
// user.js
import { ChildVuex } from "super-vuex";
const child = new ChildVuex('user');
export default child;
child.value = {
  name: 'evio',
  age: 18,
}
```
```javascript
// index.js
import { SuperVuex } from 'super-vuex';
import userModule from './user.js'
const Main = new SuperVuex();
Main.setModule(userModule);
export default Main.init();
```