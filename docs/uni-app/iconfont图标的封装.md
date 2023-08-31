## iconfont图标的封装

> 可根据项目自行到iconfont下载对应的图标，此组件也准备好一些图标

#### 使用方法：

```js
<template>
	<view>
		<ml-icon type="icon-diamond" color="blue" size="65"></ml-icon>
	</view>
</template>

<script>
	import mlIcon from "@/components/ml-icon.vue"
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

