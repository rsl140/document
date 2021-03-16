# gitbook

## 起手
> 第一步当然是安装环境了。默认是在有安装node的环境下进行的

- 全局安装`gitbook-cli`

``` shell
npm install -g gitbook-cli
```

- 创建你的gitbook目录 如: `Desktop/gitbook` 进入到该目下执行

``` shell
cd Desktop/gitbook
gitbook init
```
- 此时就已经初始化好了一个gitbook目录了

```
- gitBook
 - README.md
 - SUMMARY.md

```

- 本地启动服务

``` shell
gitbook serve
```

- 在浏览器中输入 http://localhost:4000 即可访问服务

- gitbook 常用指令

``` bash
# 安装 GitBook：npm i gitbook-cli -g
# 初始化 GitBook 项目：gitbook init
# 安装 GitBook 依赖：gitbook install
# 开启 GitBook 服务：gitbook serve
# 打包 GitBook 项目：gitbook build
# GitBook 命令行查看：gitbook -help
# GitBook 版本查看：gitbook -V
```

## 插件配置

- 在根目录下新建一个`book.json`

```
- GitBook
 - README.md
 - SUMMARY.md
 - book.json
```

- 我的`book.json`配置

``` json
{
  "title": "xiaosi", // 网站标题
  "author": "xiaosi", // 网站作者
  "language": "zh-hans", // 网站使用语言
  "ignores": ["_book", "styles", "assets", "node_modules", "source"],
  "sortedBy": "-",
  "plugins": [ // 网站使用的插件
      "-sharing",
      "splitter",
      "expandable-chapters",
      "todo",
      "github",
      "github-buttons",
      "sharing-plus",
      "prism",
      "prism-themes",
      "intopic-toc",
      "-highlight",
      "chart",
      "tbfed-pagefooter",
      "anchors",
      "terminal",
      "copy-code-button",
      "theme-comscore",
      "hide-element",
      "summary"
  ],
  "pluginsConfig": { // 网站使用的插件的额外配置
      "github": {
          "url": "https://github.com/rsl140"
      },
      "hide-element": {
        "elements": [".gitbook-link"]
      },
      "terminal": {
        "copyButtons": true,
        "fade": false,
        "style": "flat"
      },
      "prism": {
        "css": [
            "prism-themes/themes/prism-base16-ateliersulphurpool.light.css"
          ],
          "lang": {
            "shell": "bash"
          }
      },
      "chart": {
        "type": "c3"
      },
      "tbfed-pagefooter": {
        "copyright":"Copyright &copy xiaosi (2021 - present)",
        "modify_label": "该文件修订时间：",
        "modify_format": "YYYY-MM-DD HH:mm:ss"
      },
      "github-buttons": {
          "buttons": [{
              "user": "rsl140",
              "repo": "document",
              "type": "star",
              "size": "small",
              "count": false
              }
          ]
      },
      "sharing": {
          "douban": false,
          "facebook": false,
          "google": false,
          "hatenaBookmark": false,
          "instapaper": false,
          "line": false,
          "linkedin": false,
          "messenger": false,
          "pocket": false,
          "qq": false,
          "qzone": false,
          "stumbleupon": false,
          "twitter": false,
          "viber": false,
          "vk": false,
          "weibo": false,
          "whatsapp": false,
          "all": [
              "google", "facebook", "weibo", "twitter",
              "qq", "qzone", "linkedin", "pocket"
          ]
      }
  }
}
```

- 执行`gitbook install`安装配置

## 部署到github page

- 在github上创建一个仓库并克隆到本地

- 提交到仓库
```
git add .
git commit -m "first commit"
git push -u origin master
```

- 切换分支gh-pages并提交到远程

```
git branch gh-pages
git checkout gh-pages
git push -u origin gh-pages
git checkout master
```

- 初始化npm 安装gulp

```
npm init
yarn add gulp gulp-gh-pages gulp-load-plugins --save-dev
```

- 新建`gulpfile.js`

``` javascript
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('publish', () => {
  console.log('Publish Gitbook (_book) to Github Pages');
  return gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
});
```

- 执行`gulp publish`

> 如果遇到gulpInst.start.apply(gulpInst, toRun)报错 执行`npm i -g gulp-cli`

> 这时在github仓库即可看到gh-pages中已经有代码了 然后在仓库的设置中开启github page开关 分支指向gh-pages分支即可

## 参考

- [gitbook](https://liangjunrong.github.io/other-library/Markdown-Websites/GitBook/)
- [插件列表](http://gitbook.zhangjikai.com/plugins.html)
- [githubpage部署](https://medium.com/@richdayandnight/simple-tutorial-on-hosting-your-gitbook-documentation-on-github-pages-bonus-with-gitbook-editor-f27f60d5d408)