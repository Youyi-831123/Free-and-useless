/*
 * @Date: 2021-11-29 13:56:36
 * @LastEditors: youyi
 * Object.defineProperty(obj, prop, descriptor)
 * 用于定义一个对象的属性
 * 通过defineProperty(obj,prop,descriptor)的第三个参数来实现对象属性的监听
 * @LastEditTime: 2021-11-29 14:27:36
 */
var obj = new Object()
var value = 123
Object.defineProperty(obj,'name',{
    enumerable: true,
    // configurable: true,
    //writable: false,
    get: function() {
        console.log('get it');
        return value // 作为name属性的值
    },
    set: function(newValue) {
        console.log('set it');
        value = newValue // 把value值进行更新
    }
})

console.log(obj.name);
obj.name = 1234
console.log(obj.name);