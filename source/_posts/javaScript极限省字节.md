---
title: javaScript之能用一行代码解决的，绝不用俩行，以及平常可能会用到的方法（持续更新）
date: 2024-12-05
updated: 2024-12-05
tags: javaScript、css
top: true
---

用简单的逻辑和尽可能少的代码行来解决一个复杂的问题。随着 ES6 箭头函数的引入，可以创建看起来优雅而简单的单行代码。

<!-- more -->


## 字符串处理

### 字符串首字母大写
```js
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

capitalize("hello world")  // Hello world
```

### 翻转字符串
```js
const reverse = str => str.split('').reverse().join('');

reverse('hello world');   // 'dlrow olleh'
```

### 随机字符串
```js
const randomString = () => Math.random().toString(36).slice(2);

randomString();
```

## 数组处理

### 数组去重
```js
const removeDuplicates = (arr) => [...new Set(arr)];

removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]); // [1, 2, 3, 4, 5, 6]
```

### 数组对象去重
去除重复的对象，对象的key值和value值都分别相等，才叫相同对象
```js
const uniqueObj = (arr) => {
    return arr.reduce((acc, current) => {
        // 检查acc数组中是否已经存在具有相同id的对象
        let exists = acc.some(item => item.id === current.id)
        // 如果不存在，则将当前对象添加到acc中
        if (!exists) acc.push(current)
        return acc
    }, [])
}
 
uniqueObj(
  [
    { id: 1, name: '大师兄' },
    { id: 2, name: '小师妹' },
    { id: 1, name: '大师兄' }
  ]
)
// [{id: 1, name: '大师兄'}, {id: 2, name: '小师妹'}]
```

### 判断数组是否为空
```js
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

isNotEmpty([1, 2, 3]);  // true
```

### 合并两个数组
```js
const merge = (a, b) => a.concat(b);

const merge = (a, b) => [...a, ...b];
```

### 取数组中的最小/大值
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

### 数组排序 sort()
  sort()方法可以对数组的元素进行排序，并且返回出排序后的数组。
  用法：sort()默认为升序排列。 直接写sort()只能处理10以内的数字排序,处理10以上的我们需要传递一个参数，这个参数必须是函数，函数通过返回一个值来决定这两个值需不需要交换位置。 如果a-b > 0,则a和b交换位置。
```javaScript
 let arr = [10, 12, 11, 19, 13, 15, 6];

let res1 = arr.sort(function (a, b) { return a - b; });   //实现由小到大
console.log(res1);//[6, 10, 11, 12,13, 15, 19]
let res2 = arr.sort(function (a, b) { return b - a; })   //实现由大到小
console.log(res2);//[19, 15, 13, 12,11, 10,  6]
```

### 数组过滤 filter()
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

可以使用<code>filter()</code>方法移除数组中的null、undefined、NAN等值
let arr = [0, 1, 2, null, '', false, undefined]
arr.filter(Boolean) // [1, 2]
```

### toString()
  toString 把数组中的每一项拿出来，用逗号隔开，组成字符串，原有数组不变。
```javaScript
let arr = ['song', 'Y', 'son', 'so']
let res = arr.toString()
console.log(res);//'song,Y,son,so'
console.log(arr);//[ 'song', 'Y', 'son', 'so' ]
```

### join（分隔符）
  join（分隔符） 把数组中的每一项拿出来，用指定的分隔符隔开，原有数组不变。
```javaScript
let arr = ['song', 'Y', 'son', 'so']
let res = arr.join(',')
console.log(res);//'song,Y,son,so'
console.log(res.length);//13
console.log(arr);//[ 'song', 'Y', 'son', 'so' ]
console.log(arr.length);//4
```

### 数组扁平化
```javaScript
let arr = [
    [1],
    [2, 3],
    [4, 5, 6, [7, 8, [9, 10, [11]]]],
    12
]
// 参数指要提取嵌套数组的结构深度，默认值为 1。
// Infinity 指递归嵌套的所有层级。
let flattedArr = arr.flat(Infinity);
console.log(flattedArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```

### 数组填充 fill()
  <code>fill()</code>方法可以向一个已有数组中插入全部或部分相同的值。
  <code>array.fill()</code>

```javaScript
let arr = [0, 0, 0, 0, 0]
// 用5填充整个数组
arr.fill(5)
console.info(arr) // [5, 5, 5, 5, 5]
arr.fill(0) // 重置

// 用5填充索引大于等于3的元素
arr.fill(5, 3)
console.info(arr) // [0, 0, 0, 5, 5]
arr.fill(0) // 重置
```

### 通过索引获取数组元素 at()

 ```javaScript
let arr = [0, 1, 2, 3, 4, 5]

console.info(arr[arr.length -1]) // 5
console.info(arr.at(-1)) // 5

console.info(arr[arr.length -2]) // 4
console.info(arr.at(-2)) // 4
```

## 日期处理

### 检查日期是否有效
```js
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("December 17, 1995 03:24:00");  // true
```

###  计算两个日期之间的间隔
```js
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
    
dayDif(new Date("2021-11-3"), new Date("2022-2-1"))  // 90
```

### 查找日期位于一年中的第几天
```js
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());   // 307
```

### 时间格式化
```js
const timeFromDate = date => date.toTimeString().slice(0, 8);
    
timeFromDate(new Date(2021, 11, 2, 12, 30, 0));  // 12:30:00
timeFromDate(new Date());  // 返回当前时间 09:00:00
```

## JavaScript代码的优雅写法

### 可选链操作符 ?.
```js
if (res && res.data && res.data.success) {   
   //code
} 
优化后
if (res?.data?.success) {
  // code
}
```

### 三目运算符
```js
const age = "18"
const str = (age < '18' )? '未成年' : '已成年'
```

### 带有多个条件的 if 语句
```js
if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {
    //code
}
优化后
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
   //code
}
```

### null、undefined 和空值检查
```js
if (test1 !== null || test1 !== undefined || test1 !== '') {
    let test2 = test1;
}
优化后
let test2 = test1 || '';
```

### 用于多个条件判断的 && 操作符
```js 
if (test1) {
 callMethod(); 
} 
优化后 
test1 && callMethod();
```

### 逻辑运算符和赋值表达式（&&=，||=，??=）
1) &&=
逻辑与赋值运算符 x &&= y 等价于 x && (x=y)：意思是当 x 为真时，x = y。
```js 
let a = 1;
let b = 0;

a &&= 2;
console.log(a); // 2

b &&= 2;
console.log(b);  // 0
```
2) ||=
逻辑或赋值运算符 x ||= y 等价于 x || (x = y)：意思是仅在 x 为 false 的时候，x = y。
```js
const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);  // 50

a.title ||= 'title is empty.';
console.log(a.title);  // "title is empty"
```
3) ??=
逻辑空赋值运算符 x ??= y 等价于 x ?? (x = y)：意思是仅在 x 为 null 或 undefined 的时候，x = y。
```js
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);  // 50

a.speed ??= 25;
console.log(a.speed);  // 25
```

### Object.entries
Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
```js 
let obj = { a: 1, b: 2 }
Object.entries(obj)   // [['a', 1], ['b', 2]]
```

### Object rest properties
```js 
let test = { a: 1, b: 2, c: 3, d: 4 }
let {a, b, ...rest} = test;
console.log(a);     // 1
console.log(b);     // 2
console.log(rest);  // { c: 3, d: 4 }
console.log(rest.d) // 4
```

### Object.fromEntries
fromEntries() 方法会把键值对列表转换成一个对象
语法：Object.fromEntries(iterable)
iterable: Array、Map等可迭代对象
```js 
let map = new Map([['a', 1], ['b', 2]]);
let mapToObj = Object.fromEntries(map);
console.log(mapToObj);  // {a: 1, b: 2}

let arr = [['a', 1], ['b', 2]];
let arrToObj = Object.fromEntries(arr);
console.log(arrToObj);   // {a: 1, b: 2}

let obj = {a: 1, b: 2};
let newObj = Object.fromEntries(
  Object.entries(obj).map(
    ([key, val]) => [key, val * 2]
  )
);
console.log(newObj);   // {a: 2, b: 4}
```


### 模板字符串
```js
const welcome = 'Hi ' + test1 + ' ' + test2 + '.'
优化后
const welcome = `Hi ${test1} ${test2}`;
```

### 解构赋值
```js
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;
优化后
const { test1, test2, test3 } = this.data;
```

### 判断是基数还是偶数
```javaScript
const isEven = num => num % 2 === 0;

isEven(996); // 0 偶数 
```

### 判断对象中是否存在某个属性
```javaScript
const obj = { name: "孙悟空", age: 30 };

// 检查用户对象是否具有'address'属性
const hasAddress = "address" in obj

console.info(hasAddress) // false 因为用户对象中不存在'address'属性
```

### 判断俩个对象是否相等（包含对象数据）
```javaScript
  function deepEqual(obj1, obj2) {
    // 如果两个对象是同一个对象，直接返回true
    if (obj1 === obj2) return true;

    // 如果不是对象（可能是基本类型）或其中之一为null，返回false
    if (obj1 == null || obj2 == null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    // 获取对象的键
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const reg = /^-?\d+(\.\d+)?$/; // 支持负数和小数

    // 键的数量不同，返回false
    if (keys1.length !== keys2.length) return false;

    // 遍历所有键，递归比较每个值
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(reg.test(obj1[key]) ? Number(obj1[key]) : obj1[key], reg.test(obj2[key]) ? Number(obj2[key]) : obj2[key])) {
            return false;
        }
    }

    return true;
  }
```

### 动态对象键
  用来构建键在操作后才确定的对象
```javaScript
const prop = "score";
const person = { [prop]: 90 };

// person 将是 { score: 90 }
```

### 网站变黑白
有时候网站在某种特定的情况下，需要使整个网站变成黑白的颜色
只需要将这一行代码filter:grayscale(100%)放到body上，一下就能致黑
```css
body {
  filter: grayscale(100%)
}
```

### 复制内容到剪切板
使用 navigator.clipboard.writeText 来实现将文本复制到剪贴板
```javaScript
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

copyToClipboard("双十一来了~");
```

### 当前设备是否为苹果设备
前端经常要兼容Android和ios
```javaScript
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: will return true if user is on an Apple device
```

### 滚动到页面顶部
不用引入element-ui等框架，一行代码就能实现滚动到顶部
```javaScript
const goToTop = () => window.scrollTo(0, 0);
goToTop();
```


