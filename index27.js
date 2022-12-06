// console.log("Vikas 123");
// async function a(){
//         let p1 = new Promise((resolve, reject)=>{
//                 setTimeout(() => {
//                         resolve("Done!!!")
//                 }, 1000);
//         })
//         let result = await p1;
//         console.log(result);
// }
// a()
// console.log("hellp");
// setTimeout(() => {
        
//         for(let i =0;i<10000000;i++){
//                 console.log(i);
//         }
// }, 2000);
// console.log("end");

// let a = ()=>{

// }

// let b = function(){

// }

// (function a(){

// }())
// async function db(){
//         console.log("Entering in promise");
//         let p1 = new Promise((resolve, reject)=>{
//                 console.log("inside promise");
//                 setTimeout(()=>{
//                         resolve("Done!!!");
//                 },2000)
//                 console.log("leaving promise");
//         })
//         let result = await p1;
//         console.log(result);
//         console.log("Awaiting result");
// }
// db();


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

// function greet(name){
//         let message = "Hello, " +name + " Good-Morning"
//         console.log(message);
// }
// greet("Vikas")
// let sum = function(a,b){
//         let result = a+b;
//         console.log(result);
// }
// sum(3,3)

// (function(){
//         let name = "Vikas";
//         console.log(name);
// })();
//  import {a,b} from './app'
// const app = require('./app');
// console.log(app.z());
// const fs = require('fs');
// // let a = fs.writeFileSync('v.txt',"Hello v")
// let b = fs.readFileSync('v.txt','utf-8')
// console.log(b);
// console.log(__dirname);
// console.log(__filename);
// const fs = require('fs');
// let c = fs.writeFileSync('p.txt','ABC','utf-8')
// console.log(c);


// const http = require('http');
// // const PORT = require('PORT')
// http.createServer((req, res)=>{
//         res.write("<h1>Hello, this is Vikas</h1>")
//         res.end();
// }).listen(3000)
// const http = require('http');
// http.createServer((req,res)=>{
//         res.write("<h1>Hello Vikas</h1>");
//         res.end();
// }).listen(3000);


// const colors = require('colors');
// console.log("Hii vikas");

// console.log(chalk.blue("hello"));
// const chalk=require("chalk");
// console.log(chalk.blue("hello"))
// const data = require('./data')
// const http = require('http');
// http.createServer((req, res)=>{
//         res.writeHead(200,{'Content-Type':'application\json'});
//         res.write(JSON.stringify(data));
//         res.end();
// }).listen(3000)
// const fs = require('fs');
// let file = 'p.txt';
// fs.unlinkSync(file)

// const fs = require('fs');
// let inp = process.argv;
// if(inp[2]=='add'){
//         fs.writeFileSync(inp[3],inp[4])
// }
// else if(inp[2]=='remove'){
//         fs.unlinkSync(inp[3])
// }
// else{
//         console.log("Invalid Input");
// }

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,files);
// console.log(dirPath);
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files')
// for(let i =0;i<2;i++){
//         fs.writeFileSync(dirPath+`apple${i}.txt`,'Hello')
// }

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// fs.readdir(dirPath,(err,data)=>{
//         console.log(files);
// })

// const fs = require('fs');
// let a = fs.rename('a.txt','b.txt')
// console.log(a);





























































































































