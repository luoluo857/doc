## Git的操作

![git](https://vitepress.oss-cn-guangzhou.aliyuncs.com/git.png)

#### 查看系统的配置文件

```
git config --system --list
```

#### 查看当前用户的全局配置

```
git config --global --list
```

#### 查看git用户名和邮箱配置

```
git config user.name
git config user.email
```



#### 全局配置用户名和邮箱

```
git config --global user.name "自己起名字"
git config --global user.email 123456789@qq.com
```

#### 删除全局配置用户名和邮箱

```
git config --global unset user.name "自己起名字"
git config --global unset user.email 123456789@qq.com
```



#### 查看用户名和邮箱是否配置成功

```
git config -l
```

##### 把当前文件夹作为git仓库

```
#初始化仓库  就会生成一个.git的文件夹
git init
```

#### 克隆远程仓库

```
git clone 远程仓库地址
```

#### 忽略文件

> 在根目录下新建`.gitignore`文件,**如果不生效就使用`git rm -rb--cached .`删除全部缓存后然后再次提交一次就行了**

```
*.txt  #忽略所有.txt结尾的文件
/vendor #忽略文件夹，包括里面的文件
/index.html #忽略文件
doc/index.html #忽略doc目录下的index.html文件
```

#### 抓取

> **抓取只会拉取到本地，却不会合并到项目中；**
>
> **拉取是直接拉取并且合并到项目中的**

```
#抓取
git fetch
git merge origin/master   #合并远程master分支到本地中

#拉取
git pull
```

#### 拉取

```
git pull
```

#### 提交

```
#查看文件的状态
git status

#将所有文件提交到暂存区
git add .

git commit -m "提交的信息"

#第一次用git push 是不行的，要进行绑定master才行
git push --set-upstream origin master

git push
```

#### 常用分支命令

> **注意：切换分支前，一定要把提交，否则就会丢失**

```
#列出本地所有分支
git branch

#列出所有远程分支
git branch -r

#新建一个分支，但依然停留在当前分支
git branch 分支名

#切换分支（常用）
git checkout 分支名

#切换到上一个分支（常用）
git checkout -

#新建一个分支，并切换到该分支（常用）
git checkout -b 分支名

#合并分支；先要跳转到要合并其他分支的分支上。例如：我要在master上合并dev分支（常用）
git merge 被合并的分支（dev）

#显示当前分支与其他分支的差异
git diff --name-status 其他分支名

#删除分支
git branch -d 分支名

#删除远程分支
git push origin --delete 分支名
git branch -dr 分支名
```

#### 建好一个空仓库，需要把本地的文件提交一下

```
git init

git add .

git commit -m "提交信息"

git remote add origin 地址

#如果这是master分支
# -u是为了记录一下用户名和密码，下次上传就不需要再写了
git push -u origin master

#如果不是，是其他分支的话，例如dev分支
	#创建并切换到该dev分支
git checkout -b dev

git push origin dev
```

## 分支合并的发布流程

```
#将所有新增、修改或删除的文件添加到暂存区
git add .

#将暂存区的文件发版
git commit -m "提交信息"

#查看文件的状态，就是看看是否还有文件没有发布上去
git status

#切换到要合并的(master)分支上
git checkout master

#在(master)分支上拉取最新代码，避免冲突
git pull

#在(master)分支上合并(dev)分支的代码
git merge dev

#上传(master)分支代码
git push
```

### 版本回退

```
#查看提交的历史记录
git log

#找ID代码号
git reflog

#回退到上一个提交版本
git reset --hard HEAD^

#回退到上上一个提交版本
git reset --hard HEAD^^

#回退到指定代码号的提交版本
git reset --hard '指定的ID代码号'
```

### 撤销修改

> 有时候文件冲突了，只有一两个冲突而已，需要查看状态 <u>git status</u>

```
git status

#撤销test.txt文件的修改
git checkout -- test.txt

#撤销当前目录下所有文件的修改
git checkout -- .
```

## 冲突了

> 如果我们两个人开发了，在同一个文件且同一行都改了

```
提交冲突了要先git pull拉取合并，找到冲突文件后修改正确后，再git push

正常情况下提交，在git push 前先执行git pull 在本地把冲突解决后再git push 上去
```

**<u>以下是常见的4种场景：</u>**

![git流程图](https://vitepress.oss-cn-guangzhou.aliyuncs.com/git%E6%B5%81%E7%A8%8B%E5%9B%BE.png)

![git1](https://vitepress.oss-cn-guangzhou.aliyuncs.com/git1.png)

![git2](https://vitepress.oss-cn-guangzhou.aliyuncs.com/git2.png)

![git3](https://vitepress.oss-cn-guangzhou.aliyuncs.com/git3.png)

![git4](https://vitepress.oss-cn-guangzhou.aliyuncs.com/git4.png)
