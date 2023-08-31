# 完整的axios二次封装，包括请求加载中、token、请求类型get

### Request.js文件

```js
import axios from "axios";
import { Loading } from 'element-ui'
let url = "";
if (process.env.VUE_APP_URL == "production") {
  url = process.env.VUE_APP_BASE_API;
} else {
  url = process.env.VUE_APP_BASE_API;
}
const service = axios.create({
  baseURL: url,
  timeout: 10000,
});
let loading
//请求拦截器，前端给后端发起请求，一般携带token
service.interceptors.request.use(
  (config) => {
    //添加请求头
    config.headers = {
      'Content-Type': config.method == 'GET' ? 'application/json;charset=utf-8':'application/x-www-form-urlencoded;charset=utf-8',
      // "Authorization": localStorage.token || "",
    };
   
    if (config.showLoading) {
      loading = Loading.service({
        lock: true,
        text: config.loadingText || "加载中",
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
		}
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
//响应拦截器，后端返回给前端数据
service.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      loading.close()
      return response;
    } else {
      return Promise.reject(new Error(res.msg));
    }
  },
  (error) => {
    return Promise.reject(new Error(error.response.data));
  }
);

export default service;

```

### api.js文件；有些人称为解耦

```js
import request from "../api/request";
export function articlesList() {
  return request({
    url: "/articles",
    methods: "GET",
    showLoading:true,
    loadingText:"数据加载中"
  });
}

```

### vue页面调用

```js
<script>
// import axios from 'axios';//一般axios的写法
import {articlesList} from "../api/api"
export default {
  name: "Home",
  created() {
    this.getData();
  },
  methods: {
    getData() {
        articlesList().then((res) => {
        console.log(res.data);
      });
      //一般axios的写法
      // axios({
      //   url:"http://120.25.171.67:3000/articles"
      // }).then(res=>{
      //   console.log(res.data);
      // })
    },
  },
};
</script>
```

### .env.development开发环境文件

```js
# 页面标题
VUE_APP_TITLE = 开发环境

# 生产环境配置
VUE_APP_URL = 'development'

VUE_APP_BASE_API =  'http://120.25.171.67:3000'
```

### .env.production生产环境文件

```js
# 页面标题
VUE_APP_TITLE = 生产环境

# 生产环境配置
VUE_APP_URL = 'production'

VUE_APP_BASE_API =  'http://120.25.171.67:3000'
```

### vue.config.js配置文件

```js
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BASE_API,
      },
    },
  },
});
```

