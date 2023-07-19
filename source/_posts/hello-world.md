---
title: 记录第一次搭建博客的艰苦历程
date: 2020-07-18 16:04:26
tags: blog
---

编写博客使用的几乎全是Markdown语法，先给不知道怎么写的小伙伴上个链接~[Markdown官网](http://markdown.p2hp.com/basic-syntax/)

我也在CSDN找了一篇，也可以看看[语法图文全面详解](<https://blog.csdn.net/u014061630/article/details/81359144?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168967454716800197084944%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168967454716800197084944&biz_id=0&utm_medium=distribute.pc_chrome_plugin_search_result.none-task-blog-2~all~top_positive~default-1-81359144-null-null.nonecase&utm_term=markdown%E8%AF%AD%E6%B3%95&spm=1018.2226.3001.4187>)
>
> 

<!-- more -->

## 安装hexo包

``` bash
npm install hexo
```

## 创建一个hexo博客

``` bash
hexo init 博客名称
```

### 创建一个文件进行编写博客

``` bash
hexo new "My blog"
```

### 本地启动博客 --- Run server

``` bash
hexo server (hexo s)
```

### 打包为静态文件

``` bash
hexo generate (hexo g)
```

### 部署至github

``` bash
hexo generate (hexo d)
```

### 清空博客缓存

``` bash
hexo clean
```

### 清除本地项目并重新生成 （重新部署时使用）

``` bash
hexo clean && hexo g
```

