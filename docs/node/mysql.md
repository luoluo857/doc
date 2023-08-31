### mysql

##### nodejs连接mysql数据库

首先要安装一下`mysql`数据库

```
npm i mysql
```

然后在根目录新建一个db的文件夹，在里面新建一个`index.js`的文件，连接数据库模板如下：

```js
//导入mysql模块
const mysql = require('mysql');

//创建数据库连接对象
const db = mysql.createPool({
  host: '127.0.0.1',	//主机名
  user: 'root',			//用户名
  password: '123456',	//密码
  database: 'mysql_database',	//数据库名

})

//向外共享db数据库连接对象
module.exports = db
```

当然网上也有很多高级且强大的，我这个是比较简单的