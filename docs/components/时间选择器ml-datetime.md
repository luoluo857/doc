# 时间选择器ml-datetime

组件名：`ml-datetime`

### 使用：

```js
<template>
	<view class="">
		<ml-datetime mode="datetime" :value="dataValue" placeholder="日期" @onConfirm="handleConfirm"></ml-datetime>
	</view>
</template>

<script>
	import mlDatetime from "@/components/ml-datetime/ml-datetime.vue"
	export default {
		data() {
			return {
				dataValue:""
			}
		},
		components:{
			mlDatetime
		},
		methods: {
			handleConfirm(val) {
				this.dataValue = val;
            }
		}
	}
</script>

<style>
</style>
```

#### 组件参数

| 参数                | 注释                                                         |
| ------------------- | ------------------------------------------------------------ |
| value               | 传过来的值（必传）                                           |
| mode                | 年月日时分：datetime；年月日：date；年月：year-month；时分：time;（必传） |
| height              | 选择器的高度                                                 |
| placeholder         | 文本框的占位符，默认自带"请选择"                             |
| placeColor          | 文本框的占位符颜色                                           |
| placeSize           | 文本框的占位符大小                                           |
| color               | 文字颜色                                                     |
| size                | 文字大小                                                     |
| showIcon            | 是否显示向右图标，默认false（Boolean类型）                   |
| iconSize            | 图标大小                                                     |
| iocnPlaceColor      | 图标颜色（选中前）                                           |
| iconColor           | 图标颜色（选中后）                                           |
| itemHeight          | 弹出框单个选项的高度                                         |
| title               | 弹出框标题                                                   |
| visibleItemCount    | 弹出框显示的行数，默认5行                                    |
| closeOnClickOverlay | 是否允许点击遮罩关闭选择器，默认false（Boolean类型）         |

#### 事件

| 事件      | 说明                     |
| --------- | ------------------------ |
| onConfirm | 点击确定（回调时间参数） |
| onCancel  | -                        |

### 组件代码：

```js
<template>
	<view>
		<view class="main" @click="handleToogle" :style="{height:height+'px'}">
			<view class="value1">
				<view class="placeholder" v-if="!value" :style="{color:placeColor,fontSize:placeSize+'px'}">{{"请选择"+placeholder}}</view>
				<view v-else :style="{color:color,fontSize:size+'px'}">{{value}}</view>
			</view>
			<u-icon name="arrow-right" :size="iconSize+'px'" :color="value?iconColor:iocnPlaceColor" v-if="showIcon"></u-icon>
		</view>
		<u-datetime-picker
		 ref="datetimePicker" 
		 :formatter="formatter" 
		 :show="toogle" 
		 :visibleItemCount="visibleItemCount" 
		 :closeOnClickOverlay="closeOnClickOverlay"
		 :itemHeight="itemHeight" 
		 :title="title" 
		 minDate="0"
		 v-model="dataValue" 
		 :mode="mode"
		@confirm="eventConfirm" @cancel="eventCancel" ></u-datetime-picker>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataValue:this.$props.mode == "time"?"":new Date(),
				timePick: "",
				toogle: false
			}
		},
		props:{
			value:{//传过来的值
				type:String,
				default:""
			},
			mode:{//年月日时分：datetime；年月日：date；年月：year-month；时分：time;
				type:String,
				default:""
			},
			height:{//选择器的高度
				type:Number,
				default:50
			},
			placeholder:{//文本框的占位符，默认自带"请选择"
				type:String,
				default:""
			},
			placeColor:{ //文本框的占位符颜色
				type:String,
				default:"#ccc"
			},
			placeSize:{//文本框的占位符大小
				type:Number,
				default:16
			},
			color:{//选中文字颜色
				type:String,
				default:"#333"
			},
			size:{//字体大小
				type:Number,
				default:18
			},
			showIcon:{//是否显示向右图标，默认false
				type:Boolean,
				default:false
			},
			iconSize:{//图标大小
				type:Number,
				default:16
			},
			iocnPlaceColor:{ //placeholder图标颜色
				type:String,
				default:"#ccc"
			},
			iconColor:{//文字选中图标颜色
				type:String,
				default:"#333"
			},
			itemHeight:{//各列中，单个选项的高度
				type:Number,
				default:80
			},
			title:{//弹出框的标题
				type:String,
				default:""
			},
			visibleItemCount:{//弹出框显示的行数，默认5行
				type:Number,
				default:5
			},
			closeOnClickOverlay:{//点击遮罩关闭
				type:Boolean,
				default:false
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter);
		},
		methods: {
			handleToogle(){
				this.toogle = true;
			},
			eventConfirm(e) {
				switch(e.mode){
					case "datetime":
						this.timePick = uni.$u.timeFormat(e.value, 'yyyy-mm-dd hh:MM:ss')
					break;
					case "date":
						this.timePick = uni.$u.timeFormat(e.value, 'yyyy-mm-dd')
					break;
					case "year-month":
						this.timePick = uni.$u.timeFormat(e.value, 'yyyy-mm')
					break;
					case "time":
						this.timePick = e.value;
					break;
				}
				this.$emit("onConfirm",this.timePick)
				this.toogle = false;
				
			},
			eventCancel(){
				this.toogle = false;
				this.$emit("onCancel","")
			},
			 formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				if (type === 'hour') {
					return `${value}时`
				}
				if (type === 'minute') {
					return `${value}分`
				}
				return value
			},
			
		}
	}
</script>

<style>
	.box {
		display: flex;
		align-items: center;
	}
	.main{
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 0 10px;
		justify-content: space-between;
	}
</style>
```





