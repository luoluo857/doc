# uniapp使用uview库

去**插件市场**下载uview,导入到项目中

在main.js配置

```js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
```

在App.vue配置

```
<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss"
</style>
```

在uni.scss配置

```
@import '@/uni_modules/uview-ui/theme.scss';
```

