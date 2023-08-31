```
//这是自定义每个页面seo的
---
head:
  - - meta
    -  name: title
       content: 自定义标题
  - - meta
    - name: description
      content: 自定义描述
  - - meta
    - name: keywords
      content: 自定义关键字
---
```

# 大数据可视化

https://gitee.com/iGaoWei/big-data-view

https://github.com/zhangti0708/bigdata-examples

https://github.com/ZTStory/vue-datav

https://github.com/bym110/vue-echarts

https://gitee.com/MTrun/big-screen-vue-datav

https://github.com/biubiubiu01/vue3-bigData

# 全球各类API

https://github.com/public-apis/public-apis

# 纯原生50个案例

https://github.com/dinomoon/50projects50days

# vue中后台系统（包括视频）

https://github.com/xiaoxian521/vue-pure-admin

# 前端全栈面试题

https://github.com/rohan-paul/Awesome-JavaScript-Interviews

# 前端面试题汇总（完整）

https://www.yuque.com/cuggz/interview/hswu8g

# Markdown编辑器

https://imzbf.github.io/md-editor-v3/index

https://imzbf.github.io/md-editor-rt/

# 临时邮箱

https://www.linshi-email.com

http://www.yopmail.com

https://10minutemail.net

https://www.guerrillamail.com

https://temp-mail.org

https://www.crazymailing.com




# 默认标题
::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip 绿色
This is a tip
:::

::: info 灰色
This is an info box
:::

::: warning 黄色
This is a warning
:::

::: danger 红色
This is a dangerous warning
:::

# 代码高亮
```js{3-5}
export default {
  name: 'MyComponent',
  props:[
    type:Number
  ]
  // ...
}
```



 

作者：俊劫  
https://juejin.cn/post/6942988170208215076

一年半前端人的求职路
----------

> “
> 
> 刚刚`跳槽`????????，这里分享一波个人学习资源。
> 
> 想看`跳槽之路`的可以点点：一年半前端人的求职路。`先赞再看`，养成习惯，感谢各位大佬????

一、简历
----

> “
> 
> 一定要有`亮点`！！！名校、大厂、工作经验、个人博客、开源项目等等。
> 
> 如果说都没有，来，`现成的`，把我的博客fork一份拿去自己用，搭建教程博客也有（完全免费），求个`start`。俊劫的博客 GitHub。
> 
> 下面是个人认为比较重要的点，有不同见解的，评论区`battle`一下????

### 1、总体

不要花里胡哨的，可以用`重点颜色`标记自己`擅长`的技能，简历模板一定要`简洁`，字体大小，行距要看的舒服，不要一大段一大推文字的来，用`1234`来描述自己负责的事情，产出的结果，社招简历不要低于`两页`。

投递简历最好找`靠谱的内推`，能根据你的经验，给你推业务较为匹配的部门，同时能`跟进进度`。不然就找`猎头`给你推，最后boss联系`hr`也行。（大部分公司有简历档案，一般`半年起步`不能再投，除非有人捞你）

### 2、项目经验

社招`最重要`的部分，类似的项目经验可以浓缩下，根据项目`熟悉度`，排序写。没啥写的就编一些你知道的`解决方案`，前提是自己要搞清楚，很多面试官会逮着你的项目经验`细问`。

项目经验中，要加入一些`个人思考`，是不是这个项目不让你做，`结果`也一样？有没有考虑过每个需求的`合理性`，扩展性？有定制化需求如何处理？你的`价值`在哪里？你做过哪些`方案调研`，`架构设计`，`产品设计`?遇到过什么`难题`?技术方案怎么`落地`？`新技术`如何推进？

### 3、工作经历

工作时间可以自己算一下，标注一下`几年几个月`。自己在公司担任的职位，负责的`事情`，做出的`产出`。获得过什么什么`奖项`都可以写写。

### 4、基本信息

姓名、年龄、电话、居住地、`几年经验`、`个人博客`、`GitHub链接`等等。照片的话，对自己有自信的，美一美搞一个。学校好的，可以重新起一栏写，不好的就一笔带过吧。

二、面试高频问题
--------

> “
> 
> 2月初面试遇到的一些问题，`不全面`，但是比较`真实`。

### 1、JavaScript

*   讲讲`js数据类型`？基本和引用的区别？`symbol`和`bigint`讲一讲应用场景？
    
*   判断数据类型的方法？`instanceof`原理?判断`空对象`？`typof null`？`typeof NaN`？
    
*   var/let/const 区别？`暂时性死区`？`块级作用域`？const a = {}; a.x = 1 能不能修改？
    
*   说说你对`函数式编程`的理解？`函数柯里化`的理解？平时的使用场景？
    
*   `防抖、节流`的含义，使用场景？`手写一下`？
    
*   call、apply、bind区别？`bind实现`？bind之后还能修改this指向吗？为什么？
    
*   闭包概念，最主要的还是问`闭包的场景`？
    
*   用`es5实现es6`类的继承？各种继承问的挺多的
    
*   深拷贝与浅拷贝？常用方法？手写一个`深拷贝函数`？
    
*   说说你知道的JavaScript`设计模式`？观察者和发布订阅的区别？`手写`一个发布订阅？我真的写了
    
*   说说对你对JavaScript`异步编程`的理解？
    
*   `ES Module`与 `CommonJS` 模块的差异？两者互相加载的方式？一般会扯到AMD
    
*   `Promise`.all、race、allSettled 概念、手写？很多手写题都会用到，比如用promise实现请求`并发个数`限制？
    

### 2、Css

*   水平垂直`居中`？兼容性？`不知道宽高`情况下？
    
*   BFC概念？作用？`常用场景`？
    
*   Flex？注意`flex：1`的含义，一般会给你个场景题
    
*   `盒模型`概念，如何`切换`盒模型？
    
*   实现`1px`边框？1px线条？
    
*   `伪类`和`伪元素`区别？使用场景？
    

### 3、Http && 浏览器

*   浏览器`缓存`？http缓存？主要要`讲一讲`强缓存、协商缓存、preload、prefetch、Service Worker等，`304`的含义？协商缓存`e-tag`是怎么生成的？`Last-Modified`是基于什么生成的？两者对比一下？`优先级`哪个高？
    
*   什么是`跨域`？什么情况下会跨域？浏览器根据什么`字段`判断是否允许跨域？跨域的`解决方案`有哪些？`options`请求了解过吗？说说CORS中的`简单请求`和`复杂请求`？`form表单提交`会跨域吗？
    
*   讲一讲浏览器事件循环`Event Loop`？node `事件循环`描述一下？
    
*   `http2`有哪些新特性？`http2`还有哪些缺陷？`http3`的一些了解？
    
*   `从输入 URL 到页面加载完成的过程`，一般要很详细的描述：包括`DNS查询`，`缓存`查询，`3次握手`，`4次挥手`，浏览器`渲染进`程等，面试官会从里面再挑几个问题深入问，比如为什么是3次握手4次挥手？渲染进程中的GUI渲染线程、JS引擎线程、事件触发线程等等？可能会问到进程线程的区别？浏览器为什么是多进程？js为什么是单线程？怎么支持多线程？等等
    
*   https`加密原理`？主要是讲`对称加密`和`非对此加密`结合使用的一个过程。什么是`中间人攻击`？和http区别？
    

### 4、Vue

*   生命周期？那个生命周期可以获取到`真实DOM`？`修改data`里面的数据，会触发什么生命周期？
    
*   组件data为什么是一个`函数`？
    
*   vue 组件通信？一般说了`vuex`，就会问vuex用法？`action`和`mutations`区别？实现原理等？
    
*   vue `导航守卫`，分全局和组件的，一般用于权限控制，这个就可能扯到项目中的一些`鉴权问题`。
    
*   `$nextTick` 作用？实现原理？微任务向宏任务的`降级处理`，经常被问到说出几种宏任务，微任务。
    
*   `vue响应式原理`？基本都会问
    
*   vue `scoped`属性作用？实现原理？
    
*   vue `router`有几种模式？实现方式？
    
*   `key`的作用？没有key的情况，vue会怎么做？会引出diff的问题
    
*   vue `diff过程`，和react diff区别？
    
*   vue 2.x `defineProperty缺陷`？业务代码里面怎么处理？`$set`原理？vue是怎么`重写数组方法`的？考察你是不是真的看过源码
    
*   vue 3.0 `proxy`优缺点？怎么处理vue3不支持IE？
    
*   `computed` 和 `watch` 的区别和运用的场景？除了基本的，看你能不能说出`三种watcher`的区别
    

> “
> 
> vue原理相关的可以参考我的另外一篇文章：vue2.x高阶问题，你能答多少

### 5、React

*   `生命周期`详细描述一下？官方为什么`改变`？
    
*   说说你对`虚拟DOM`的理解？直接全量更新和diff哪个快（这个问题要`分情况`）？
    
*   什么是`HOC`？React里面用过哪些？可能让你实现一个`add(1)(2)(3)`的函数
    
*   `Fiber`干了什么事情？`requestIdleCallback`了解多少？
    
*   `react`性能优化？
    
*   `hooks`出现的意义？`类组件`和`函数组件`之间的区别是什么？
    
*   为什么`不要在`循环、条件语句或者嵌套函数中`调用hooks`？记住官网的一句话，`Not Magic, just Arrays`
    
*   setState `同步`还是`异步`？比较常问，问的可能也比较深入
    
*   如何避免组件的`重新渲染`？memo/useMemo、PureComponent？useMemo和useCallback区别？
    

> “
> 
> 拉钩之前有个一块钱的课【深入浅出搞定 React】修言大佬的课，有兴趣的可以去看看（也可以借号????）

### 6、其他

简历写的了解，问的很少。即使现在公司用node做`中间层`，也基本没问node的问题，所以这块我就简单写写

*   常用的一些模块，`fs/path/http`等等
    
*   `EventEmitter` 概念，使用场景，错误捕获
    
*   `Stream` 概念？使用场景？常见的Stream？
    

`webpack`基本也是必问，得系统学习一下

*   webpack `构建流程`？`打包原理`？
    
*   项目中做的一些`优化`？
    
*   `loader`和`plugin`的区别？有没有写过？常用哪些loader和plugin
    
*   webpack`热跟新`原理？
    
*   `tree-shaking`？对于 CommonJS，tree shaking怎么办？
    
*   webpack loader的`执行顺序`？从左到右？从上到下？
    

其他

*   项目做过的一些性能优化，`基本必问`
    
*   `长列表渲染`怎么优化？
    
*   各种`懒加载`的实现原理？路由？图片？
    
*   Typescript 中的 `interface` 和 `type` 到底有什么区别
    
*   等等，很多`低频率`的想不起了
    

> “
> 
> 其他的一些东西，主要还是看你简历上`写了什么`，或者你的`回答`有什么面试官感兴趣的词。尽量`突出`自己的`优势`，发挥好就行，结果对自己的检验，不是对自己的否定，加油????????

针对所有接口的处理（Get）
--------------

我们希望以 `const [e, r] = await api.getUserInfo(id)` 的方式调用，代表着我们需要保证返回值稳定的返回 `[err, result]` ，所以我们需要在请求无论成功失败时，都以 `resolve` 方式调用。

同时，我们希望我们可以处理返回值，因此在这里封装了 `clearFn` 的回调函数。

```
type Fn = (data: FcResponse<any>) => unknown

interface IAnyObj {
  [index: string]: unknown
}

interface FcResponse<T> {
  errno: string
  errmsg: string
  data: T
}

const get = <T,>(url: string, params: IAnyObj = {}, clearFn?: Fn): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        let res: FcResponse<T>
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>
        } else {
          res = result.data as FcResponse<T>
        }
        resolve([null, res as FcResponse<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })
```

请求拦截
----

请求拦截中，我们需要两块内容，一是 **请求的调整** ，二是 **配置用户标识**

```
const handleRequestHeader = (config) => {
    config['xxxx'] = 'xxx'
    return config
}

const handleAuth = (config) => {
    config.header['token'] = localStorage.getItem('token') || token || ''
    return config
}

axios.interceptors.request.use((config) => {
    config = handleChangeRequestHeader(config)
    config = handleConfigureAuth(config)
    return config
})
```

响应拦截
----

响应错误由三类错误组成：

*   网络错误处理
    
*   授权错误处理
    
*   普通错误处理
    

因此，要优雅的处理响应拦截，我们必须先将三类错误函数写好，以便于我们增强代码扩展性及后期维护。

### 错误处理函数

```
const handleNetworkError = (errStatus) => {
    let errMessage = '未知错误'
    if (errStatus) {
        switch (errStatus) {
            case 400:
                errMessage = '错误的请求'
                break
            case 401:
                errMessage = '未授权，请重新登录'
                break
            case 403:
                errMessage = '拒绝访问'
                break
            case 404:
                errMessage = '请求错误,未找到该资源'
                break
            case 405:
                errMessage = '请求方法未允许'
                break
            case 408:
                errMessage = '请求超时'
                break
            case 500:
                errMessage = '服务器端出错'
                break
            case 501:
                errMessage = '网络未实现'
                break
            case 502:
                errMessage = '网络错误'
                break
            case 503:
                errMessage = '服务不可用'
                break
            case 504:
                errMessage = '网络超时'
                break
            case 505:
                errMessage = 'http版本不支持该请求'
                break
            default:
                errMessage = `其他连接错误 --${errStatus}`
        }
    } else {
        errMessage = `无法连接到服务器！`
    }

    message.error(errMessage)
}

const handleAuthError = (errno) => {
 const authErrMap: any = {
   '10031': '登录失效，需要重新登录', // token 失效
   '10032': '您太久没登录，请重新登录~', // token 过期
   '10033': '账户未绑定角色，请联系管理员绑定角色',
   '10034': '该用户未注册，请联系管理员注册用户',
   '10035': 'code 无法获取对应第三方平台用户',
   '10036': '该账户未关联员工，请联系管理员做关联',
   '10037': '账号已无效',
   '10038': '账号未找到',
 }
 
 if (authErrMap.hasOwnProperty(errno)) {
  message.error(authErrMap[errno])
  // 授权错误，登出账户
  logout()
  return false
 }

 return true
}

const handleGeneralError = (errno, errmsg) => {
 if (err.errno !== '0') {
  meessage.error(err.errmsg)
  return false
 }

 return true
}
```

### 适配

当我们将所有的错误类型处理函数写完，在 `axios` 的拦截器中进行调用即可。

```
axios.interceptors.response.use(
    (response) => {
        if (response.status !== 200) return Promise.reject(response.data)

        handleAuthError(response.data.errno)
        handleGeneralError(response.data.errno, response.data.errmsg)

        return response
    },
    (err) => {
        handleNetworkError(err.response.status)
        Promise.reject(err.response)
    }
)
```

针对单独接口的处理
---------

基于上面的几类通用处理，我们这个请求的封装基本已经可用了。

但是我们还有一些额外的操作无处存放（参数处理、返回值处理），且我们并不想将他们耦合在页面中每次调用进行处理，那么我们显然需要一个位置来处理这些内容。

```
import { Get } from "../server"

interface FcResponse<T> {
      errno: string
      errmsg: string
      data: T
}

type ApiResponse<T> = Promise<[any, FcResponse<T> | undefined]>

function getUserInfo<T extends { id: string; name: string; }>(id): ApiResponse<T> {
      return Get<T>('/user/info', { userid: id })
}
```

封包处理
----

### 接口分类封包

用户数据： `api/path/user.ts`

```
import { Get } from "../server"

export function getUserInfo(id) { ... }

export function getUserName(id) { ... }

export const userApi = {
 getUserInfo,
 getUserName
}
```

订单数据： `api/path/shoporder.ts`

```
import { Get } from "../server"

function getShoporderDetail() { ... }

function getShoporderList() { ... }

export const shoporderApi = {
 getShoporderDetail,
 getShoporderList
}
```

### 调用点统一

`api/index.ts`

```
import { userApi } from "./path/user"
import { shoporderApi } from "./path/shoporder"

export const api = {
 ...userApi,
 ...shoporderApi
}
```

### 针对所有接口的处理（Post、Put、Del）

```
export const post = <T,>(url: string, data: IAnyObj, params: IAnyObj = {}): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data as FcResponse<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })
}

// Put / Del 同理
```

完整代码
----

![b3979c55f298e3a5d097ccc8657a5699.png](https://img-blog.csdnimg.cn/img_convert/b3979c55f298e3a5d097ccc8657a5699.png)业务处理函数： `src/api/tool.ts`

```
const handleRequestHeader = (config) => {
 config['xxxx'] = 'xxx'
 
 return config
}

const handleAuth = (config) => {
 config.header['token'] = localStorage.getItem('token') || token || ''
 return config
}
const handleNetworkError = (errStatus) => {
    let errMessage = '未知错误'
    if (errStatus) {
        switch (errStatus) {
            case 400:
                errMessage = '错误的请求'
                break
            case 401:
                errMessage = '未授权，请重新登录'
                break
            case 403:
                errMessage = '拒绝访问'
                break
            case 404:
                errMessage = '请求错误,未找到该资源'
                break
            case 405:
                errMessage = '请求方法未允许'
                break
            case 408:
                errMessage = '请求超时'
                break
            case 500:
                errMessage = '服务器端出错'
                break
            case 501:
                errMessage = '网络未实现'
                break
            case 502:
                errMessage = '网络错误'
                break
            case 503:
                errMessage = '服务不可用'
                break
            case 504:
                errMessage = '网络超时'
                break
            case 505:
                errMessage = 'http版本不支持该请求'
                break
            default:
                errMessage = `其他连接错误 --${errStatus}`
        }
    } else {
        errMessage = `无法连接到服务器！`
    }

    message.error(errMessage)
}

const handleAuthError = (errno) => {
 const authErrMap: any = {
   '10031': '登录失效，需要重新登录', // token 失效
   '10032': '您太久没登录，请重新登录~', // token 过期
   '10033': '账户未绑定角色，请联系管理员绑定角色',
   '10034': '该用户未注册，请联系管理员注册用户',
   '10035': 'code 无法获取对应第三方平台用户',
   '10036': '该账户未关联员工，请联系管理员做关联',
   '10037': '账号已无效',
   '10038': '账号未找到',
 }
 
 if (authErrMap.hasOwnProperty(errno)) {
  message.error(authErrMap[errno])
  // 授权错误，登出账户
  logout()
  return false
 }

 return true
}

const handleGeneralError = (errno, errmsg) => {
 if (err.errno !== '0') {
  meessage.error(err.errmsg)
  return false
 }

 return true
}
```

通用操作封装： `src/api/server.ts`

```
import axios from 'axios'
import { message } from 'antd'

import {
 handleChangeRequestHeader,
 handleConfigureAuth,
 handleAuthError,
 handleGeneralError,
 handleNetworkError
} from './tools'

type Fn = (data: FcResponse<any>) => unknown

interface IAnyObj {
    [index: string]: unknown
}

interface FcResponse<T> {
    errno: string
    errmsg: string
    data: T
}

axios.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config)
 config = handleConfigureAuth(config)
 return config
})

axios.interceptors.response.use(
    (response) => {
        if (response.status !== 200) return Promise.reject(response.data)
        handleAuthError(response.data.errno)
        handleGeneralError(response.data.errno, response.data.errmsg)
        return response
    },
    (err) => {
        handleNetworkError(err.response.status)
        Promise.reject(err.response)
    }
)

export const Get = <T,>(url: string, params: IAnyObj = {}, clearFn?: Fn): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        let res: FcResponse<T>
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>
        } else {
          res = result.data as FcResponse<T>
        }
        resolve([null, res as FcResponse<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })

export const Post = <T,>(url: string, data: IAnyObj, params: IAnyObj = {}): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data as FcResponse<T>])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })
}
```

统一调用点： `src/api/index.ts`

```
import { userApi } from "./path/user"
import { shoporderApi } from "./path/shoporder"

export const api = {
 ...userApi,
 ...shoporderApi
}
```

接口： `src/api/path/user.ts` | `src/api/path/shoporder.ts`

```
import { Get } from "../server"

export function getUserInfo(id) { ... }

export function getUserName(id) { ... }

export const userApi = {
 getUserInfo,
 getUserName
}
```
```
import { Get } from "../server"

function getShoporderDetail() { ... }

function getShoporderList() { ... }

export const shoporderApi = {
 getShoporderDetail,
 getShoporderList
}
```

