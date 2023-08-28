---
title: el-input输入框在IE9中无法删除文本无效的解决办法
date: 2022-10-12 11:03:29
tags: element、vue
---

之前在做Vue + Element 后台管理时，测试无意间使用IE9版本浏览器在进行测试，发现了el-input输入框存在浏览器兼容性bug，也是找了很多博主的解释作参考，也试了很多种方法，最后也是顺利解决！以此来记录一下哈哈哈哈哈哈~

<!-- more -->

# 1. 问题描述

如图，Vue项目中使用el-input输入框，在IE9浏览器中，输入内容后删除，移走光标后，内容会回显

![问题复现](/images/IE9_el-input-bug.png)

# 2. 问题分析

el-input组件源码（input.vue）中，绑定了input事件，经过网上调研，发现input事件在IE9下存在兼容性问题（[https://caniuse.com/?search=input](https://caniuse.com/?search=input)）。caniuse官网在Notes里的第一点说道：Doesn't fire an input event when deleting text (via Backspace, Delete, Cut, etc.)。该input事件在IE9下，无法监听到键盘的backspace和delete键以及右键菜单剪切、删除等操作对内容的改变。
```html
<input 
    v-if="type!== 'textarea'"
    class="el-input_inner"
    v-bind="$props"
    :autocomplete="autoComplete"
    :value="currentValue"
    ref="input"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
 />
```

# 3. 解决方法

#### 将以下js代码，作为单独js文件引入到项目中，并在相应vue页面引入该js，即可解决该问题。

操作步骤：
* 创建ie9OnInput.js文件，将下方代码复制到该js文件。
* 将ie9OnInput.js文件放至项目中存放js的目录下
* 在具体的Vue页面文件中引入该js，如
```js
// （绝对或相对路径）
import "@/src/common/js/ie9OnInput.js" 
```

(selectionchange事件：在当前文档上的当前文本被选择或被改变时，会触发事件，如文本选择、剪切、删除、粘贴等操作)，为页面添加监听，并绑定selectionchange，在selectionchange触发后，重新创建input事件，可解决原始input事件无法监听的问题。
```js
(function(d) {
    // 非IE9直接返回
    if (navigator.userAgent.indexOf('MSIE 9') === -1) {
        return
    }
    // 添加监听事件，绑定selectionchange事件
    d.addEventListener('selectionchange', function() {
        var el = d.activeElement
        if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
            // 创建事件
            var ev = d.createEvent('CustomEvent')
            // 初始化事件，ev.initCustomEvent('事件名称', 是否允许冒泡, 是否运行中断, 参数)
            ev.initCustomEvent('input', true, true, {})
            // 分发 触发事件
            el.dispatchEvent(ev)
        }
    })
})(document)
```