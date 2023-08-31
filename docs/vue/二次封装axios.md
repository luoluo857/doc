### 二次封装axios

在api文件夹下新建request.js文件，同时也在src目录下新建config文件夹+index.js文件

request.js的代码如下：

```js
import axios from 'axios';
import config from '../config'
//创建一个axios实例对象
const service = axios.create({
	baseURL:config.baseApi
})
//请求拦截：在请求之前做一些事情
service.interceptors.request.use((req)=>{
//可以自定义header
//做token认证
	return req
})
//响应拦截：在请求之后做一些事情
sevice.interceptors.response.use((res)=>{
	const {code,data,msg} = res.data;
	if(code==200){
		return data
	}else{
		返回 msg 的信息或者弹出 网络错误 的信息
		return Promise.reject(msg)
	}
})

//封装核心函数
function request(options){
	//把请求全部变成小写
	options.method = options.method || 'get'
	if(options.method.toLowerCase() == 'get'){
		options.params = options.data
	}
	
	//对mock的处理
	let isMock = config.mock
	if(typeof options.mock !== 'undefined'){
		isMock = options.mock
	}
	
	//对线上环境做处理
	if(config.env = 'prod'){
        //如果是线上环境就不能让你用mock
        service.defaults.baseURL = config.baseApi
	}else{
		service.defaults.baseURL = isMock?config.mockApi:config.baseApi
	}
	return service(options)

}
export default request
```

config>index.js代码如下：

#### 一般在企业级项目里面有三个环境

##### 1.开发环境

##### 2.测试环境

##### 3.线上环境

```js
//当前的环境
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
	development:{
		baseApi:'/api',
		mockApi:'mock数据的链接'
	}，
	test:{
		baseApi:'/api',
		mockApi:'测试的数据链接'
	}，
	prod:{
		baseApi:'/api',
		mockApi:'后端的api接口'
	}
}
export default{
	env,
	//mock的总开关,为false的话mock数据就不能用了
	mock:true,
	...EnvConfig[env]
}
```

在api文件夹下新建api.js文件，代码如下：

```js
//整个项目的api
import request from "./request"
export default{
	getTableData(params){
		url:'/home/getTableData',
		method:'get',
		data:params,
		mock:true	//mock为false就不使用
	}
}
```

然后在main.js下全局引入

```js
import api from './api/api'
app.config.globalProperties.$api = api
```

在需要请求的文件，比如home.vue

```js
import {onMounted,getCurrentInstance} from "vue"
export default defineComponent({
	setup(){
		const {proxy} = getCurrentInstance();
		const getTableList = async()=>{
			let res = await proxy.$api.getTableData();
			//console.log(res);
			tableData.value = res;
		};
		onMounted(()=>{
			getTableList();
		});
		return{
			tableData
		}
	}
})
```

