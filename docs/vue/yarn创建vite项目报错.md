### yarn创建vite项目报错

#### 报错方式

```
success Installed "@vitejs/create-app@2.5.2" with binaries:       
- create-app  
 - cva 文件名、目录名或卷
 文件名、目录名或卷标语法不正确。
error Command failed.
Exit code: 1
Command: E:\Program\nodejs\node_global\bin\create-app
Arguments: vue-tailwind
Directory: F:\code\tailwindcss
```

#### 错误原因

yarn的安装包默认是在c盘的而我yarn安装在D盘的所以就会报这样的错误！

```
yarn global dir
```

可查看到
“C:\Users\Administrator\AppData\Local\Yarn\Data\global”

#### 解决办法

1.将yarn的全局路径改到D盘就行了，在D盘创建yarn文件夹在文件下创建一个golbal和cache文件夹
2.执行下列命令

```
yarn config set global-folder "D:\yarn\global"
yarn config set cache-folder "D:\yarn\cache"
```

