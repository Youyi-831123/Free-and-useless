/*
 * @Date: 2021-12-15 15:33:52
 * @LastEditors: youyi
 * @LastEditTime: 2021-12-15 17:36:19
 */
//Asynchronous javaScript and XML (异步的js与xml)
//与服务器交换数据，异步更新部分网页内容
//一个完整ajax请求五个步骤
//1.创建XMLHTTPRequest对象 用于和服务器交换数据
if (window.XMLHttpRequest) {
    let xmlhttp = new XMLHttpRequest()
} else {
    //IE5 IE6
    let xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
}
//2.使用open方法创建http请求，并且设置请求地址
//open（methods,url,async） @methods get或者post @async true（异步），false（同步）
//get 更简单，更快
// 1.更新服务器上的文件或者数据库 2.向服务器发送大量数据（post无数据量限制）3.post更稳定更可靠  ==》使用get

//url 添加一个唯一的id
xmlhttp.open('GET','/try/ajax/demo.php?='+ Math.random(),true)
// url 添加信息
xmlhttp.open('GET','/try/ajax/demo.php?fname=you&lname=yi',true)
xmlhttp.send()
//3. send发送请求
xmlhttp.open('POST','/try/ajax/demo.php',true)
//html表单那样post数据，使用setRequestHeader(header,value)来添加HTTP头，send中放置数据
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
xmlhttp.send("fname=you&lname=yi")

//当async = true，需要规定响应处于onreadystatechange事件中就绪状态时执行的函数
// 4.注册事件，给ajax设置事件
xmlhttp.onreadystatechange = function(){
    //0 请求未初始化 1 连接已经建立 2 请求已接收 3 请求处理中 4 请求完成，响应就绪
    if(xmlhttp.readyState==4 && xmlhttp.status== 200){
        document.getElementById('myDiv').innerHTML = xmlhttp.responseText
    }
}
xmlhttp.open('GET',"/try/ajax/demo.txt",true)
xmlhttp.send()
//当async为false，会等待服务器响应后，在继续执行js

//获得响应更新页面
//服务器响应 responseText 获得字符串形式的响应数据 responseXML获取xml形式的响应数据

xmlDoc = xmlhttp.responseXML
txt = ""
x = xmlDoc.getElementByTagName('artist')
for(i=0; i< x.length; i++){
    txt = txt + x[i].childNodes[0].nodeValue + "<br>"
}
document.getElementById("myDiv").innerHTML = txt

