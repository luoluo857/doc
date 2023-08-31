# Express-generator项目生成器

```
npm install -g express-generator
```

全局安装后直接用:(-e是指模板文件格式ejs。也可以把-e去掉，默认会用jade模板)

```
express -e 项目名
```



# express

我们一般使用搭建一些简单的后端接口用`nodejs`是最方便的，既然使用后端那就必须用框架更快，在这我们使用express这个`nodejs`的框架

首先建一个文件夹，命名最好是英文的

第一步初始化一下`package.json`文件

```
npm init -y
```

然后安装一下express框架

```
npm install express
```

在根目录新建一个主文件，这里就用`app.js`为例，`app.js`模板如下：

```js
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("start port 3000");
});

```

这样我们就搭建起一个端口号为3000的web服务器

