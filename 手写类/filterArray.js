/*
 * @Date: 2021-11-26 08:30:19
 * @LastEditors: youyi
 * @LastEditTime: 2021-11-28 22:03:42
 */
let arr = ['banana', 'orange', 'apple', 'orange', 'banana']
// filter
// indexOf 方法查找后，返回给定元素的固定的第一个索引，如果不存在返回-1
function removeDuplicates(data){
    return data.filter((value, index) => index === data.indexOf(value))
}
// 解构赋值语法
function removeDuplicates(data) {
    return [...new Set(data)]
}

function removeDuplicates(data){
    let unique = [];
    data.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element)
        }
    });
    return unique
}

console.log(removeDuplicates(arr));

// 在数组原型上添加去重方法
Array.prototype.removeDuplicates = function () {
    let unique = [],
    for(let i = 0; i < this.length; i++){
        const current = this[i]
        if(unique.indexOf(current) < 0) unique.push(current)
    }
    return unique
}

function removeDuplicates(data) {
    return Array.from(new Set(data))
}

let user = [
    {id: 1,name:'susan',age :23},
    {id: 2,name:'kris',age :24},
    {id: 3,name:'jack',age :21},
    {id: 1,name:'susan',age :23},
    {id: 1,name:'susan',age :23},
]
// 把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。
function uniqueByKey(data, key){
    return [...new Map(
        data.map(e => [key(e),e])
    ).values()]
}

console.log(uniqueByKey(user, item => item.id));