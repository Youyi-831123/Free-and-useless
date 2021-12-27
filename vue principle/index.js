/*
 * @Date: 2021-12-27 23:26:09
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-27 23:51:55
 * 响应式 = 数据劫持 + 发布订阅模式
 */
// 发布订阅式 =》订阅器模型
let Dep = {
    clientList : {}, // 存放订阅者
    listen: function(key, fn){
        (this.clientList[key] || (this.clientList[key] = [])).push(fn)
    },
    trigger: function(){
        //将类似数组转化为真实数组
        let key = Array.prototype.shift.call(arguments)
        fns = this.clientList[key]
        if(!fns || fns.length === 0){
            return false
        }
        for(let i =0, fn; fn = fns[i++];){
            fn.apply(fn, arguments)
        }
    }
}
// 数据劫持
let dataHijack = function({data, tag, dataKey, selector}){
    let value = '',
    el = document.querySelector(selector)
    Object.defineProperty(data, dataKey, {
        get: function() {
            console.log("取值");
            return value
        },
        set: function(val){
            console.log("设置值");
            value = val
            //发布
            Dep.trigger(tag, val)
        }
    })
    //订阅
    Dep.listen(tag, function(text){
        el.innerHTML = text
    })
}