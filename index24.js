// console.log("Hello");

// const person = require('./second');
// console.log("Hello");
// console.log(person);
// // let abc = person(5,5)
// // console.log(abc)
// // console.log(person.sum(5,5))
// console.log(exports,require, module,__filename,__dirname);


// const os = require('os');
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());
// console.log(os.uptime());
// const path = require('path');
// let a = path.extname(__filename);

// console.log(a);

// const fs = require('fs')
// let file = fs.readFileSync('text.txt');
// let func = (file,errHandle)=>{
//         if(file){
//                 errHandle(new Error("failed"))
//         }
//         else{
//                 errHandle("success");
//         }
// }
// let errHandle = (err,data)=>{
//         if(err){
//                 console.log(err.message);
//         }
//         else{
//                 console.log(data);
//         }
// }
// func(file,errHandle)


// const fs = require('fs');

// fs.writeFile('vikas.txt',"Hello good morning from vikas,please revertback",()=>{
//         console.log("written to the file");
// })

// let file = fs.readFile('vikas.txt')
// // console.log(file);
// let num =2
// console.log(num**8);

// const fs = require('fs');
// let file = fs.readFileSync('file.txt');
// let func = (file,callback)=>{
//         if(file){
//                 callback(new Error('failed'));
//         }
//         else{
//                 callback("success");
//         }
// }
// let func2 = (err,data)=>{
//         if(err){
//                 console.log(err);
//         }
//         else{
//                 console.log(data);
//         }
// }
// func(file,func2)
// const { resolveSoa } = require('dns');
// const http = require('http');
// const fs = require('fs')
// const port = process.env.PORT || 3000;
// const file = fs.readFileSync('vikas.txt')
// const server  = http.createServer((req,res)=>{
//         res.setHeader('content-Type','text/html')
//         console.log(req.url);
//         if(req.url == '/'){
//                 res.statusCode = 200;
//                 res.end(file);
//         }
//         else if(req.url == '/about'){
//                 res.statusCode = 200;
//                 res.end('<h1>About Hello Vikas</h1><p>This is vikas here..</p>')
//         }
//         else{
//                 res.statusCode = 404;
//                 res.end("<h1>not found</h1>");

//         }
// })
// server.listen(port,()=>{
//         console.log((`Server is listening on port: ${port}`))
// })

//Async & await
// let a = 4;
// let b = 5;
// let func =  (num1,num2)=>{
//         console.log("hello");
//         setTimeout(() => {
//                 let sum =  num1 + num2;
//         console.log(`The sum is: ${sum}`);
//         }, 5000);
//         let mult = num1 * num2;
//         console.log(`multiply is: ${mult} `);
// }
// func(a,b)

// let data = [1,2,3,8,5,6,7];
// let a = data.at(5)
// let d2 = [7,8,9]
// console.log(a);
// let b = data.concat(d2)
// console.log(b);
// console.log(data.length);
// console.log(data.copyWithin(0,2,4))
// console.log(data.length);
// console.log(c);
// console.log(data);


// let data = [0,1,2,3,8,5,7,9];
// console.log(data.copyWithin(0,3,6));

// let data = ['11','2','3'];
// let d2 = data.entries()
// console.log(d2.next().value);
// console.log(d2.next().value);
// console.log(d2.next().value);
// let d2 = data.every(3,0,2);
// console.log(data.every(check))
// function check(data){
//         return data>1
// }
// check(data)
// console.log(data.fill(2))
// let d2 = data.filter(data.length>1)
// data.filter()
// console.log(d2);

// let data = [11,12,13,14,5];
// data.filter((element)=>{
//         if(element>10){
//                 console.log(`${element} is greater than 10`)
//         }
       
// })
// console.log(element);
// let data = [1,2,3,4,5];
// data.findIndex((element)=>{
//       console.log(element);
// })
// let out = data.findIndex(func);
// function func(data){
//         return data>3
// }
// func(data)
// console.log(out);

// let data = [1,2,3,[4,5],6,7,,,,,,,,,,,,,,,,,,,,8,[[9,10,11]],12,[13]];
// let c = data.flat(Infinity)
// console.log(c);

// let data = [1,2,3,4,5];
// data.forEach((element)=>{
//       console.log( element*"Vi".toString()) 
// })
// // console.log(c);
// let data = [1,2,3,4];
// console.log(data.includes(6))
// let data = [1,2,3,4,5,1];
// console.log(data.reduceRight(1,2,))

// let data = [123,4,5,6];
// let c2 = data.copyWithin(0,3,4)
// console.log(c2);
// let data = [1,2,3];
// (data.unshift(4))
// console.log(data);
// console.log(typeof (typeof (null)));
// let a = BigInt(199999999999)
// console.log(a);
// let marks = {
//         harry: 23,
//         shubham: 45,
//         rohanDas: 56,

// }
// console.log(marks);
// let name = "Vikas"
// function findName(name){
//         console.log(`The name is: ${name}`);
// }
// findName(name)

// let n = '1'
// let c = Number(n)
// console.log(c,typeof c);

// setInterval(() => {
// setInterval(() => {
//         let date = new Date();
//         console.log(date.getHours()+ ":"+date.getMinutes()+":"+date.getSeconds());
// }, 1000);

        

//         console.clear()
// }, 1000);


// setInterval(() => {
// setInterval(() => {
//         let date = Math.floor(Math.random()*100)
//         console.log(date);
// }, 5000);
//         console.clear()
// }, 6000);


// let num = 1.223424;
// console.log(num.toFixed(1));
// const marks = [1,2,3,343,5,3];
// const fruits = ['Apple',"MAngo"]
// console.log(Array.from(fruits));


// console.log("hello")

// for(var i=0;i<10;i++){
//         setTimeout(() => {
//            console.log(i);     
//         }, 1000);
// }


// js basic
// cc mail  tutorial link
// var i = 10;
// function test(){
//        console.log(i);
//        var i = 20
// }
// test() 
// console.log(i);




// var x = 2;
// function test(){
//        console.log(x);
//        x = 100
// }
// test()
// console.log(x);






























        
      


































































































































































































































































