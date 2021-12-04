/*
 * @Date: 2021-11-27 20:23:53
 * @LastEditors: youyi
 * @content: 发布订阅模式 
 * 一共分为两个部分：on、emit。
 * 发布和订阅之间没有依赖关系，发布者告诉第三方（事件频道）发生了改变，第三方再通知订阅者发生了改变。
 * @LastEditTime: 2021-12-02 19:19:59
 */
// on：就是把一些函数维护到数组中
//emit：让数组中的方法依次执行
let Event = (function () {
  let list = {},
    on,
    emit,
    remove;
  on = function (event,fn) {
    (list[event] || (list[event] = [])).push(fn)
  }
  // 取出消息对应的回调函数集合
  emit = function (name, ...res){
    // let event = Array.prototype.shift.call(arguments)
    // let fns = list[event]
    let fns = list[name]
    if(!fns || fns.length === 0) return
    fns.forEach(fn => {
      fn.apply(this,...res)
    });
  }
  remove = function(event, fn){
    let fns = list[event]
    if(!fns) return false
    if(!fn){
      fn && (fn.length = 0)
    } else {
      for(let i = fns.length -1; i>=0; i--){
        let _fn = fns[i]
        _fn === fn && (fns.splice(i,1))
      }
    }
  }
  return {
    on:on,
    emit:emit,
    remove:remove
  }
})

Event.on('bigB', function(price){
  console.log(`价格是${price}`);
})

Event.emit('bigB', 2000000)

let houseObj = new Object

let initEvent = function(obj){
  for(let i in Event){
    obj[i] = Event[i]
  }
}

initEvent(houseObj)
houseObj.on('big', fn1 = function(size){
  console.log(`小红：要的房子是${size}平米`);
})
houseObj.on('big', fn2 = function(size){
  console.log(`小白：要的房子是${size}平米`);
})
houseObj.on('small', fn3 = function(size){
  console.log(`小尤：要的房子是${size}平米`);
})

houseObj.emit('big', 100)
houseObj.emit('small', 11)