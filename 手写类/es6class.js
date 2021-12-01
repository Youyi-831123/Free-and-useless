/*
 * @Date: 2021-12-01 22:07:53
 * @LastEditors: youyi
 * 总是用class，取代需要prototype的操作，因为class写法更加简洁，易于理解
 * @LastEditTime: 2021-12-01 22:29:42
 */

//bad
function Queue(contents = []) {
    this._queue = [...contents]
}
Queue.prototype.pop = function () {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
}

//good
class Queue {
    constructor(contents = []) {
        this._queue = [...contents]
    }
    pop() {
        const value = this._queue[0]
        this._queue.splice(0, 1)
        return value
    }
}

//bad 
const inherits = require('inherits')

function PeekAbleQueue(contents) {
    Queue.apply(this, contents)
}
PeekAbleQueue.prototype.peek = function () {
    return this._queue[0]
}
//inherits(PeekAbleQueue, Queue) 等价
PeekAbleQueue.prototype = Object.create(mixCar.prototype)
PeekAbleQueue.prototype.constructor = PeekAbleQueue

//good 
class PeekAbleQueue extends Queue {
    peek() {
        return this._queue[0]
    }
}


