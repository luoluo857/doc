### 模拟mock数据

##### 1.本地模拟mock

```js
cnpm install mockjs -S
```

新建一个api文件夹，在建一个mockData文件夹，建一个home.js,模拟数据的代码如下：

```
export default{
	getData:()=>{
		return{
			code:200,
			data:{
				tableData:[
					{
                        name:"张三",
                        age:10,
                        price:50
					},
					{
						name:"李四",
                        age:20,
                        price:20
					}
				]
			}
		}
	}
}
```

在api文件夹下新建mock.js，代码如下：

```
import Mock from 'mockjs'
import homeApi from './mockData/home'
//拦截请求
Mock.mock('/home/getData',homeApi.getHomeData)
```

在main.js下引入这个api文件夹下的mock.js文件

```
cnpm install axios -S
```

在对应的vue文件使用：

```
import {defineComponent,onMounted,ref} from "vue";
import axios from 'axios';
export default defineComponent({
	setup(){
		const tableData = ref([]);
		const getTableList = async ()=>{
            await axios.get("/home/getData").then((res)=>{
                //console.log(res);
                if(res.data.code == 200){
                	 tableData.value = res.data.data.tableData;
                }
               
            })
        };
        onMounted(()=>{
            getTableList();
        });
	}
})

```

##### 2.线上的mock [fastmock](https://www.fastmock.site)

```
	const getTableList = async ()=>{
            await axios.get("mock数据的地址").then((res)=>{
                //console.log(res);
                if(res.data.code == 200){
                	 tableData.value = res.data.data;
                }
               
            })
        };
```

