/*
 * @Date: 2021-11-28 22:09:06
 * @LastEditors: youyi
 * @LastEditTime: 2021-11-28 22:21:21
 */
// simple array
var arr = ['a', 'b', 'c']
console.log(Object.keys(arr))
// array like object
var object = {
    0: 'a',
    1: 'b',
    2: 'c'
}
console.log(Object.keys(object))
// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj))// console: ['2', '7', '100']
// getFoo is a property which isn't enumerable
var myObj = Object.create({},{
    getFoo() {
        return this.foo
    }
})
myObj.foo = 1
console.log(Object.keys(myObj));