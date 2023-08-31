# iconfont封装ml-icon

组件名：`ml-icon`

在同级目录下iconfont.css也要引入（我这里是放在了同级目录下），当然放在静态目录文件夹也行

<u>*我这里的单位用rpx，这样屏幕尺寸变大图标就会跟着变大了*</u>

#### 将components/ml-icon/iconfont.css文件替换就行

##### 注意：iconfont.css文件'//at.alicdn.com/t/c/font_4171660_09z4v3a94wjr.ttf?t=1689649164103',这个要换(建议用本地)

```js
@font-face {
  font-family: "iconfont";
  src: url('//at.alicdn.com/t/c/font_4171660_09z4v3a94wjr.ttf?t=1689649164103') format('truetype');
  //src: url('/static/iconfont.ttf?t=1689649164103') //一般来说用本地会更好
}
```

### 使用：

```js
<template>
	<view>
		<ml-icon type="icon-jian-yuankuang" color="blue" :size="65"></ml-icon>
	</view>
</template>
<script>
	import mlIcon from "@/components/ml-icon/ml-icon.vue"
	export default {
		data() {
			return {}
		},
		components:{
			mlIcon
		},
		methods: {
			
		}
	}
</script>
```

#### 参数介绍：

| 参数  | 注释                          |
| ----- | ----------------------------- |
| type  | 图标名(默认已经有iconfont)    |
| color | 图标颜色(默认颜色#999)        |
| size  | 图标大小(这里使用rpx，默认40) |

#### 事件：

| 事件   | 注释             |
| ------ | ---------------- |
| onIcon | @onIcon="自定义" |

### 组件代码：

```js
<template>
	<text class="iconfont" :class="type" :style="{color: color,fontSize: size+'rpx'}" @click.stop="icon"></text>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			type:{//图标
				type:String,
				default:""
			},
			color:{//图标颜色
				type:String,
				default:"#999"
			},
			size:{//图标大小
				type:Number,
				default:40
			}
		},
		methods:{
			icon(e){
				this.$emit("onIcon",e)
			}
		}
	}
</script>

<style>
//根据文件路径变更
@import url('./iconfont.css');
</style>
```

