# 选择器组件ml-picker

基于uview封装的选择器，uview那个只有一个弹框，使用起来非常的不方便，所以就封装了一下

组件名：`ml-picker`

### 使用：

```js
<ml-picker :arr="recordArr" placeholder="学历" :value="recordValue" @onComfirm="handleComfirm"></ml-picker>

import mlPicker from "@/components/ml-picker/ml-picker.vue"
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

#### 具体参数：

| 参数                | 注释                                                 |
| ------------------- | ---------------------------------------------------- |
| arr                 | 数据（必传）                                         |
| value               | 显示的值（必传）                                     |
| values              | 显示第二个的值                                       |
| height              | 选择器的高度                                         |
| placeholder         | 文本框的占位符，默认自带"请选择"                     |
| placeColor          | 文本框的占位符颜色                                   |
| placeSize           | 文本框的占位符大小                                   |
| color               | 文字颜色                                             |
| size                | 文字大小                                             |
| showIcon            | 是否显示向右图标，默认false（Boolean类型）//         |
| iconSize            | 图标大小                                             |
| iocnPlaceColor      | 图标颜色（选中前）                                   |
| iconColor           | 图标颜色（选中后）                                   |
| itemHeight          | 弹出框单个选项的高度                                 |
| title               | 弹出框标题                                           |
| visibleItemCount    | 弹出框显示的行数，默认5行//                          |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器，默认false（Boolean类型） |

#### 事件：

| 事件      | 说明                     |
| --------- | ------------------------ |
| onComfirm | 点击确定（回调时间参数） |

### 组件代码：

```js
<template>
	<div>
		<view class="picker" @click="onToogle" :style="{height:height+'px'}">
			<view class="placeholder" v-if="!value" :style="{color:placeColor,fontSize:placeSize+'px'}">{{"请选择"+placeholder}}</view>
			<view class="value" :style="{color:color,fontSize:size+'px'}" v-else>
				<text>{{value}}</text>
				<text v-if="values" style="padding: 0 5px;">-</text>
				<text v-if="values">{{values}}</text>
			</view>
			<u-icon name="arrow-right" :size="iconSize+'px'" :color="value?iconColor:iocnPlaceColor"></u-icon>
		</view>
		<u-picker :show="toogle" :itemHeight="itemHeight" :closeOnClickOverlay="closeOnClickOverlay" :title="title" :columns="arr" @confirm="clickConfirm"
			keyName="name" @cancel="onToogle"></u-picker>
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
			},
			closeOnClickOverlay:{//点击遮罩关闭
				type:Boolean,
				default:false
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
		/* height: 50px; */
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
