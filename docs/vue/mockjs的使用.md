# mockjs的使用

官网http://mockjs.com/

详细参数可看官网示例http://mockjs.com/examples.html

也可以使用Fast Mock（线上的mock）https://www.fastmock.site/

安装   `yarn add mockjs`

安装  `yarn add axios`

##### 我用的是vite安装的环境

Main.js

```js
import axios from 'axios'
import Mock from 'mockjs'
const Mock = require('mockjs');//官网是用这个的，可能webpack用这个吧,这个不重要
```

### get请求

> key的name""可加可不加，id|+1这个就要加""了
> @:随机，括号里可以加参数

userdata随机生成1-10条数据

id自动+1，从1开始  （）

name随机生成名字

address随机生成地址（true：省市，空：市）

email随机生成邮件（不指定邮箱就随机生成）

```js
<script setup>
import axios from 'axios'
import Mock from 'mockjs';
const Random = Mock.Random //这个用不到可以不要

//模拟get请求，随机生成1-10条数据
var { userdata } = Mock.mock({
  "userdata|1-10":[
    {
      "id|+1":1,
      name:"@cname()",
      address:"@city(true)",
      email:"@email(163.com)"
    }
  ]
})
Mock.mock("/api/user/list","get",()=>{
  return {
    code:200,
    message:"这是get请求",
    data:userdata
  }
})

const btn = ()=>{
  axios.get("/api/user/list").then(res=>{
    console.log(res.data);
  })
}
</script>
<template>
  <div>
    <button @click="btn">get请求</button>
  </div>
</template>
```

### 随机生成20-30条数据

id自动+1

title随机生成标题（可以显示几个字，比如：30）

date随机生成2023-02-12 12:30:12的格式

info随机生成1-3行文字

pic随机生成图片（尺寸）

```js
var { newList } = Mock.mock({
  "newList|20-30":[
    {
      id:"@increment(1)",
      title:"@ctitle()",
      date:"@date(yyyy-MM-dd hh:mm:ss)",
      info:"@cparagraph(1,3)",
      pic:"@image('300x200')"
    }
  ]
})
Mock.mock("/api/news","get",()=>{
  return {
    code:200,
    message:"这是get请求",
    data: newList
  }
})

```

### post请求(data传参)

company随机在数组里面选一个

companyDesc随机生成两句

logo随机生成logo图片

City只能是西安

Job随机在数组里面选一个

jobDesc随机生成20个字符

```js
//模拟post请求
var { newData } = Mock.mock({
  "newData|1-3":[
    {
      "company|1":["CSDN","腾讯","阿里","百度","华为"],
      "companyDesc":"@paragraph(2)",
      "logo":function(){
        return Random.image("36x36","#d8d8d8","#fff","mock")
      },
      "city|1":"西安",
      "job|1":["Java工程师","web工程师","算法工程师"],
      "jobDesc":"@word(20)"
    }
  ]
})
Mock.mock("/api/newdata","post",(data)=>{
  console.log(data)
  return {
    code:200,
    message:"这是post请求",
    data: newData
  }
})
const btn = ()=>{
  axios.post("/api/newdata",{
    name:"李龙",
    age:20
  }).then(res=>{
    console.log(res.data);
  })
}
```

