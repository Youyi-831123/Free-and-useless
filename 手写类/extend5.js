/*
 * @Date: 2021-11-29 11:14:49
 * @LastEditors: youyi
 * 寄生
 * @LastEditTime: 2021-11-29 11:43:20
 */
function Person(obj) {
    this.name = obj.name
    this.age = obj.age
}
Person.prototype.add = function(value){
    console.log(value);
}
var p1 = new Person({name: 'kris', age: 22})

function Person1(obj){
    Person.call(this, obj)
    this.sex = obj.sex
}

Person1.prototype = Object.create(Person.prototype)
Person1.prototype.constructor = Person1

Person1.prototype.play = function(value){
    console.log(value);
}
var p2 = new Person1({name: 'kris', age: 22, sex: 'male'})