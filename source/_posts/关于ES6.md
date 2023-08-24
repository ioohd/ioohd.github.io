---
title: 关于ES6
date: 2022-03-19 20:40:49
tags: javaScript、ES6
# photos: [
#   ["/images/boy.jpg"]
# ]
---

<div style="width:200px; height: 200px; margin: 0 auto;"><image src="/images/boy.jpg"></image></div>

## 理解ES6
ECMAScript ，是由网景公司制定的一种脚本语言的标准化规范；最初命名为 Mocha ，后来改名为 LiveScript ，最后重命名为 JavaScript
ECMAScript 2015（ES2015），第 6 版，最早被称作 ECMAScript 6（ES6），添加了新的特性

<!-- more -->

### let、const、var的区别？
<b class="textColor">作用域：</b>
var：使用 var 声明的变量具有函数作用域，即在函数内部声明的变量在整个函数体内都可见。
let 和 const：使用 let 和 const 声明的变量具有块级作用域，即在 {} 块内声明的变量只在该块内有效。
<b class="textColor">声明提升：</b>
var：var 声明的变量会发生声明提升，即变量的声明会被提升至当前作用域的顶部，但初始化的值会保留在原位置。
let 和 const：虽然也会发生声明提升，但使用 let 和 const 声明的变量在初始化之前是不可访问的。
<b class="textColor">重复声明：</b>
var：可以重复声明同名变量，不会引发错误。
let 和 const：不能在同一个作用域内重复声明同名变量，否则会引发错误。
<b class="textColor">可变性：</b>
var 和 let：声明的变量是可变的，可以重新赋值。
const：声明的变量是常量，一旦赋值就不能再修改。
<b class="textColor">全局对象属性：</b>
var 声明的变量会成为全局对象的属性，例如在浏览器环境中是 window 的属性。
let 和 const 声明的变量不会成为全局对象的属性。
<b class="textColor">临时死区：</b>
let 和 const 声明的变量会在声明之前存在一个“临时死区”，在该区域内访问变量会引发错误。

### 箭头函数和普通函数的区别
<b class="textColor">语法简洁性：</b>
1. 箭头函数的语法更为简洁，可以在一些情况下省略大括号、return 关键字和参数括号。
2. 普通函数的语法相对繁琐，需要使用 function 关键字、大括号和参数括号。

<b class="textColor">this 绑定：</b>
1. 箭头函数的 this 绑定是词法作用域的，它会捕获当前上下文中的 this 值，无法通过 call、apply 或 bind 改变。
2. 普通函数的 this 绑定是动态的，取决于函数的调用方式和上下文。

<b class="textColor">arguments 对象：</b>
1. 箭头函数没有自己的 arguments 对象，它会继承外层作用域的 arguments 对象（如果有的话）。
2. 普通函数具有自己的 arguments 对象，其中包含了函数调用时传递的参数。

<b class="textColor">构造函数：</b>
1. 箭头函数不能用作构造函数，无法通过 new 关键字实例化对象。
2. 普通函数可以用作构造函数，可以通过 new 关键字实例化对象。

<b class="textColor">递归：</b>
1. 由于箭头函数没有自己的 arguments 对象和函数名称，所以递归调用时相对不方便。
2. 普通函数可以更方便地进行递归调用。

<b class="textColor">命名函数表达式：</b>
1. 箭头函数不能被命名，只能使用匿名函数表达式。
2. 普通函数可以被命名，也可以使用匿名函数表达式。

### 扩展运算符的作用及使用场景
扩展运算符）是 ES6 引入的一种语法，用于展开（拆分）可迭代对象（如数组、字符串、对象等）为独立的元素，以便在函数调用、数组字面量、对象字面量等地方使用。扩展运算符的作用和使用场景包括以下几点：
1. <b class="textColor">函数调用中的参数传递：</b>扩展运算符可以用于将一个数组展开为一个函数的参数列表，这对于传递动态数量的参数非常有用。
```javaScript
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = add(...numbers); // 等同于 add(1, 2, 3)
```

2. <b class="textColor">数组字面量中的元素合并：</b>扩展运算符可以将一个数组的元素合并到另一个数组中。
```javaScript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // 合并为 [1, 2, 3, 4, 5, 6]
```

3. <b class="textColor">复制数组和对象：</b>扩展运算符可以用于浅复制数组和对象，创建一个新的数组或对象，而不是引用同一个内存地址。
```javaScript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // 创建新数组，值相同但引用不同

const originalObject = { key1: 'value1', key2: 'value2' };
const copiedObject = { ...originalObject }; // 创建新对象，值相同但引用不同
```

4. <b class="textColor">字符串转为字符数组：</b>扩展运算符可以将字符串转换为字符数组，以便逐个访问字符。
```javaScript
const str = 'hello';
const chars = [...str]; // 转为字符数组 ['h', 'e', 'l', 'l', 'o']
```

5. <b class="textColor">对象字面量中的属性合并：</b>扩展运算符可以将一个对象的属性合并到另一个对象中。
```javaScript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 }; // 合并为 { a: 1, b: 2, c: 3, d: 4 }
```

### 模板字符串的使用

模板字符串是 ES6 引入的一种字符串语法，它允许在字符串中插入变量、表达式以及换行符，使字符串的拼接和格式化更加方便。模板字符串使用反引号（）来界定字符串，并在 `${}`` 内部插入表达式或变量。
```javaScript
const name = 'Alice';
const age = 30;

// 使用模板字符串插入变量和表达式
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);
// 输出：Hello, my name is Alice and I am 30 years old.
```

```javaScript
const multilineText = `
  This is a multiline text
  that spans across multiple lines.
  It's easy to format and read.
`;

console.log(multilineText);
/*
输出：
This is a multiline text
that spans across multiple lines.
It's easy to format and read.
*/
```

### Set方法使用场景

Set 是 ES6 引入的一种数据结构，它类似于数组，但不允许有重复的值，且没有固定的索引。Set 内部的值是唯一的，不会存在重复的元素。Set 对象的方法和特性使它在许多场景下非常有用，以下是一些常见的 Set 方法的应用场景：

1. <b class="textColor">去重：</b>最常见的用途就是用于去除数组中的重复元素。将数组转换为 Set，再将 Set 转换回数组，就能轻松去重。
```javaScript
const array = [1, 2, 2, 3, 3, 4, 5];
const uniqueArray = [...new Set(array)]; // 去重后的数组：[1, 2, 3, 4, 5]
```

2. <b class="textColor">判断元素是否存在：</b>使用 Set 的 has 方法可以快速判断一个元素是否存在于集合中。
```javaScript
const set = new Set([1, 2, 3]);
console.log(set.has(2)); // true
console.log(set.has(4)); // false
```

3. <b class="textColor">交集、并集、差集等操作：</b>通过将多个 Set 对象转换为数组，然后利用数组的方法进行交集、并集、差集等操作。
```javaScript
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const intersection = [...set1].filter(item => set2.has(item)); // 交集：[2, 3]
const union = [...set1, ...set2]; // 并集：[1, 2, 3, 4]
const difference = [...set1].filter(item => !set2.has(item)); // 差集：[1]
```

4. <b class="textColor">存储任意类型的数据：</b>Set 可以存储任意类型的数据，包括基本数据类型和对象等。
```javaScript
const mixedSet = new Set();
mixedSet.add(1);
mixedSet.add('hello');
mixedSet.add({ key: 'value' });
```

5. <b class="textColor">迭代：</b>使用 for...of 循环可以迭代 Set 中的每个元素，且顺序与添加顺序一致。
```javaScript
const set = new Set([1, 2, 3]);
for (const item of set) {
  console.log(item);
}
```

### Object.assign和扩展运算符是浅拷贝还是深拷贝？
Object.assign 方法和扩展运算符都是进行浅拷贝，而不是深拷贝。
<b class="textColor">浅拷贝</b>是指在拷贝对象时，只拷贝对象的一层属性，而不会递归地拷贝嵌套对象的属性。拷贝后的对象和原始对象会共享嵌套对象的引用。
<b class="textColor">深拷贝</b>是指在拷贝对象时，会递归地拷贝所有嵌套对象的属性，从而创建一个完全独立的副本，两者之间没有引用关系。
<b class="textColor">使用 Object.assign 进行浅拷贝：</b>

```javaScript
const originalObj = { a: 1, b: { c: 2 } };
const copiedObj = Object.assign({}, originalObj);

console.log(copiedObj); // { a: 1, b: { c: 2 } }
console.log(copiedObj === originalObj); // false
console.log(copiedObj.b === originalObj.b); // true，嵌套对象的引用相同
```
<b class="textColor">使用扩展运算符进行浅拷贝：</b>

```javaScript
const originalObj = { a: 1, b: { c: 2 } };
const copiedObj = { ...originalObj };

console.log(copiedObj); // { a: 1, b: { c: 2 } }
console.log(copiedObj === originalObj); // false
console.log(copiedObj.b === originalObj.b); // true，嵌套对象的引用相同
```



<style>
.textColor {
    color:#ff502c;
}
</style>