---
title: 关于Ajax
date: 2021-11-12 19:05:58
tags: Ajax、Promise、javaScript、axios、fetch
---

Ajax（Asynchronous JavaScript and XML） 是一种用于在不刷新整个页面的情况下，通过 JavaScript 在后台与服务器进行数据交换的技术。通过 Ajax，可以实现异步加载数据、动态更新页面内容，从而提升用户体验。

<!-- more -->

### Ajax的工作流程：
    1. 创建 XMLHttpRequest 对象：通过 JavaScript 创建一个 XMLHttpRequest 对象，用于在后台与服务器进行通信。
    2. 发送请求：使用 XMLHttpRequest 对象发送请求，可以是 GET 或 POST 请求，传递参数或数据给服务器。
    3. 接收响应：服务器处理请求后，返回数据或响应，JavaScript 通过监听事件来获取响应数据。
    4. 更新页面：根据接收到的响应数据，使用 JavaScript 动态更新页面内容，而不需要刷新整个页面。

### 以下是一个简单的 Ajax 请求的示例，使用原生的 XMLHttpRequest 对象：

```html
<!DOCTYPE html>
<html>
<head>
  <title>Ajax Example</title>
</head>
<body>

<button id="button">点我发起请求</button>
<div id="dataContainer"></div>

<script>
document.getElementById("button").addEventListener("click", function() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ioohd.top", true); // 发送 GET 请求
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      document.getElementById("dataContainer").textContent = response.title;
    }
  };
  xhr.send(); // 发送请求
});
</script>

</body>
</html>
```

在这个示例中，点击 "<b style="font-size:16px;">点我发起请求</b>" 按钮会触发一个 Ajax 请求，获取 <b style="font-size:16px;color:#ff502c;">"https://ioohd.top"</b> 地址返回的数据，并将其中的标题显示在页面上。<b style="font-size:16px;color:#ff502c;">XMLHttpRequest</b> 对象用于创建和管理请求，<b style="font-size:16px;color:#ff502c;">onreadystatechange</b> 事件监听响应状态的变化，<b style="font-size:16px;color:#ff502c;">readyState</b> 表示请求状态，<b style="font-size:16px;color:#ff502c;">status</b> 表示响应状态码，<b style="font-size:16px;color:#ff502c;">responseText</b> 存储响应内容。

### 什么是Promise

Promise 是 JavaScript 中处理异步操作的一种机制，它表示一个异步操作的最终完成（或失败），并可以在操作完成后进行处理。Promise 提供了一种更优雅和结构化的方式来处理回调地狱（Callback Hell），使异步代码更加可读和可维护。
#### 一个 Promise 可以处于以下三个状态之一：

<b style="color:#ff502c;">Pending（进行中）：</b>初始状态，表示异步操作正在进行中。
<b style="color:#ff502c;">Fulfilled（已完成）：</b>表示异步操作已成功完成，结果值可用。
<b style="color:#ff502c;">Rejected（已拒绝）：</b>表示异步操作失败，错误信息可用。

### 如何使用Promise封装Ajax请求

使用 Promise 封装 Ajax 请求可以让代码更具可读性和可维护性，同时还可以更好地处理异步操作的结果。以下是一个使用 Promise 封装 Ajax 请求的示例，使用原生的 XMLHttpRequest 对象：

```javascript
function makeAjaxRequest(url, method) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText); // 请求成功，将响应数据传递给 resolve 函数
                } else {
                    reject(new Error("Request failed with status: " + xhr.status)); // 请求失败，将错误信息传递给 reject 函数
                }
            }
        };
        xhr.send();
    });
}

// 使用封装的函数
makeAjaxRequest("https://ioohd.top", "GET")
    .then(function(response) {
        console.log("Response:", response);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
```

在这个示例中，makeAjaxRequest 函数返回一个 Promise 对象，它将一个回调函数传递给 XMLHttpRequest 的 onreadystatechange 事件处理程序。当请求完成时，如果状态码为 200，则调用 resolve 函数并传递响应数据，否则调用 reject 函数并传递错误信息。
通过使用 Promise，你可以使用 .then() 方法处理成功的响应，使用 .catch() 方法处理失败的情况，使得代码逻辑更加清晰和可控。封装了 Promise 的 Ajax 请求可以更好地管理异步操作，使得代码更具可读性和可维护性。不过需要注意的是，现代的 Web 开发中，许多人更倾向于使用基于 Promise 的库（如 axios）来进行网络请求，因为它们提供了更便捷和强大的功能。

### Ajax，axios，fetch之间有什么区别

Ajax、axios 和 fetch 都是用于在前端实现网络请求的工具或技术，但它们在用法和功能上有一些区别。
<b style="color:#ff502c;">Ajax：</b>

1. Ajax（Asynchronous JavaScript and XML）是一种异步通信技术，使用原生的 JavaScript 和 XMLHttpRequest 对象来实现在不刷新整个页面的情况下与服务器交换数据。
2. Ajax 可以用于发送各种类型的请求（GET、POST 等），并接收服务器返回的数据，然后通过 JavaScript 更新页面内容。
3. 原生的 Ajax 代码较为繁琐，需要处理不同浏览器的兼容性。

<b style="color:#ff502c;">axios：</b>

1. axios 是一个基于 Promise 的 HTTP 客户端，用于在浏览器和 Node.js 中发送 HTTP 请求。
2. axios 提供了简洁的 API，并且处理了很多底层细节，如请求和响应的转换、拦截器、错误处理等。
3. axios 可以在浏览器环境和 Node.js 环境中使用，支持请求取消和并发请求管理等功能。

<b style="color:#ff502c;">fetch：</b>

1. fetch 是 Web API 中的一部分，是浏览器原生提供的一个用于发起网络请求的方法。
2. fetch 提供了一种基于 Promise 的简单和现代的方式来发送请求和处理响应。
与 axios 不同，fetch 不会自动将请求失败（例如 HTTP 错误状态码）视为错误，需要手动检查响应状态。

<b style="color:#ff502c;">区别总结：</b>

Ajax 是一种通信技术，主要通过 XMLHttpRequest 对象实现。
axios 是一个第三方库，提供了基于 Promise 的 API，用于简化 HTTP 请求的处理。
fetch 是浏览器原生提供的网络请求 API，也使用了 Promise，但处理响应状态的方式略有不同。
axios 和 fetch 提供了更现代、更简洁的 API，且能处理一些附加功能，如拦截器、取消请求等。