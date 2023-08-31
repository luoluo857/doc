# u-picker组件封装

### 不用多说，自然是要引入u-view的了

##### component:

```js
<template>
	<div class="picker" @click="onToogle" :style="{height:height+'px'}">
		<view class="placeholder" v-if="!value" :style="{color:placeColor,fontSize:placeSize+'px'}">{{"请选择"+placeholder}}</view>
		<view class="value" :style="{color:color,fontSize:size+'px'}" v-else>
			<text>{{value}}</text>
			<text v-if="values" style="padding: 0 5px;">-</text>
			<text v-if="values">{{values}}</text>
		</view>
		<u-picker :show="toogle" :itemHeight="itemHeight" :title="title" :columns="arr" @confirm="clickConfirm"
			keyName="name" @cancel="onToogle"></u-picker>
		<u-icon name="arrow-right" :size="iconSize+'px'" :color="value?iconColor:iocnPlaceColor"></u-icon>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				toogle:false
			}
		},
		props:{
			arr:{//数据
				type:Array,
				default:""
			},
			value:{//显示的值
				type:String,
				default:""
			},
			values:{//显示第二个的值,可选可不选
				type:String,
				default:""
			},
			title:{//弹出框的标题
				type:String,
				default:""
			},
			placeholder:{//placeholder文字
				type:String,
				default:""
			},
			height:{//整个的高度
				type:String,
				default:"50"
			},
			placeColor:{ //placeholder文字颜色
				type:String,
				default:"#ccc"
			},
			color:{//选中文字颜色
				type:String,
				default:"#333"
			},
			iconColor:{//文字选中图标颜色
				type:String,
				default:"#333"
			},
			iocnPlaceColor:{ //placeholder图标颜色
				type:String,
				default:"#ccc"
			},
			placeSize:{//placeholder字体大小
				type:Number,
				default:16
			},
			size:{//字体大小
				type:Number,
				default:16
			},
			iconSize:{//图标大小
				type:Number,
				default:16
			},
			itemHeight:{//各列中，单个选项的高度
				type:Number,
				default:80
			}
		},
		methods:{
			onToogle(){
				this.toogle = !this.toogle;
			},
			clickConfirm(val){
				this.$emit("onComfirm",val);
				this.toogle = false;
			}
		}
	}
</script>

<style scoped>
	.picker{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding: 0 10px;
	}
	.placeholder{
		width: 100%;
	}
	.value{
		width: 100%;
	}
</style>
```

##### 页面简单调用：

```js
<ml-picker :arr="recordArr" placeholder="学历" :value="recordValue" @onComfirm="handleComfirm"></ml-picker>

import mlPicker from "./components/mlPicker"
export default{
    data(){
        return{
			recordValue:"",
            recordArr:[
            [{id:1,name:"小学"},
            {id:2,name:"初中"},
            {id:3,name:"中专"},
            {id:4,name:"高中"},
            {id:5,name:"高技"},
            {id:6,name:"大专"},
            {id:7,name:"本科"},
            {id:8,name:"硕士"},
            {id:9,name:"博士"},
            {id:10,name:"研究生"}]
            ],
        }
    },
	components:{
		mlPicker
	},
	methods:{
		handleComfirm(val){
			this.recordValue = val.value[0].name
		},
	}
}		
```

