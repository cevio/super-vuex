(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i super-vuex\n")])])]),s("h2",{attrs:{id:"使用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),s("h3",{attrs:{id:"supervuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supervuex","aria-hidden":"true"}},[t._v("#")]),t._v(" SuperVuex")]),s("p",[t._v("初始化")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SuperVuex "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'super-vuex'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Main "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SuperVuex")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'NameSpace'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("参数为命名空间，可不传")]),s("h4",{attrs:{id:"supervuex-setmodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supervuex-setmodule","aria-hidden":"true"}},[t._v("#")]),t._v(" [SuperVuex].setModule")]),s("p",[t._v("装载一个业务模块（module模块）。")]),s("blockquote",[s("p",[t._v("该模块必须继承自ChildVuex。")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" UserStore "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./store/user'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CompanyStore "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./store/company'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMain"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setModule")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserStore"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CompanyStore"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"supervuex-setplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supervuex-setplugin","aria-hidden":"true"}},[t._v("#")]),t._v(" [SuperVuex].setPlugin")]),s("p",[t._v("增加额外的插件供使用，插件也是纯Vuex支持的插件。")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Main"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setPlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyPlugin_1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Myplugin_2"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"supervuex-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supervuex-init","aria-hidden":"true"}},[t._v("#")]),t._v(" [SuperVuex].init")]),s("p",[t._v("用于初始化整个数据结构，同时返回纯原生的new Vuex.Store对象。可以在Vue文件中直接使用该返回对象。")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Main"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("init")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"childvuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childvuex","aria-hidden":"true"}},[t._v("#")]),t._v(" ChildVuex")]),s("p",[t._v("主要用于业务逻辑数据模块化（相当于vuex中module中的模块）。它与SuperVuex相似，只有一个参数即命名空间。")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ChildVuex "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"super-vuex"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" child "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ChildVuex")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'user'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" child"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"childvuex-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childvuex-value","aria-hidden":"true"}},[t._v("#")]),t._v(" [ChildVuex].value")]),s("ul",[s("li",[t._v("getter:value 获取整个Vuex初始化配置参数。一般不需要用到这个属性（由系统自动调用）。")]),s("li",[t._v("setter:value 定义整个模块的数据初始化内容。")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'evio'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("18")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  students"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'yixianle'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      age"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  load"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    allow"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    total"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("你也可以通过setState方法来设置一个数据树")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setState")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'evio'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("setState方法等同于value的setter方法。")]),s("h4",{attrs:{id:"childvuex-data-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childvuex-data-path","aria-hidden":"true"}},[t._v("#")]),t._v(" ChildVuex data path")]),s("p",[t._v("数据路径，在之后的所有方法中，数据路径至关重要，它是一个数据的直观路径字符串，也就是上面[ChildVuex].value 数据定义的数据路径。")]),s("p",[t._v("比如我们需要获取allow的路径：")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token string"}},[t._v("'load.allow'")]),t._v("\n")])])]),s("p",[t._v("ChildVuex只对Object类型进行深度路径处理，一旦遇到非object类型，路径就停止跟踪。数组虽然属于object类型，但是它在这里也是停止跟踪的。比如")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token string"}},[t._v("'students'")]),t._v("\n")])])]),s("h3",{attrs:{id:"操作方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作方法")]),s("p",[t._v("调用语法")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./store'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/*\n   *store：super-vuex在调用init后生成的实例；\n   *namespace：module的命名空间；\n   *function：需要调用的方法；\n   *arguments：参数\n  */")]),t._v("\n  store"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("namespace"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"方法列表function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法列表function","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法列表function")]),s("ul",[s("li",[t._v("get(name):获取一个getter属性；例：store.sub.get('subs')")]),s("li",[t._v("commit(name, data):提交处理一个属性；例：store.user.commit('age', data)")]),s("li",[t._v("push(name, ...data):提交一个数据的push行为")]),s("li",[t._v("pop(name):提交一个数据的pop行为")]),s("li",[t._v("unshift(name, ...data):提交一个数据的unshift行为")]),s("li",[t._v("shift(name): 提交一个数据的shift行为")]),s("li",[t._v("splice(name, arguments):用法同Array.prototype.splice")]),s("li",[t._v("dispatch(name, data):个async/await型的调用函数。与Vuex中的dispatch一致，用于出发setAction定义的行为")])]),s("h4",{attrs:{id:"辅助方法adjfunction-对childvuex自动生成的属性进行覆盖或自定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#辅助方法adjfunction-对childvuex自动生成的属性进行覆盖或自定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 辅助方法adjFunction(对ChildVuex自动生成的属性进行覆盖或自定义)")]),s("h5",{attrs:{id:"childvuex-setgetter-path-cb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childvuex-setgetter-path-cb","aria-hidden":"true"}},[t._v("#")]),t._v(" [ChildVuex].setGetter(path, cb)")]),s("p",[t._v("自定义或覆盖模块中相应getter的属性，相当于原生vuex的getter属性。")]),s("p",[s("strong",[t._v("覆盖原有的getter")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setGetter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'load.total'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/* 调用$store.user.get('load.total') \n     * 返回 200\n     */")]),t._v("\n")])])]),s("p",[s("strong",[t._v("自定义新的getter")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setGetter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'myNewPath'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/* 调用$store.user.get('myNewPath') \n     * 返回 -100\n     */")]),t._v("\n")])])]),s("h4",{attrs:{id:"childvuex-setcommit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childvuex-setcommit","aria-hidden":"true"}},[t._v("#")]),t._v(" [ChildVuex].setCommit")]),s("p",[t._v("自定义或覆盖模块中相应的commit属性，相当于Vuex中的commit。")]),s("p",[s("strong",[t._v("覆盖式")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setCommit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'load.total'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("total"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v("data"),s("span",{attrs:{class:"token operator"}},[t._v("+")]),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("自定义")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setCommit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'myNewPath'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'data'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/* 调用$store.user.commit('myNewPath', 'yixianle') \n     * user中的'name'改为'yixianle'\n     */")]),t._v("\n")])])]),s("h4",{attrs:{id:"childvuex-set-arrayaction-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childvuex-set-arrayaction-commit","aria-hidden":"true"}},[t._v("#")]),t._v(" [ChildVuex].set{ArrayAction}Commit")]),s("p",[t._v("自定义或覆盖数组的commit操作。")]),s("ul",[s("li",[t._v("[ChildVuex].setPushCommit 数组的push操作行为")]),s("li",[t._v("[ChildVuex].setUnShiftCommit 数组的unshift操作行为")]),s("li",[t._v("[ChildVuex].setSpliceCommit 数组的splice操作行为")]),s("li",[t._v("[ChildVuex].setPopCommit 数组的pop操作行为")]),s("li",[t._v("[ChildVuex].setShiftCommit 数组的Shift操作行为")])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setPushCommit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setUnShiftCommit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setPopCommit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setShiftCommit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 注意splice使用方法，在`data`中是一个数组")]),t._v("\n    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setSpliceCommit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"childvuex-setaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#childvuex-setaction","aria-hidden":"true"}},[t._v("#")]),t._v(" [ChildVuex].setAction")]),s("p",[t._v("设定Vuex的自定义行为，由dispatch触发。")]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setAction")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'load.data.fetch'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'https://registry.npm.taobao.org/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      child"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("commit")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'load.data'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);