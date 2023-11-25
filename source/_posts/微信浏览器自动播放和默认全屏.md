---
layout: video
title: video微信浏览器自动播放和默认全屏
date: 2023-10-25 12:22:53
tags: HTML、CSS、javaScript
---

早期因为带宽和流量的因素，移动端浏览器禁止视频自动播放，现在 WI-FI 越来越普及，流量也便宜了，所以有些必要自动播放的，可以支持自动播放了。

<!-- more -->

在移动端浏览器， <code>video</code> 在用户点击播放或者通过 <code>API video.play()</code> 触发播放时，会强制以全屏置顶的形式进行播放，设计的初衷可能是因为全屏能提供更好的用户体验。

```html
<video id="player" controls autoplay x5-video-player-type="h5" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" x5-video-orientation="portraint" x5-video-player-fullscreen="true">
    <source src="..." type="video/mp4">
</video>
```

> <code>playsinline="true" webkit-playsinline="true</code> 解决 iOS 自动播放全屏问题
  <code>x5-video-player-type="h5" x5-video-player-fullscreen="true"</code> 解决安卓同层级播放

iOS 微信下通过 <code>WeixinJSBridgeReady</code> 事件进行自动播放

```javaScript
document.addEventListener(
    'WeixinJSBridgeReady',
    function() {
        var video = document.getElementById("player");
        video.play();
    },
    false
);
```

Android 可以尝试监听 <code>touchstart</code> 事件，用户触摸屏幕后自动播放

```javaScript
document.addEventListener('touchstart', function(){ 
    var video = document.getElementById("player");
        video.play();
}, false);
```


