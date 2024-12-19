---
title: 记录第一次搭建博客的艰苦历程
tags: blog
date: 2020-04-02
# top: true
---

#### 我为什么要搭建一篇博客？

> 之前在学习的过程中，遇到过的很多问题，基本上都是通过百度解决的，然后也见了很多人搭建了自己博客，并且每个人的博客对于他们来说的作用都不一样，我决定搭建一个博客也是觉得我的学习历程可以被记录下来，也可以分享一些出去游玩的东西。
> 
> 也有出于挑战一下的心态，我选了 hexo 加 github 搭建博客，hexo 还没接触过，但是知道这样搭建的博客还是基于 node.js 的，同时也希望在搭建的过程中学习到一些新的东西。
> 
> 反正挺酷的！

编写博客使用的几乎全是Markdown语法，先给不知道怎么写的小伙伴上个链接~[Markdown官网](http://markdown.p2hp.com/basic-syntax/)

我也在网上扒拉了一篇，也可以看看[语法图文全面详解](<https://blog.csdn.net/u014061630/article/details/81359144?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168967454716800197084944%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168967454716800197084944&biz_id=0&utm_medium=distribute.pc_chrome_plugin_search_result.none-task-blog-2~all~top_positive~default-1-81359144-null-null.nonecase&utm_term=markdown%E8%AF%AD%E6%B3%95&spm=1018.2226.3001.4187>)

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
hexo new "My blog
```

### 本地启动博客 --- Run server

``` bash
hexo server (hexo s)
```

### 打包为静态文件
hexo g 命令执行后会生成一个public文件下，这个文件夹便是打包后生成的静态文件夹。
``` bash
hexo generate (hexo g)
```

### 推送至github

``` bash
hexo d
```
这里也可以使用git命令行来推送至远程仓库（敲命令行主要是帅！！！帅就完了啊哈哈哈哈哈哈哈哈）
```bash
git add .
git commit -m '提交备注'
git pull
git push
```


### 清空博客缓存

``` bash
hexo clean
```

### 清除本地项目并重新生成 （重新部署时使用）

``` bash
hexo clean && hexo g
```

### 更新文章最新日期

```node
node update-date.js <文章名>.md
例如：node update-date.js javaScript.md
```

