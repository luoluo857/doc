## 常用命令

```sh
# 全局安装yarn
npm install -g yarn

# yarn的命令列表
yarn help

# 初始化新项目
yarn init

# 安装依赖包
yarn
# 或者
yarn install

# 全局安装软件
yarn global add [package]
```

## 版本

```sh
# 查看版本
yarn -v

# 更新到最新版本
yarn set version latest
```

## 镜像

```sh
# 查看当前使用的镜像
yarn config get registry

# 设置为淘宝镜像
yarn config set registry https://registry.npm.taobao.org/
```

## 开发or生产环境

```sh
# 开发环境
yarn add [package]@[version] –dev
# 或者
yarn -D add [package]

# 生产环境
yarn add [package]
```

## 更新软件

```sh
# 更新软件的所有包
yarn upgrade

# 更新指定的包
yarn upgrade [package]@[version]

# 更新yarn的版本
yarn set version latest
```

## 卸载

```sh
# 删除所有包
yarn remove  -g [package]

# 删除某一个包
yarn remove  [package]
```

## 缓存

```sh
# 全局缓存的包
yarn cache list 

# 全局缓存的位置
yarn cache dir

# 清楚缓存
yarn cache clean
```

