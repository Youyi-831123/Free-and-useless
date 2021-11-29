/*
 * @Date: 2021-11-29 15:26:36
 * @LastEditors: youyi
 * 追踪变化，收集依赖
 * @LastEditTime: 2021-11-29 16:21:08
 */
function defineReactive (data, key , val){
    // 递归子属性，将data中所有的属性转化成getter setter 形式来侦查变化
    if (typeof val === 'object'){
        new Observer(val)
    }
    let dep = new Dep()
    Object.defineProperty(data, key , {
        enumerable: true,
        configurable: true,
        get : function() {
            dep.depend()//修改
            return val
        },
        set: function() {
            if(val === oldVal){
                return
            }
            val = oldVal
            dep.notify()// 新增
        }
    })
}

export default class Dep {
    constructor(){
        this.subs = []
    }
    
    addSub (sub){
        this.subs.push(sub)
    }

    removeSub (sub){
        remove(this.subs, sub)
    }

    depend () {
        if(window.target) {
            this.addSub(window.target)
        }
    }

    notify() {
        const subs = this.subs.slice()
        for(let i = 0, l = subs.length; i < l; i++){
            subs[i].update()
        }
    }
}

function remove(arr, item) {
    if(arr.length) {
        const index = arr.indexOf(item)
        if(index > -1){
            return arr.splice(index,1)
        }
    }
}

export default class Observer {
    constructor (value){
        this.value = value

        if(!Array.isArray(value)){
            this.walk(value)
        }
    }
    walk(obj){
        const keys = Object.keys(obj)
        for( let i = 0 ; i< keys.length; i++){
            defineReactive(obj, keys[i], obj[keys[i]])
        }
    }
}