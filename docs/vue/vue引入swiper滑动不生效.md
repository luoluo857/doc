# vue引入swiper滑动不生效（调接口，加载数据的时候）

是初始化swiper的问题。直接在mounted生命周期里初始化的swiper，swiper的初始化在异步加载的数据渲染之前，那就把初始化的操作延后试一下

方法一：在第一个请求接口成功后，调用下面的代码

```
this.$nextTick(()=>{
    new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    });
})
```

方法二：在updated()生命周期里用

```
updated(){
    new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0
    });
},
```

方法三：在swiper加入observer和observeParent

```
mounted(){
    new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 0,
    observer:true,
    observeParent:true
    });
},
```

