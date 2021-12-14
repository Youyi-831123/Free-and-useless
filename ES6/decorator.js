/*
 * @Date: 2021-12-14 22:13:33
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-14 22:29:22
 * 修饰器本质就是编译时执行的函数
 * 修改类的行为
 */

// 修饰器函数的第一个参数就是所要修饰的目标类
function testable(target){
    target.isTestable = true
}

@testable
class MyTestableClass{}
console.log(MyTestableClass.isTestable);

// 添加实例属性
function testable(target){
    target.prototype.isTestable = true
}

// 觉得一个参数不够用，可以在修饰器外面再封装一层函数
function testable(isTestable){
    return function(target) {
        target.isTestable = isTestable
    }
}

//通过修饰器mixins 把Foo类的方法添加到MyClass的实例上
import {mixins} from './mixins'

const Foo = {
    foo() {
        console.log('foo');
    }
}

@mixins
class MyClass {}

let obj = new MyClass()
obj.foo()