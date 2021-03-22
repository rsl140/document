# electron-builder 打包踩过的坑

> 2020年的时候写了个个欧洲卡车模拟2的存档修改器 使用的是`vue-electron`编写的，最近更新了新功能打算用mac打包win64系统的 踩了点坑，主要是下载不了打包文件。记录一下

### 打指定平台的包

> 不指定平台的话 默认是以当前系统环境打包对应平台的安装包

```
格式：electron-builder --platform --arch
platform是配置打包成什么平台的安装文件:
win系统： win
mac系统：darwin
Linux系统：linux
arch是指定系统是什么架构的，常见的例如32位和64位操作系统：
ia32，32位操作系统，也可以在64位操作系统中安装
x64， 64位操作系统，使用本架构打包无法再32位操作系统中安装

例：打包win 64位系统的
electron-builder --win --x64
```

### 打包的时候依赖包下载不下来

> 由于打包的时候electron-builder 会去缓存中查找是否有electron包，没有的话会去github上拉取，这里可以手动去下载放到缓存目录

[electron国内镜像下载地址](https://npm.taobao.org/mirrors/electron)

```
Linux: $XDG_CACHE_HOME or ~/.cache/electron/
MacOS: ~/Library/Caches/electron/
Windows: $LOCALAPPDATA/electron/Cache or ~/AppData/Local/electron/Cache/
```

- 需要注意的
electron文件下记得要下载`SHASUMS256.txt`文件 我是2.0.18版本的 下载后是这样的
![20210321152101](https://cdn.jsdelivr.net/gh/rsl140/imgCdn@main/imgs/20210321152101.png)


- winCodeSign，nsis-resources，app-builder下载也是与`electron`同理，不过存放路径和electron 有点区别

```
Linux: $XDG_CACHE_HOME or ~/.cache/electron-builder/
MacOS: ~/Library/Caches/electron-builder/
Windows: $LOCALAPPDATA/electron-builder/Cache or ~/AppData/Local/electron-builder/Cache/
```
![20210321152724](https://cdn.jsdelivr.net/gh/rsl140/imgCdn@main/imgs/20210321152724.png)

- 这里需要注意的一点是，命令行会报错提示你文件下载失败 会有一个github链接说下载失败，你只需要把对应的地址复制下来 手动下载即可，将下载的文件放在对应的文件夹名字下，并解压即可

- 最终目录结构参考
```
.
+-- nsis
|   +-- nsis-3.0.3.2
|      +-- nsis-3.0.3.2.7z # 解压该压缩包到当前目录
|   +-- nsis-resources-3.3.0
|      +-- nsis-resources-3.3.0.7z # 解压该压缩包到当前目录
+-- winCodeSign
|   +-- winCodeSign-2.4.0
|      +-- winCodeSign-2.4.0.7z # 解压该压缩包到当前目录
+-- wine
|   +-- wine-2.0.3-mac-10.13
|      +-- wine-2.0.3-mac-10.13.7z # 解压该压缩包到当前目录
```

![20210321152835](https://cdn.jsdelivr.net/gh/rsl140/imgCdn@main/imgs/20210321152835.png)