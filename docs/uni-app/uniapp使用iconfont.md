# uniapp使用iconfont

把下载的文件放到static中，(iconfont.css；iconfont.ttf)

iconfont.css配置

```js
@font-face {
  font-family: "iconfont";
  src: url('/static/iconfont.ttf?t=1677552875356') format('truetype');
}
```

App.vue配置

```
<style lang="scss">
	@import '@/common/common.scss';
</style>
```

