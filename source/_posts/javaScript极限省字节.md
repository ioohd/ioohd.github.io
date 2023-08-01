---
title: 非常实用的JavaScript优雅代码
date: 2023-07-21 15:18:29
tags: javaScript
---

用简单的逻辑和尽可能少的代码行来解决一个复杂的问题。随着 ES6 箭头函数的引入，可以创建看起来优雅而简单的单行代码。

<!-- more -->

# 日期处理

> #### 检查日期是否有效
```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");  // true
```

> ####  计算两个日期之间的间隔
```js
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
    
dayDif(new Date("2021-11-3"), new Date("2022-2-1"))  // 90
```

> #### 查找日期位于一年中的第几天
```js
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());   // 307
```

> #### 时间格式化
```js
const timeFromDate = date => date.toTimeString().slice(0, 8);
    
timeFromDate(new Date(2021, 11, 2, 12, 30, 0));  // 12:30:00
timeFromDate(new Date());  // 返回当前时间 09:00:00
```

# 字符串处理

> #### 字符串首字母大写
```js
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

capitalize("hello world")  // Hello world
```

> #### 翻转字符串
```js
const reverse = str => str.split('').reverse().join('');

reverse('hello world');   // 'dlrow olleh'
```

> #### 随机字符串
```js
const randomString = () => Math.random().toString(36).slice(2);

randomString();
```

# 数组处理

> #### 数组去重
```js
const removeDuplicates = (arr) => [...new Set(arr)];

removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]); // [1, 2, 3, 4, 5, 6]
```

> #### 判断数组是否为空
```js
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);  // true
```

> #### 合并两个数组
```js
const merge = (a, b) => a.concat(b);

const merge = (a, b) => [...a, ...b];
```

> #### 取数组中的最小/大值
```js
let arr = [22, 13, 6, 55, 30]

let max = Math.max.apply(null, arr)
let min = Math.min.apply(null, arr)

console.log(max, min) // 55, 6
```
```js
let array=[
  {
    "index_id": 119,
    "area_id": "18335623",
    "name": "满意度",
    "value": "100"
  },
  {
    "index_id": 119,
    "area_id": "18335624",
    "name": "满意度",
    "value": "20"
  }];
let max = Math.max.apply(Math, array.map(function(res) {return res.value})) // 100
let min = Math.min.apply(Math, array.map(function(res) {return res.value})) // 20
```

# 优化代码

> #### 可选链操作符 ?.
```js
if (res && res.data && res.data.success) {   
   //code
} 
优化后
if (res?.data?.success) {
  // code
}
```

> #### 三目运算符
```js
const age = "18"
const str = (age < '18' )? '未成年' : '已成年'
```

> #### 带有多个条件的 if 语句
```js
if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {
    //code
}
优化后
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
   //code
}
```

> #### null、undefined 和空值检查
```js
if (test1 !== null || test1 !== undefined || test1 !== '') {
    let test2 = test1;
}
优化后
let test2 = test1 || '';
```

> #### 用于多个条件判断的 && 操作符
```js 
if (test1) {
 callMethod(); 
} 
优化后 
test1 && callMethod();
```

> #### 模板字符串
```js
const welcome = 'Hi ' + test1 + ' ' + test2 + '.'
优化后
const welcome = `Hi ${test1} ${test2}`;
```

> #### 解构赋值
```js
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;
优化后
const { test1, test2, test3 } = this.data;
```
