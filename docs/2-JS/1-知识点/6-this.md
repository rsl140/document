> `this` 的指向是调用时决定的。 `this` 具有运行期绑定的特性

- 什么是调用位置

  调用位置就是函数在代码中杯调用的位置，而不是声明的位置（这里要和作用域区分开）

  通过分析调用栈（到达当前执行位置所调用的所有函数）可以找到调用位置

  ``` js
    function baz () {
      console.log('baz')
      bar()
    }
    function bzr () {
      console.log('bar')
      foo()
    }
    function foo () {
      console.log('foo')
    }
    baz()
  ```

  上述列子的调用方式为 `baz()->bar()->foo()`

  - 对于`foo()`：调用位置是在bar()中
  - 对于`bar()`：调用位置是在baz()中
  - 对于`baz()`：调用位置是在全局作用域中

  即：调用位置应该是在当前正在执行的函数的前一个调用中

  - 全局上下文中 `this` 指代全局对象 `window`

  - 函数上下文

  在函数内部，`this`的值取决于函数被调用的方式

    - 直接调用

      `this`指向全局变量

        ``` js
          function foo () {
            return this
          }
          console.log(foo() === window) // true
        ```

    - calll、apply

      `this`指向绑定的对象上

        ``` js
          var person = {
            name: 'zhangsan',
            age: 20
          }
          function say (job) {
            console.log(this.name + ':' + this.age + ' ' + job)
          }

          say.call(person, 'FE')
          say.apply(person, ['FE'])
        ```

      > 如果传入一个原始值（字符串、布尔或数字类型）来当做this的绑定对象， 这个原始值会被转换成它的对象形式（new String()），这通常被称为“装箱”。

    - bind
      `this`将永久的被绑定到了bind的第一个参数

        ``` js
          var person = {
            name: "zhangsan",
            age: 25
          };
          function say () {
            console.log(this.name + ':' + this.age);
          }
          var f = say.bind(person);
          console.log(f());
        ```

    - 箭头函数
      所有的箭头函数都没有自己的`this`，都指向外层

      ``` js
        function Person (name) {
          this.name = name
          this.say = () => {
            var name = 'zhangsan'
            return this.name
          }
        }
        var person = new Person('lisi')
        console.log(person.say()) // lisi
      ```

    - 作为对象的一个方法

      `this` 指向调用函数的对象

      ``` js
        var person = {
          name: "zhangsan",
          getName: function(){
            return this.name;
          }
        }
        console.log(person.getName()); // zhangsan
      ```

      这里有一个需要注意的地方。。。

      ``` js
        var name = "lisi";
        var person = {
          name: "zhangsan",
          getName: function(){
            return this.name;
          }
        }
        var getName = person.getName;
        console.log(getName()); // lisi
      ```

    - 作为一个构造函数
      `this`被绑定到正在构造的新对象

      通过构造函数创建一个对象执行的步骤分为：
        1. 创建新对象
        2. 将this指向这个对象
        3. 给对象赋值（属性、方法）
        4. 返回this

        ``` js
          function Person (name){
            this.name = name;
            this.age = 25;
            this.say = function () {
              console.log(this.name + ':' + this.age);
            }
          }
          var person = new Person("zhangsan");
          console.log(person.name); // zhangsan
          person.say(); // zhangsan:25
        ```

      - 作为一个DOM事件处理函数

        `this`指向触发事件的元素，也就是开始事件处理程序所绑定到的DOM节点

        ``` js
          var ele = document.getElementById("id");
          ele.addEventListener("click", function (e) {
            console.log(this);
            console.log(this === e.target); // true
          })
        ```

    - HTML标签内联事件处理函数

      `this`指向所在的DOM元素

      ``` html
        <button onclick="console.log(this);">Click Me</button>
      ```

    > 如何判断`this`的绑定对象

      1. 由`new`调用：绑定到新创建的对象
      2. 又`call`或`apply`或`bind`调用：绑定到指定对象
      3. 由上下文对象调用：绑定到上下文对象
      4. 默认：全局对象
      5. 箭头函数继承外层函数调用的`this`绑定值
      6. 但是在非严格模式中，当this指向undefined时，它会被自动指向全局对象