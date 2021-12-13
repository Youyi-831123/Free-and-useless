/*
 * @Date: 2021-12-13 23:06:05
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-13 23:22:23
 */
var promise = new Promise((resolve,reject) => {
    if(true){
        resolve(value)
    } else {
        reject(err)
    }
})

promise.then(function(value){
    //success resolved状态回调函数
},function(err){
    // failure reject状态回调函数
})


// 1. timeout方法返回一个promise实例，表示一段时间后才会返回发生的结果
// 过了指定的时间（ms）以后，promise实例状态变成resolved，触发then绑定的回调函数
function timeout(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve
        }, ms, 'done');
    })
}

timeout(10000).then((value) => {
    console.log(value);
})