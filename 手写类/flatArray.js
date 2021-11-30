/*
 * @Date: 2021-11-30 16:15:28
 * @LastEditors: youyi
 * @LastEditTime: 2021-11-30 16:25:55
 */
let arr = [1,[2,[3,[4,5]]]]
// es6 flat 方法
arr.flat(Infinity)

// 序列化后正则
//JSON.stringify() js对象转化成json字符串
var str = JSON.stringify(arr).replace(/\[|\]/g, '')
var re = '[' + str + ']'
// JSON.parse() json字符串转化成js对象
var arr2 = JSON.parse(re)

// 递归处理
function flat(arr) {
    let result = [];
    for(const item of arr){
        item instanceof Array ? result = result.concat(flat(item)) : result.push(item)
    }
    return result
}
