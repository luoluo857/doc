### cors跨域

我们如何在后端设置跨域呢？这里以nodejs为例，使用`cors`进行跨域。

首先要安装一下`cors`跨域

```
npm i cors
```

在主文件中写入，一般是`app.js`

```js
const cors = require("cors");
app.use(cors());
```



####  设置允许所有域名跨域

```javascript
var express = require('express');
var app = express();

// 设置允许所有域名跨域：
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})
```



#### 使用代理跨域

代理就是使用一个中转站，客户端不直接对服务端发送请求，而是通过访问代理，代理去从服务端获取数据，以这种方式绕过浏览器端的跨域验证。达到跨域请求的目的。

> 这里要用到node的一个包http-proxy-middleware。关键代码(express)如下

```
//开启跨域请求 以中间件代理 step1
var proxy = require('http-proxy-middleware')
//跨域请求 step2   使用代理
var app = express();
app.use('/api',proxy({
  target:"http://localhost:3000/",
  changOrigin:true
}));
```

