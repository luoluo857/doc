# vuex的用法

> **state**和**getters**要在**computed**中调用
>
> **mutations**和**actions**要在**methods**中调用

## store/index.js文件

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:3，
    price:30,
    list:[
    	{checked:false},
  		{checked:false},
      {checked:false}
    ],
    selectedList:[]
  },
  getters: {
    sum(state){
      return state.count * state.price;
    },
    checkAll(state){
      return state.list.length == state.selectedList.length;
    }
  },
  mutations: {
    add(state){
      state.count++
    },
    //全选
    checkedAll(state){
      state.selectedList = state.list.map(item=>{
        item.checked = true;
      })
    },
    //全不选
    unCheckedAll(state){
      state.list.forEach(item=>{
        item.checked = false;
      })
			state.selectedList = [];
    }
  },
  actions: {
    checkedFn({commit,getters}){
      getters.checkAll ? commit('unCheckAll') : commit('checkedAll')
    }
  },
  modules: {},
});
```

### state的两种用法:页面使用(类似于页面中的data)

#### 第一种直接使用：

```js
<template>
  <div class="home">
     {{ $store.state.count }}
  </div>
</template>
```

#### 第二种用辅助函数使用：

```js
<template>
  <div class="home">
    {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState(['count'])
  },
}
</script>
```

### getters的两种用法:页面使用（类似于computed计算属性）

#### 第一种直接使用：

```js
<template>
  <div class="home">
     {{ $store.getters.sum }}
  </div>
</template>
```

#### 第二种用辅助函数使用：

```js
<template>
  <div class="home">
    {{ sum }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters(['sum'])
  },
}
</script>
```

### mutations的两种用法:页面使用（类似于methods方法）

#### 第一种直接使用：

```js
<template>
  <div class="home">
    {{ count }}
    <button @click="add">点击</button>
  </div>
</template>

<script>
export default {
  methods:{
  	add(){
  		 this.$store.commit('add')
  	}
  },
}
</script>
```

#### 第二种用辅助函数使用：

```js
<template>
  <div class="home">
    {{ count }}
    <button @click="add">点击</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods:{
    ...mapMutations(['add'])，
  },
}
</script>
```

### actions用来提交mutations的两种用法:页面使用

> Actions是用来提交mutations的，不是直接改变状态
>
> Actions可以包含任意异步操作，mutations是同步的

#### 第一种直接使用：

```js
<template>
  <div class="home">
    //单选
    <div v-for="(item,index) in list" :key="index">
    	<input type="radio" :checked="item.checked"/>单选
    </div>
		//全选
    <input type="radio" :checked="checkAll"/>全选
    <button @click="sum">点击</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState(['list'])
  },
  methods:{
    sum(){
      this.$store.dispath('checkedFn')
    }
  },
}
</script>
```

#### 第二种用辅助函数使用：

```js
<template>
  <div class="home">
    //单选
    <div v-for="(item,index) in list" :key="index">
    	<input type="radio" :checked="item.checked"/>单选
    </div>
		//全选
    <input type="radio" :checked="checkAll"/>全选
    <button @click="checkedFn">点击</button>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  computed:{
    ...mapState(['list'])
  },
  methods:{
    ...mapActions(['checkedFn'])，
  },
}
</script>
```

### mldules是将多个模块划分多文件管理

> 在store文件夹下新建模块的vuex，比如订单：order.js。使用modules呢就是为了方便管理多个模块，要不然index.js文件里面就会有很多乱七八糟的模块代码

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import order from "./modules/order"

export default new Vuex.Store({
  
  modules: {
    order
  },
});
```

<u>*order文件里面呢，就是有state这4个方法了*</u>

```js
export default{
	state: {
   	list:[]
  },
  getters: {
   
  },
  mutations: {
    
  },
  actions: {
    
  }
}
```

但是页面调用就有点不一样了，因为要找到某个文件的数据

```js
import {mapState} from 'vuex'
export default {
	computed:{
		...mapState({
			list:state=>state.order.list
		})
	}
}
```

