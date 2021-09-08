> 参考公众号'技术漫谈' 的《死磕 36 个 JS 手写题》

### 数据类型判断

- 利用对象的toString方法来进行判断

``` js
function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
```

### 继承

#### 原型链继承

``` js
function Animal () {
  this.colors = ['white', 'red']
}

Animal.prototype.getColor = function () {
  return this.colors
}

function Dog() { }

Dog.prototype = new Animal()


let dog1 = new Dog()
let dog2 = new Dog()
dog1.colors.push('blue')
console.log(dog1.getColor()) // [ 'white', 'red', 'blue' ]
console.log(dog2.getColor()) // [ 'white', 'red', 'blue' ]
```

- 原型中包含的引用类型会被所有实例共享
- 子类实例化时不能给父类构造函数传值

#### 构造函数继承

``` js
function Animal (name) {
  this.name = name
  this.getName = function () {
    return this.name
  }
}

function Dog (name) {
  Animal.call(this, name)
}

Dog.prototype = new Animal()
```

- 每次创建实例时，都会创建一遍方法

#### 组合继承

``` js
function Animal(name) {
  this.name = name
  this.color = ['red', 'white']
}

Animal.prototype.getName = function () {
  return this.name
}

function Dog (name, age) {
  Animal.call(this, name)
  this.age = age
}

Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog1 = new Dog('dog1', 1)
let dog2 = new Dog('dog2', 2)

dog1.color.push('blue')
console.log(dog1);
console.log(dog2);
```

- 调用了 2 次父类构造函数，第一次是在 new Animal()，第二次是在 Animal.call() 这里

#### 寄生式组合继承
- 1

``` js
- Dog.prototype =  new Animal()
- Dog.prototype.constructor = Dog

+ function F() {}
+ F.prototype = Animal.prototype
+ let f = new F()
+ f.constructor = Dog
+ Dog.prototype = f
```

- 2

``` js
- Dog.prototype =  new Animal()
- Dog.prototype.constructor = Dog

+ Dog.prototype =  Object.create(Animal.prototype)
+ Dog.prototype.constructor = Dog

```

#### class继承

``` js
class Animal {
  constructor (name) {
    this.name = name

  }

  getName () {
    return this.name
  }
}

class Dog extends Animal {
  constructor (name, age) {
    super(name)
    this.age = age
  }
}
```