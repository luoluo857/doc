## pinia的用法

1. 支持选项式api和组合式api的写法
2. 没有mutation，只有state、getters、actions
3. 分模块不需要modules（vuex需要）
4. 体积小
5. 可以直接修改state数据

#### 安装pinia

```js
npm install pinia
yarn add pinia
```

#### main.js引入

```js
import {crearePinia} from 'pinia'
app.use(createPinia())
```

#### store/index.js

```js
import {defineStore} from 'pinia'
export const useStore = defineStore('storeId',{
	state:()=>{
		return {
			num:0,
      name:"李雷"
		}
	},
	getters:{
    //getters有缓存机制
    changNum(){
      return this.num + 1000
    }
  },
	actions:{
    editNum(val){
      this.num += val;
    }
  }
})
```

#### 页面使用

```js
<template>
	<div>
  	{{store.num}}//这种用法麻烦
  </div>
</template>
import {storeToRefs} from 'pinia'//用这个才可以修改state的数据
import {useStore} from '../store/index'
const store = useStore();

//方便的用法,页面直接使用 {{num}} 就行了
let {num,name} = storeToRefs(store);
//点击事件修改
const handleChange =()=>{
  num++;
  name.value = "李四";
  //可以批量更新
  store.$patch(state=>{
    state.num++;
    state.name = "李四"
  })
}
//actions属性的用法
const btn = ()=>{
  store.editNum(100);
}
```

### pinia的模块划分

> 直接新建文件就行了

##### user.js

```js
import {defineStore} from 'pinia'
export const user = defineStore('user',{//这里叫user
	state:()=>{
		return {
			num:0,
      name:"李雷"
		}
	},
	getters:{
    //getters有缓存机制
    changNum(){
      return this.num + 1000
    }
  },
	actions:{
    editNum(val){
      this.num += val;
    }
  }
})
```

##### 使用这个user.js的模块

```js
<template>
	<div>
  	{{store.num}}//这种用法麻烦
  </div>
</template>
import {storeToRefs} from 'pinia'//用这个才可以修改state的数据
import {user} from '../store/user'//这边命名也应该叫user
const useStore = user();

//方便的用法,页面直接使用 {{num}} 就行了
let {num,name} = storeToRefs(useStore);

```

