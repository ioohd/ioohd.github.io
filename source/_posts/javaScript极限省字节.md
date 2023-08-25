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

> #### 数组对象去重
去除重复的对象，对象的key值和value值都分别相等，才叫相同对象
```js
const uniqueObj = (arr, fn) =>arr.reduce((acc, v) => {if (!acc.some(x => fn(v, x))) acc.push(v);return acc;}, []);
 
uniqueObj([{id: 1, name: '大师兄'}, {id: 2, name: '小师妹'}, {id: 1, name: '大师兄'}], (a, b) => a.id == b.id)
// [{id: 1, name: '大师兄'}, {id: 2, name: '小师妹'}]
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

> #### 数组排序 sort()
  sort()方法可以对数组的元素进行排序，并且返回出排序后的数组。
  用法：sort()默认为升序排列。 直接写sort()只能处理10以内的数字排序,处理10以上的我们需要传递一个参数，这个参数必须是函数，函数通过返回一个值来决定这两个值需不需要交换位置。 如果a-b > 0,则a和b交换位置。
```javaScript
 let arr = [10, 12, 11, 19, 13, 15, 6];

let res1 = arr.sort(function (a, b) { return a - b; });   //实现由小到大
console.log(res1);//[6, 10, 11, 12,13, 15, 19]
let res2 = arr.sort(function (a, b) { return b - a; })   //实现由大到小
console.log(res2);//[19, 15, 13, 12,11, 10,  6]
```

> #### 数组过滤 filter()
  用法：它创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。其中函数function 为必须，数组中的每个元素都会执行这个函数。且如果返回值为true，则该元素被保留；函数可以接受三个参数（item, index, arr），第一个参数item也为必须，代表当前元素的值，第二个参数为当前元素的索引值，第三个参数为数组本身。
```javaScript
const arr = [
    { name: 'song', age: 18 },
    { name: 'Y', age: 19 },
    { name: 'son', age: 20 },
    { name: 'so', age: 21 }
]
const newArr = arr.filter((item, index, arr) => {
    return item.age > 19
})

console.log(newArr);//[ { name: 'son', age: 20 }, { name: 'so', age: 21 } ]
console.log(arr);//[ { name: 'song', age: 18 },{ name: 'Y', age: 19 }, { name: 'son', age: 20 }, { name: 'so', age: 21 }]
```

> #### toString()
  toString 把数组中的每一项拿出来，用逗号隔开，组成字符串，原有数组不变。
```javaScript
let arr = ['song', 'Y', 'son', 'so']
let res = arr.toString()
console.log(res);//'song,Y,son,so'
console.log(arr);//[ 'song', 'Y', 'son', 'so' ]
```

> #### join（分隔符）
  join（分隔符） 把数组中的每一项拿出来，用指定的分隔符隔开，原有数组不变。
```javaScript
let arr = ['song', 'Y', 'son', 'so']
let res = arr.join(',')
console.log(res);//'song,Y,son,so'
console.log(res.length);//13
console.log(arr);//[ 'song', 'Y', 'son', 'so' ]
console.log(arr.length);//4
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

> #### 网站变黑白
有时候网站在某种特定的情况下，需要使整个网站变成黑白的颜色
只需要将这一行代码filter:grayscale(100%)放到body上，一下就能致黑
```css
body {
  filter:grayscale(100%)
}
```

> #### 复制内容到剪切板
使用 navigator.clipboard.writeText 来实现将文本复制到剪贴板
```javaScript
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("双十一来了~");
```

> #### 当前设备是否为苹果设备
前端经常要兼容andriod和ios
```javaScript
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: will return true if user is on an Apple device
```

> #### 滚动到页面顶部
不用引入element-ui等框架，一行代码就能实现滚动到顶部
```javaScript
const goToTop = () => window.scrollTo(0, 0);
goToTop();
```

> #### 判断是基数还是偶数
```javaScript
const isEven = num => num % 2 === 0;

isEven(996); // 0 偶数 
```

