### HTML技巧

##### 指定要上传的文件类型

可以使用`accept`属性在`input`标签中指定允许用户上传的文件类型。

```html
<input type="file" accept=".jpeg,.png">
```

##### 为视频创建海报（缩略图）

使用`poster`属性，我们可以在视频加载时，或者在用户点击播放按钮之前，显示指定的缩略图。

如果不指定图片，则默认使用视频的第一帧作为缩略图。

```html
<video poster="picture.png"></video>
```

##### 点击链接自动下载

单击目标资源的链接时下载特定资源，那就添加`download`属性。

```html
<a href="image.png" download>
```

