/*
 * @Date: 2021-11-30 19:53:40
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-01 22:06:51
 */
// 工厂模式
function createCar(sColor) {
    var oTempCar = new Object
    oTempCar.color = sColor
    oTempCar.showColor = function () {
        alert(this.color)
    }
    oTempCar.showColor1 = showColor1
    return oTempCar
}

function showColor1() {
    console.log(this.color);
}

var oCar1 = createCar('red')

// 构造函数方式
//与工厂函数一样 会重复生成函数，为每个对象生成独立的函数版本
function Car(sColor) {
    this.color = sColor
    this.showColor = function () {
        alert(this.color)
    }
}

var oCar3 = new Car('red')

// 原型模式
//实例里面存放的是函数的指针，但是无法初始化属性的值
function Car1() {}
Car1.prototype.color = 'blue'
Car1.prototype.drivers = new Array('mike', 'john')
Car1.prototype.showColor2 = function () {
    alert(this.color)
}
var oCar4 = new Car1()

// 推荐混合模式
//用构造函数方式定义对象的非函数属性
//用原型方式定义函数属性
// 结果是所有的函数只创建一次，每个对象有自己的对象属性实例
function mixCar(sColor) {
    this.color = sColor
    this.drivers = new Array('mike', 'john')
}

mixCar.prototype.showColor = function () {
    alert(this.color)
}

// babel 对es5的继承转化原理---寄生组合式继承
function childCar(sColor) {
    mixCar.call(this, sColor)
    this.type = 'child'
}

childCar.prototype = Object.create(mixCar.prototype)
childCar.prototype.constructor = childCar

var oCar5 = new childCar('red')