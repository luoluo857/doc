# 如何在谷歌浏览器使用翻译？

## Windows
C:\Windows\System32\drivers\etc·目录下的hosts文件,使用记事本打开并在后面加上
```
142.250.107.90 translate..com
142.250.107.90 translate.googleapis.com
```


## MacBook:有点麻烦 
顶部导航栏的**前往**-**前往文件夹**-**输入/etc**-**hosts文件**,拖拽到桌面进行更改，更改后再拖回去（在里面不能修改，除非修改权限）

```
142.250.107.90 translate..com
142.250.107.90 translate.googleapis.com
```


## 不知道IP地址？

[https://github.com/Ponderfly/GoogleTranslateIpCheck](https://github.com/Ponderfly/GoogleTranslateIpCheck)
## 以下是网址内的内容

#### 扫描国内可用的谷歌翻译IP

#### 如果都不能使用可以删除 ip.txt 文件调用远程IP或进入扫描模式

#### 使用参数 -s 可以直接进入扫描模式 -y 自动写入Host文件 -6 进入IPv6模式(如果支持IPv6推荐优先使用)

##### Windows 需要使用管理员权限运行

##### Mac和Linux运行 需要在终端中导航到软件目录然后执行

```
chmod +x GoogleTranslateIpCheck
sudo ./GoogleTranslateIpCheck
```

#### 下载地址

##### Mac OS

##### https://github.com/Ponderfly/GoogleTranslateIpCheck/releases/download/1.6/GoogleTranslateIpCheck-mac-x64.zip

##### Window

##### https://github.com/Ponderfly/GoogleTranslateIpCheck/releases/download/1.6/GoogleTranslateIpCheck-win-x64.zip

##### Linux

##### https://github.com/Ponderfly/GoogleTranslateIpCheck/releases/download/1.6/GoogleTranslateIpCheck-linux-x64.zip

#### 常见问题

##### 1.如果所有IP都超时,请检查是否开了代理

##### 2.Mac 中使用: 打开终端 输入cd 把解压后的文件夹拖进终端，点击回车 复制粘贴代码，点击回车

```
chmod +x GoogleTranslateIpCheck
sudo ./GoogleTranslateIpCheck
```

##### 3.Mac 提示来自不明身份: 系统偏好设置－－>安全性与隐私--->选择允许
