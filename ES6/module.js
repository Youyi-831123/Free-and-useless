/*
 * @Date: 2021-12-14 22:38:05
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-14 22:51:24
 */
// CommonJs模块
let { stat, exists, readFile } = require('fs')

// 等同于
let _fs = require('fs')
let stat = _fs.stat 
let exists = _fs.exists
let readFile = _fs.readFile

//es6
import { stat, exists, readFile } from 'fs'


//1
export var a = 'yy'

//2
var b = '22'
var c = '33'

export {b, c}

//3 
export function multiply(x,y){
    return x*y
}

//4 
function v1(){}
function v2() {}

export {
    v1 as y1,
    v2 as y2,
    v2 as k2
}

// 使用整体加载时，* 表示指定一个对象，所有的输出值都加载在这个对象上面
import * as all from './mixins'

// default
//其他模块加载该模块时，import命令可以为该匿名函数指定任意的名字，此时import后面不可以使用{}
// 一个模块只能有一个默认输出

//mixins
export default function(){
    console.log('foo');
}

import akk from './mixins'
akk()

//MyClass
export default class {}

import MyClass from 'MyClass'
let o = new MyClass()

// 继承
