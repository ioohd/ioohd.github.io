---
title: 关于VUE
date: 2022-04-12 18:23:34
tags: VUE
---

### Vue 是什么？

<!-- <div align="center">
    <img src="/images/vue-logo.svg" alt="VUE" width="300" height="300">
</div> -->

先放一下 Vue 的官网，多读一读[Vue 官方文档](https://v2.cn.vuejs.org/)总是有好处的 ~

### 简单点来说 Vue 是一套用于构建用户界面的前端渐进式的 MVVM 开发框架。


<!-- more -->

#### Vue 的生命周期是什么？

Vue实例从开始创建、初始化数据、编译模板、挂载dom和渲染、更新和渲染、卸载等一系列过程，这就是Vue的生命周期

#### Vue 的钩子函数有哪些？

```bash
BeforeCreate()  组件实例被创建之初，组件的属性生效之前
created()  组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用
BeforeMount()  在挂载开始之前被调用：相关的 render 函数首次被调用
mounted()  el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
BeforeUpdate()  组件数据更新之前调用，发生在虚拟 DOM 打补丁之前
updated()  组件数据更新之后
BeforeDestroy()  组件销毁前
destroyed()  组件销毁成功
```

#### Vue 在哪个生命周期内调用异步请求？为什么？

可以在created、beforeMount、mounted中调用，因为这三个钩子函数中，data已经创建，可以将服务器返回的数据进行赋值。

```PLAIN
在created中用异步请求的优点
    能更快的获取服务器的数据，减少页面加载时间。
    ssr不支持beforeMount、mounted，所以放在created中有助于一致性。
```

#### Vue 组件间通信方式有哪些？

    父传子 使用 props 属性进行
    字传父 使用事件派发 ($emit)
    非相关组件 使用时间总线(EventBus)

#### 路由的传参方式有哪些？

    使用进行路由导航，传递参数。
    使用 this.$router.push,通过配置路由属性中的 path 来确定匹配的路由，携带参数进行传参。
    使用 this.$router.push,通过配置路由属性中的 name 来确定匹配的路由，携带参数进行传参。
    使用 path 匹配路由通过 query 传参，query 传参的参数会显示在 url 地址的后面 ?id=……