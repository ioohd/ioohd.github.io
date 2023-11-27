---
title: Vue+element实现文件下载功能
date: 2023-11-27 17:12:32
tags: Vue、element、js
---

> 前端的文件下载平时不会经常用到，就算用到可能也是前人已经写好的模块或者是第三方库，引入就可以使用了。但是我觉得作为前端开发，文件的下载还是非常有必要了解清楚的。
    这里我用Vue + element简单写了一个文件下载，更多的用到的还是原生Js，希望对大家有所帮助
    引入Element组件库这里就不多说啦，不知道的小伙伴就去官网看看吧~
    先放一下[Element 官方文档](https://element.eleme.cn/#/zh-CN/component/installation)

<!-- more -->

```javaScript
import { Loading, Message, MessageBox } from "element-ui"

/*
 *  方法  downLoadExcel
 *  用途  文件导出下载
 *  示例  downLoadExcel({
 *          url: 'xxx' // 下载地址 必须有
 *          loadingText: 'xxxx' // 导出下载文字提示  非必须
 *        })
 */

export function downLoadExcel(params) {
    if (params && params.url) {
        let message = (params && params.loadingText) ? params.loadingText : '文件数据资源下载中...'
        Loading.service({ fullscreen: true, text: message, background: 'rgba(0, 0, 0, 0.7)', lock: true })
        setTimeout(function () {
            let xhr = new XMLHttpRequest()
            let urls = params.url
            xhr.open('get', urls, true)
            xhr.responseType = 'blob'
            xhr.timeout = params.timeout ? params.timeout : (15 * 60 * 1000) // 默认超时时间30s
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        let fileName = this.getResponseHeader('content-disposition')
                        if (fileName) {
                            let indexName = fileName.indexOf('filename')
                            fileName = decodeURIComponent(fileName.slice(indexName + 9, fileName.length)).replace(/"/g, '')
                            let blob = this.response
                            let blobURL = window.webkitURL.createObjectURL(blob)
                            let a = document.createElement('a')
                            a.download = fileName
                            a.href = blobURL
                            $('body').append(a)
                            a.click()
                            $(a).remove()
                            Loading.service({ fullscreen: true }).close()
                        } else {
                            let resultMsg = null
                            let reader = null
                            if (window.FileReader) {
                                reader = new FileReader()
                                reader.onload = function () {
                                    if (reader.readyState == 2) {
                                        let resultJson = JSON.parse(reader.result)
                                        resultJson && (resultMsg = resultJson.msg || resultJson.message)
                                        Loading.service({ fullscreen: true }).close()
                                        MessageBox.confirm(resultMsg || '文件不存在，请确认后重试！', '温馨提示', {
                                            confirmButtonText: '确认',
                                            showCancelButton: false,
                                            type: 'warning'
                                        }).catch(err => { })
                                    }
                                }
                                reader.readAsText(this.response)
                            }
                        }
                    } else {
                        let resMsg = this.responseText || ''
                        Loading.service({ fullscreen: true }).close()
                        MessageBox.confirm('文件下载失败：' + resMsg, '温馨提示', {
                            confirmButtonText: '确认',
                            showCancelButton: false,
                            type: 'warning'
                        }).catch(err => { })
                    }
                } else {
                    Loading.service({ fullscreen: true }).close()
                }
            }
            xhr.send()
        }, 500)
    } else {
        MessageBox.confirm('文件地址不存在', '温馨提示', {
            confirmButtonText: '确认',
            showCancelButton: false,
            type: 'warning'
        }).catch(err => { })
    }
}
```
