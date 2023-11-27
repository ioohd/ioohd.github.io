---
layout: css:filter
title: CSS:filter 学习笔记
date: 2022-12-25 09:38:41
tags: CSS
---

个人学习 CSS:filter 过程中写的笔记，不具备任何价值。CSS 滤镜（filter）属提供的图形特效，像模糊，锐化或元素变色。过滤器通常被用于调整图片，背景和边界的渲染。FILTER URL 还不是很明白…

<!-- more -->

#### 语法
```css
/* URL to SVG filter */
filter: url("filters.svg#filter-id");

/* <filter-function> values */
filter: blur(0px);  // 高斯模糊
filter: brightness(100%);  // 线性乘法，使图片看起来更亮或更暗
filter: contrast(100%);  // 对比度
filter: drop-shadow($offset-x $offset-y $blur $spread $color);  // 阴影，相似于 box-shadow
filter: grayscale(0%);  // 转换为灰度图像
filter: hue-rotate(0deg);  // 色相旋转
filter: invert(0%);  // 反转输入图像
filter: opacity(100%);  // 不透明度
filter: saturate(100%);  // 转换图像饱和度
filter: sepia(0%);  // 将图像转换为深褐色，暖色调

/* Multiple filters */
filter: contrast(100%) brightness(100%);

/* Global values */
filter: inherit;
filter: initial;
filter: unset;
```

#### 实例
```css
/* gray all images by 50% and blur by 10px */
img {
  filter: grayscale(0.5) blur(10px);
}
```
