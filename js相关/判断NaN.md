<!--
 * @Date: 2021-12-15 15:08:17
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-15 15:14:16
-->
NaN的定义
if(typeOf(n) === 'number' && isNaN(n)) return true

唯一一个不等于任何自身的特点
if(n !== n) return true

利用ES6中提供的Object.is()方法。
var a = "str";
var b = 2;
var c = a/b;

console.log(Object.is(a, NaN)); // false
console.log(Object.is(b, NaN)); // false
console.log(Object.is(c, NaN)); // true
