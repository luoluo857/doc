## Json-server的使用

json-server的安装 `npm install -g json-server`

启动json-server `json-server --watch db.json`

这样就可以生成一个db.json的文件

修改端口号 `json-server --watch db.json --port 5000`

#### 这是我自己定义的一些数据

```json
{
  "account": [
    {
      "name":{
        "username": "qq",
        "nickname": "用户"
      },
      "passeord":"123456"
    }
  ],
  "users":[
    {
      "id":1,
      "name":"林俊杰",
      "score":9.9
    },
    {
      "id":2,
      "name":"陈奕迅",
      "score":9.8
    },
    {
      "id":3,
      "name":"杨洋",
      "score":10.0
    }
  ]
}
```

根据id获取数据（1）`http://localhost:3000/users/1`这是vue中prarms，数据为花括号形式

根据id获取数据（2）`http://localhost:3000/users?id=1`这是vue中query，数据为列表形式

满足条件的参数才会显示`http://localhost:3000/users?id=1&name=林俊杰` ，这个林俊杰不能加“”

通过对象属性值obj.key的方式获取数据 `http://localhost:3000/account?name.nickname=用户`

### 搜索、分页、排序

```json
 "movies":[
    {
      "id":1,
      "name":"猛龙过江1",
      "score":9.9
    },
    {
      "id":2,
      "name":"猛龙过江2",
      "score":9.8
    },
    {
      "id":3,
      "name":"猛龙过江3",
      "score":10.1
    },
    {
      "id":4,
      "name":"猛龙过江4",
      "score":9.9
    },
    {
      "id":5,
      "name":"猛龙过江5",
      "score":9.2
    },
    {
      "id":6,
      "name":"猛龙过江6",
      "score":10.0
    },
    {
      "id":7,
      "name":"猛龙过江7",
      "score":9.9
    },
    {
      "id":8,
      "name":"猛龙过江8",
      "score":9.7
    },
    {
      "id":9,
      "name":"猛龙过江9",
      "score":10.0
    },
    {
      "id":10,
      "name":"猛龙过江10",
      "score":9.7
    },
    {
      "id":11,
      "name":"猛龙过江11",
      "score":9.9
    },
    {
      "id":12,
      "name":"猛龙过江12",
      "score":10.0
    }
  ]
```

全局模糊搜索 `http://localhost:3000/movies?q=9`



分页搜索 ,如果不设置_limit，默认_page返回10条数据 `http://localhost:3000/movies?_page=1`

第一页显示5条数据 `http://localhost:3000/movies?_page=1&_limit=5`



排序字段：`http://localhost:3000/movies?_sort=score`，_sort来排序，默认升序，score数值从小到大

排序是`_order=asc`  (默认asc正排) desc是倒排

可以组合使用，例如`http://localhost:3000/movies?_sort=score&_order=desc&_page=1&_limit=5`



获取局部的数据slice (__start，_end)，默认从0开始 `http://localhost:3000/movies?_start=0&_end=2`

意思是获取前三条的数据

还可以 (__start，__limit) `http://localhost:3000/movies?_start=0&_limit=3

### 更加细致的过滤条件

_gte:大于等于；_lte小于等于

意思是id>=5和<=9：`http://localhost:3000/movies?id_gte=5&id_lte=9`



__ne排除（可以结合使用多个_ne）

排除id=1的： `http://localhost:3000/movies?id_ne=1`



_like(包含)

score有9的： `http://localhost:3000/movies?score_like=9`

### 关联ID,就是分类那种

```json
 "comments":[
    {
      "id":1,
      "name":"大哥1",
      "movieId":1
    },
    {
      "id":2,
      "name":"大哥2",
      "movieId":1
    },
    {
      "id":3,
      "name":"大哥3",
      "movieId":2
    },
    {
      "id":4,
      "name":"大哥4",
      "movieId":3
    },
    {
      "id":5,
      "name":"大哥5",
      "movieId":3
    } 
  ]
```

向下关联 _embed

`http://localhost:3000/movies?_embed=comments`

意思是某个分类里面有什么数据

```json
"movies":[
    {
      "id":1,
      "name":"猛龙过江1",
      "score":9.9,
       "comments":[
        {
          "id":1,
          "name":"大哥1",
          "movieId":1
        },
        {
          "id":2,
          "name":"大哥2",
          "movieId":1
        }
      ]
    },
    {
      "id":2,
      "name":"猛龙过江2",
      "score":9.8,
       "comments":[
        {
          "id":3,
          "name":"大哥3",
          "movieId":2
        }
      ]
    },
    {
      "id":3,
      "name":"猛龙过江3",
      "score":10.1,
       "comments":[
        {
          "id":4,
          "name":"大哥4",
          "movieId":3
        },
        {
          "id":5,
          "name":"大哥5",
          "movieId":3
        } 
      ]
    },
    {
      "id":4,
      "name":"猛龙过江4",
      "score":9.9,
      "comments":[]
    },
    {
      "id":5,
      "name":"猛龙过江5",
      "score":9.2,
      "comments":[]
    }
  ...
  ]
```

向上关联：_expand

`http://localhost:3000/comments?_expand=movie` 注意movie是单数

方便理解（一部电影有多条评论，一条评论只在一部电影）

意思是这个数据在那个分类里面

```json
[
	{
    "id": 1,
    "name": "大哥1",
    "movieId": 1,
    "movie": {
      "id": 1,
      "name": "猛龙过江1",
      "score": 9.9
    }
  },
  {
  "id": 2,
  "name": "大哥2",
  "movieId": 1,
    "movie": {
      "id": 1,
      "name": "猛龙过江1",
      "score": 9.9
    }
  },
  {
  "id": 3,
  "name": "大哥3",
  "movieId": 2,
    "movie": {
      "id": 2,
      "name": "猛龙过江2",
      "score": 9.8
    }
  },
  {
  "id": 4,
  "name": "大哥4",
  "movieId": 3,
    "movie": {
      "id": 3,
      "name": "猛龙过江3",
      "score": 10.1
    }
  },
  {
  "id": 5,
  "name": "大哥5",
  "movieId": 3,
    "movie": {
      "id": 3,
      "name": "猛龙过江3",
      "score": 10.1
    }
  }
]
```

## 使用axios增删改查

Get

```js
axios.get("http://localhost:3000/movies").then(res=>{
	console.log(res.data)
})
```

Post：不写id,id会自动加一的

```js
axios.post("http://localhost:3000/movies",{
	"name":"猪很美",
	"score":9.9
}).then(res=>{
	console.log(res.data)
})
```

put：id为10

```js
axios.put("http://localhost:3000/movies/10",{
	"name":"猪很美10",
	"score":9.4
}).then(res=>{
	console.log(res.data)
})
```

Delete

```js
axios.delete("http://localhost:3000/movies/10").then(res=>{
	console.log(res.data)
})
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