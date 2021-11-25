/*
 * @Date: 2021-11-25 13:38:23
 * @LastEditors: youyi
 * @LastEditTime: 2021-11-25 14:05:03
 */
class Subject {
    constructor(name){
        this.name = name
        this.notifylist = []
    }
    attach(o){
        this.notifylist.push(o)
    }
    setState(msg){
        this.state = msg
        this.notifylist.forEach(o => o.notify(this))
    }
}

class Observer {
    constructor(name){
        this.name = name
    }
    notify(baby){
        console.log(`俺是${this.name},我被通知了，baby的状态是${baby.state}`);
    }
}

let baby = new Subject("baby")
let mother = new Observer('mom')
let farther = new Observer('papa')

baby.attach(mother)
baby.attach(farther)
baby.setState('hungry')