new 构造函数会构造出一个实例，并绑定上`this`。执行步骤分为

1. 新生成一个对象
2. 将对象链接到对象原型上，绑定this
3. 执行构造函数代码
4. 返回新对象

注意： 当在构造函数中返回一个对象时，内部创建出来的新对象就被我们返回的对象所覆盖，所以一般来说构建函数就别返回对象了（返回原始类型不影响）。

> 手写new
``` js
function myNew (obj, ...args) {
  // 基于obj原型创建一个新的对象
  const newObj = Object.create(obj.prototype)
  // 添加属性到newObj上，执行函数，并绑定this
  const res = obj.apply(newObj, args)
  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return typeof res === 'object' ? res : newObj
}
```