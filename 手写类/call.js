/*
 * @Date: 2021-11-30 17:12:58
 * @LastEditors: youyi
 * @LastEditTime: 2021-11-30 17:27:12
 */
Function.prototype.myCall = function (ctx) {
    ctx = ctx? Object(ctx) : window
    ctx._fn = this
    let arg = [...arguments].slice(1)
    console.log(arg);
    let result = ctx._fn(...arg)
    delete ctx._fn
    return result
}

var a = {
    name: 'cherry',
    fn: function (h,k) {
        return h + k
    }
}

var b = function (h,k) {
    return h + k
}

b.myCall(a,1,2)