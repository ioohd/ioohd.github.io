---
title: vue简单的全局mixin
date: 2022-07-25 15:11:57
tags: vue
---

平常开发中总会有一些代码需要重复用到，既然如此，就可以把这部分逻辑提取出来做成全局通用的公共方法，这样既可以减少代码冗余度，也可以让后期维护起来更加容易。

这里我用到了vue中的mixin，写了一个简单的mixin。

需要注意的是：提取的是逻辑或配置，而不是HTML代码和CSS代码。其实大家也可以换一种想法，mixin就是组件中的组件，Vue组件化让我们的代码复用性更高，那么组件与组件之间还有重复部分，我们使用Mixin在抽离一遍。

<!-- more -->

> #### src文件夹下边的main.js文件

```javaScript
/* main.js */
Vue.mixin({
    computed: {
        /* 判断浏览器是不是IE */
        isIE() {
            return window.navigator.userAgent..indexOf("MSIE") >= -1 ? true : false
        },
        /* 枚举全局映射 */
        dsNameMap() {
            return (value) => {
                const map = new Map([
                    ['hz', '杭州'],
                    ['nj', '南京'],
                    ['sh', '上海']
                ])
                return map.get(value) || null
            }
        }
    }
})
```

用法：
```js
/* index.vue */
<template>
  <span>地址：{{ area }}</span>
</template>
<script>
export default {
    data() {
        return {
            area: ''
        }
    },
    create() {
        this.isIE()
        this.area = this.dsNameMap('hz') /* 杭州 */
    }
}
</script>
```

> #### 全局深拷贝
> #### 这利用到了[lodash中文文档](https://www.lodashjs.com/)里的cloneDeep
注：要先安装lodash依赖，npm i --save lodash
```javaScript
/* main.js */
import cloneDeep from 'lodash/cloneDeep'

Vue.prototype.cloneDeep = cloneDeep
```

用法：
```js
/* index.vue */
<template>

</template>
<script>
export default {
    data() {
        return {

        }
    },
    create() {
        let obj = { age: '18', name: '小明' }
        this.cloneDeep(obj)
    }
}
</script>
```