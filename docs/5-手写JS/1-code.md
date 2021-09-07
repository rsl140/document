> 参考公众号'技术漫谈' 的《死磕 36 个 JS 手写题》

### 数据类型判断

- 利用对象的toString方法来进行判断

``` js
function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1)
}
```