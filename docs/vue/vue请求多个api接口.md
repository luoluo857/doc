# Vue请求多个api接口

```js
Promise.all([
				List(),
				page({count: 0})
			].map(e => e.catch(console.log(e)))).then(res => {
				const [result1,result2] = res;
			})
```

