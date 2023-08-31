### vue2和vue3静态引入图片

##### vue2

```js
const imgSrc = require("../assets/images/user.png");
```

##### vue3

```js
const getImgSrc = ()=>{
	return new URL("../assets/images/user.png",import.meta.url).href;
}
```

