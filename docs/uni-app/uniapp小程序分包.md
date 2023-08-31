# uniapp小程序分包

小程序不能大于2兆，大于2兆就要采用分包优化，微信小程序每个分包的大小是2M，总体积一共不能超过20M

注意：分包的文件不能是底部导航栏

pages.json文件

```js
"pages":[{

}],
//分包配置路径
"subPackages": [{
	"root": "pages/user",
	"pages": [{
		"path": "user",
		"style": {
			"navigationBarTitleText": "",
			"enablePullDownRefresh": false,
			"navigationStyle": "custom"
		}
	}]
}]
```

manifest.json>源码视图>"mp-weixin"

```js
/* 小程序特有相关 */
"mp-weixin" : {
   "optimization" : {
    	"subPackages" : true
   }
},
```

