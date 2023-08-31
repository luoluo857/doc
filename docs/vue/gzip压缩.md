# gzip压缩

### vue.config.js文件

```js
npm i compression-webpack-plugin --save-dev
```

```js
const { defineConfig } = require("@vue/cli-service");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = defineConfig({
  configureWebpack: (config) => {
    plugins: [
      new CompressionWebpackPlugin({
      test: /\.js$|\.html$|\.css/, // 压缩文件的后缀
      threshold: 1024, // 对超过 1k 的文件进行压缩
      deleteOriginalAssets: true, // 不需要保留压缩前文件
      }),
    ],
  },
});

```

