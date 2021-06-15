### 什么是闭包
- MDN 对闭包的定义为：

> 闭包是指那些能够访问自由变量的函数

- 什么是自由变量

> 在函数中使用的，但既不是函数参数也不是函数的局部变量的变量

- 所以，闭包的组成

> 闭包 = 函数 + 函数能够访问的自由变量

### 栗子

``` javascript
var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function f() {
        return scope; // 上下文是从这里开始逐级往上查找的。即使foo是在全局中调用也是从这里开始向上查找 scope变量 （要和this的概念区分）
    }
    return f;
}

var foo = checkscope();
foo(); // local scope
```

> 在函数定义的位置，向上级查找。并不是在函数执行的地方向上级查找变量。（即，当函数写好的时候就已经决定了它的作用域了。个人理解）


参考
[JavaScript深入之闭包](https://github.com/mqyqingfeng/Blog/issues/9)