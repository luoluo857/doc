# uniapp封装接口请求和图片上传

<u>*封装接口的时候注意**命名**不要重复了*</u>

request.js文件

```js
// 	根据环境变量改变请求接口统一前缀
let baseURL = ''

// #ifdef H5
 baseURL = process.env.NODE_ENV == "development" ? '/app' : '/app'
// #endif

// #ifdef MP-WEIXIN||APP-PLUS
if(process.env.NODE_ENV === 'development'){
	baseURL = 'https://www.baidu.com'	//	开发环境
}else{
	baseURL = 'https://www.baidu.com'	//	生产环境
}
// #endif

//以上是我项目的配置，根据自己的项目来配置
//let baseURL = ''这是必要的


//获取api接口数据模板
const request = (options) => {
	return new Promise((resolve, reject) => {
		if (options.showLoading) {
			uni.showLoading({
				title: options.loadingText || "加载中",
				mask: true
			});
		}

		uni.request({
			url: baseURL + options.url,
			data: options.data || {},
			method: options.method || 'POST',
			header: {
                'content-type': options.method == 'GET' ? 'application/json' :'application/x-www-form-urlencoded',
                'Authorization': uni.getStorageSync('userToken') || ''
            },
			success: res => {
				
				const response = res.data;
				if (res.statusCode == 200) {
					resolve(response)
				} else {
					reject(res)
				}
			},
			fail: err => {
				console.log("服务器异常");
				reject(err)
			},
			complete: res => {
				uni.hideLoading();
			}
		})
	})
}
//获取api接口数据模板
const upload = (options) => {
	return new Promise((resolve, reject) => {
		if (options.showLoading) {
			uni.showLoading({
				title: options.loadingText || "上传中",
				mask: true
			});
		}

		uni.uploadFile({
			url: baseURL+ options.url,
			method: 'POST',
			header:{
					'content-type': 'multipart/form-data',
					'Authorization': uni.getStorageSync('userToken') || ''
			},
			formData: options.data,
			filePath: options.file,
			name: 'file',
			success: res => {
				const response =JSON.parse(res.data);
				if (res.statusCode == 200) {
					resolve(response)
				} else {
					reject(res)
				}
			},
			fail: err => {
				console.log("服务器异常");
				reject(err)
			},
			complete: res => {
				uni.hideLoading();
			}
		});
		
		
	})
}

export default {request,upload}
```

api.js文件

```js
import {request,upload} from './request'

//这是列表的接口
export function listApi(data){
	return upload({
		url:"/api/list",
		data,
		showLoading:true,
		loadingText:"数据加载中"
	})
}

//这是上传的接口
export function uploadApi(data,file){
	return upload({
		url:"/api/uploadFile",
		data,
		file,
		showLoading:true,
		loadingText:"图片上传中"
	})
}
```

vue页面使用

```js
import {listApi,uploadApi} from "../../common/api.js"
methods:{
	//这是获取列表数据
	getData(){
		listApi().then(res=>{
			console.log(res)
		})
	},
	//这是图片上传
	upload(){
		uni.chooseImage({
            count: 1, //默认9
            sourceType: ['album', 'camera'], //从相册选择
            success: res => {
                const file = res.tempFilePaths;
                let data={
                	type:'skillImage'
                }
                uploadApi(data,file[0]).then(res=>{
                    console.log(res);
                    this.src = res.data.url
                })

    		}
    	});
	}
}
```

