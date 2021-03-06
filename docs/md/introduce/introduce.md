# 介绍
强大而简易的VUEX操作库，它帮助用户在使用vuex时，省去了繁琐的vuex结构定义等复杂繁琐的内容。

使用super-vuex，只需定义好数据结构，剩下的一切它会自动帮你生成，它会给你提供简易的数据操作接口，使用方便，简化了使用vuex过程中繁琐的步骤。

操作起来非常方便，不需要手动去定义module、mutation、state、getter和action，定义好数据结构后，通过数据驱动直接自动生成，并提供了调用方式简单的API接口功使用者使用。

## 运行原理

super-vuex依赖于vuex，在原生vuex的基础上对其进行封装，在定义好数据结构后，super-vuex会自动帮你生成module、mutation、state、getter和action模块，并提供接口调用。


## core 核心
实现层面主要有两个类：ChildVuex 和 SuperVuex。
1. ChildVuex，用于创建实例（原生vuex中的module模块）
2. SuperVuex，继承自ChildVuex，用于对业务逻辑进行模块化（整合module模块，生成vuex实例）。