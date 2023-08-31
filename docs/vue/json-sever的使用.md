## json-sever的使用

json-server的安装：`npm install -g json-server`

启动(默认3000端口)：`json-server --watch db.json`

指定端口号5000：`json-server --watch db.json --port 5000`

### 数据：

```js
{
  "account": [
    {
      "name": {
        "username": "名字",
        "nickname": "用户"
      },
      "passeord": "123456"
    }
  ],
  "arrs": [
    {
      "id": 1,
      "title": "这是第一个标题",
      "author": "xq1"
    },
    {
      "id": 2,
      "title": "这是第二个标题",
      "author": "xq2"
    },
    {
      "id": 3,
      "title": "这是第三个标题",
      "author": "xq3"
    },
    {
      "id": 4,
      "title": "这是第四个标题",
      "author": "xq4"
    },
    {
      "id": 5,
      "title": "这是第五个标题",
      "author": "xq5"
    },
    {
      "id": 6,
      "title": "这是第六个标题",
      "author": "xq6"
    },
    {
      "title": "这是新增的标题",
      "author": "xq",
      "id": 7
    },
    {
      "title": "这是新增的标题",
      "author": "xq",
      "id": 8
    },
    {
      "title": "这是新增的标题",
      "author": "xq",
      "id": 9
    },
    {
      "title": "这是新增的标题",
      "author": "xq新增",
      "id": 11
    }
  ],
  "categorys":[
    {
      "id":1,
      "name":"子类1",
      "arrId":1
    },
    {
      "id":2,
      "name":"子类2",
      "arrId":1
    },
    {
      "id":3,
      "name":"子类2",
      "arrId":2
    },
    {
      "id":4,
      "name":"子类3",
      "arrId":3
    },
    {
      "id":5,
      "name":"子类3",
      "arrId":3
    } 
  ]
}
```

#### 根据id获取数据

> params数据为花括号形式
>
> query数据为列表形式

**params格式：** `http://localhost:3000/arrs/1`

**query格式：** `http://localhost:3000/arrs?id=1`

满足条件才会显示：`http://localhost:3000?id=1&title=这是第一个标题`

通过对象属性值的方式获取数据：`http://localhost:3000/account?name.nickname=用户`

### 搜索：q

全局模糊搜索：`http://localhost:3000/arrs?q=1`

### 分页：（page，limit）

分页搜索：`http://localhost:3000/arrs?_page=1`*<u>(不设置limit，默认page返回10条数据)</u>*

比如：第一页显示5条数据：`http://localhost:3000/arrs?_page=1&_limit=5`

### 排序：（_sort，_order）

> sort是排序的字段，比如根据id来排序：sort=id
>
> _order是排序的方式，默认是升序，从小到大；**asc**是升序；**desc**是倒序

根据id来排序：`http://localhost:3000/arrs?_sort=id`

使用：`http://localhost:3000/arrs?_sort=id&_order=desc&_page&=1_limit=5`

<u>(意思是根据id来排、倒序、一页展示5条数据)</u>

### 局部数据：（_start，_end）

> 跟slice的原理一样

获取前四条数据：`http://localhost:3000/arrs?_start=0&_end=4`

### 过滤

##### 大于等于：_gte，小于等于：_lte

​	获取大于等于5且小于等于9的数据：`http://localhost:3000/arrs?_gte=5&_lte=9`

##### 排除：_ne

​	排除id=1：`http://localhost:3000/arrs?id_ne=1`

##### 包含：_like

​	id有1：`http://localhost:3000/arrs?id_like=1`

### 关联

> 向下关联：_embed
>
> 向上关联：_expand

向下关联	`http://localhost:3000/arrs?_embed=categorys`

得到数据如下：

```js
[
  {
    "id": 1,
    "title": "这是第一个标题",
    "author": "xq1",
    "categorys": [
      {
        "id": 1,
        "name": "子类1",
        "arrId": 1
      },
      {
        "id": 2,
        "name": "子类2",
        "arrId": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "这是第二个标题",
    "author": "xq2",
    "categorys": [
      {
        "id": 3,
        "name": "子类2",
        "arrId": 2
      }
    ]
  },
  {
    "id": 3,
    "title": "这是第三个标题",
    "author": "xq3",
    "categorys": [
      {
        "id": 4,
        "name": "子类3",
        "arrId": 3
      },
      {
        "id": 5,
        "name": "子类3",
        "arrId": 3
      }
    ]
  },
  {
    "id": 4,
    "title": "这是第四个标题",
    "author": "xq4",
    "categorys": []
  },
  {
    "id": 5,
    "title": "这是第五个标题",
    "author": "xq5",
    "categorys": []
  }
  ...
]
```

向上关联	`http://localhost:3000/categorys?_expand=arr`

得到数据如下：

```js
[
  {
    "id": 1,
    "name": "子类1",
    "arrId": 1,
    "arr": {
      "id": 1,
      "title": "这是第一个标题",
      "author": "xq1"
    }
  },
  {
    "id": 2,
    "name": "子类2",
    "arrId": 1,
    "arr": {
      "id": 1,
      "title": "这是第一个标题",
      "author": "xq1"
    }
  },
  {
    "id": 3,
    "name": "子类2",
    "arrId": 2,
    "arr": {
      "id": 2,
      "title": "这是第二个标题",
      "author": "xq2"
    }
  },
  {
    "id": 4,
    "name": "子类3",
    "arrId": 3,
    "arr": {
      "id": 3,
      "title": "这是第三个标题",
      "author": "xq3"
    }
  },
  {
    "id": 5,
    "name": "子类3",
    "arrId": 3,
    "arr": {
      "id": 3,
      "title": "这是第三个标题",
      "author": "xq3"
    }
  }
]
```

### 静态资源部署

创建json_server_config.json

```json
{
	"port":3000,
	"watch":true,
	"static":"./public",
	"read-only":false,
	"no-cors":true,
	"no-gzip":false
}
```

要重启， `json-server --watch db.json json_server_config.json`

`http://localhost:3000/images/1.png`

## 使用axios增删改查

Get

```js
axios.get("http://localhost:3000/arrs").then(res=>{
	console.log(res.data)
})
```

Post：不写id,id会自动加一的

```js
axios.post("http://localhost:3000/arrs",{
	"title":"新增标题",
	"author":"mm"
}).then(res=>{
	console.log(res.data)
})
```

put：id为10

```js
axios.put("http://localhost:3000/arrs/10",{
	"title":"修改标题",
	"author":"mm"
}).then(res=>{
	console.log(res.data)
})
```

Delete

```js
axios.delete("http://localhost:3000/arrs/10").then(res=>{
	console.log(res.data)
})
```

### 
