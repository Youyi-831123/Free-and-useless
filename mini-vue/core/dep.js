/*
 * @Date: 2022-03-07 10:25:41
 * @LastEditors: youyi
 * @LastEditTime: 2022-03-07 16:29:25
 */
class Dep{
    constructor(){
        this.subs = []
    }
    // 添加观察者
    addSub(sub){
        if(sub && sub.update){
            this.subs.push(sub)
        }
    }
    // 发送通知
    notify(){
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}