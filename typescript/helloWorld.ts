/*
 * @Date: 2021-12-13 22:00:47
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-13 22:51:41
 */
// 强类型
let flag: boolean = true
let num: number = 12
let arr: number[] = [1,2,3]
let arr1 : Array<number> = [1,2,3]
let arr2 : any[] = [1,'22',3]
// 枚举 首字母大写
enum Flag {success= 1, error= 0}
let s: Flag = Flag.success

// 任意类型any 来获取元素
let box:any = document.getElementById('box')

// undefined
let unum : undefined
console.log(unum);

// void 无返回值
function get():void {
    console.log('无返回值');
}

// never 不会出现的值 
let a: never
a = (()=> {
    throw new Error('错误🙅')
})()

function run() :string {
    return '123'
}

function run2() :number {
    return 123
}

// 函数传参 ？为缺省值 非必选
// 可选参数放在必选参数后面
function getInfo(name:string,age?:number):string {
    return `${name}---${age}`
}
console.log(getInfo('123'));

class Car {
    name: string;
    constructor(name: string){
        this.name = name
    }
    run ():string {
        return `${this.name}`
    }
}

class BMW extends Car {
    constructor(name: string){
        super(name)
    }
}

let b = new BMW('宝马')
b.run()

// 泛型
function test<T>(name:T):T {
    return name
}

test<number>(123)