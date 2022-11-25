// let data = [1,2,3,4]
// console.log(data);
// let marks = {
//         vikas: 88,
//         Suraj: 44,
//         Vk: 90
// }
// for(let mark in marks){
//         console.log(mark,marks[mark]);
// }
// let marks = {
//         vikas: 77,
//         satya: 89,
//         abhinav: 34
// }
// for(let i = 0;i<Object.keys(marks).length;i++){
//         let a = ("The marks of "+Object.keys(marks)[i] +" are "+ marks[Object.keys(marks)[i]]  );
//         console.log((a));
// }
// for(let keys in marks){
//         console.log("The marks of ",keys+" are ",marks[keys]);
// }

// let cn = 5;
// let i;
// while(i!=cn){
//         console.log("Try again");
//         i = prompt("Enter a number");
// }
// console.log("You have entered a correct number.");

// let avg = (a,b,c,d) => {
//         return (a+b+c+d)/4

//         // console.log(average);
// }
// console.log((avg(1,2,3,4)));;

// let string = "vikas Hello Satye"
// let string1 = "Good morning"
// let str = string[0]
// // let str = string.trim()
// console.log(str);
// console.log();/

// let string = "Rupees is 1000"
// let amount = string.slice("Rupees is ".length)
// console.log(amount);
// let p1 = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//                 console.log("Resolved after 2 seconds.");
//                 resolve(56)
//         },2000)
// })
// p1.then((value)=>{
//         console.log(value);
//         let p2 = new Promise((resolve,reject)=>{
//                 setTimeout(() => { 
//                         resolve("Promise 2");
//                 }, 2000);
//         })
//         return p2
// }).then((value=>{
//         console.log("We are done");
//         return 2
// })).then((value)=>{
//         console.log("At the end");
// })
// let loadScript = (src) => {
//         return new Promise((resolve) =>{

//                 let script = document.createElement('script')
//                 script.type = "text/javascript";
//                 script.src = src;
//                 document.body.appendChild(script);
//                 script.onload = ()=>{
//                         resolve(1)
//                 }
//                 script.onerror = (()=>{
//                         reject(0);
//                 })
//         })
// }
// let p1 = loadScript("http://localhost:3000/index1.js")
// p1.then((value)=>{
//         console.log(value);
// }).catch((error)=>{
//         console.log("We are sorry");
// })
// let p1 = new Promise((resolve,reject)=>{
//         console.log("Promise is started");
//         return resolve(56);
// })
// p1.then((value)=>{
//         console.log(" resolved");
// }).catch((error)=>{
//         new Error("Sorry not resolved")
// })
// let p1 = new Promise((resolve,reject)=>{
//         setTimeout(() => { 
//         resolve("Value 1");
//         }, 1000);
// })
// let p2 = new Promise((resolve,reject)=>{
//         setTimeout(() => { 
//                 resolve("value 2")
//         // reject(new Error("Error occured"));
//         }, 2000);
// })
// let p3 = new Promise((resolve,reject)=>{
//         setTimeout(() => { 
//         resolve("Value 3");
//         }, 3000);
// })
// p1.then((value)=>{
//         console.log(value);
// })
// p2.then((value)=>{
//         console.log(value);
// })
// p3.then((value)=>{
//         console.log(value);
// })
// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3])
// let promise_all = Promise.any([p1,p2,p3])
// let promise_all = Promise.reject([p1,p2,p3])
// promise_all.then((value)=>{
//         console.log(value);
// }).catch((error)=>{
//         console.log("Got error");
// })

// async function practice(){
//         let p1 = new Promise((resolve,reject)=>{
//                 setTimeout(() => {
//                       resolve("p1")  
//                 }, 1000);
//         })
//         let p2 = new Promise((resolve,reject)=>{
//                 setTimeout(() => {
//                       resolve("p2")  
//                 }, 7000);
//         })
//         // p1.then(console.log("done p1"))
//         // p2.then(console.log("done p2"))
//         let promise1 = await p1
//         let promise2 = await p2
//         return [promise1,promise2]
//         console.log("resolved");
// }
// practice()

// async function hrishi() {
//         setTimeout(function() {
//           console.log("one")
//         }, 5000)
//       }
//       async function amisha() {
//         setTimeout(function() {
//           console.log("two")
//         }, 4000)
//       }
      
//       async function three() {
//         let a = await hrishi();
//         let b = await amisha();
//       }
//       three();

// setTimeout(() => {
//         console.log("H");
// }, 1000);
// setTimeout(() => {
//         console.log("E");
// }, 2000);
// try{
//         console.log(vikas);
// }
// catch(err){
//         console.log("you did mistake");
// }
// setTimeout(() => {
//         console.log("L");
// }, 3000);
// setTimeout(() => {
//         console.log("L");
// }, 4000);
// setTimeout(() => {
//         console.log("O");
// }, 5000);
// let data1 = [11,55,33,88,73,222,-1];
// let max = 0
// for(let i = 0;i<data1.length;i++){
//         if(data1[i]>max){
//                 max=data1[i]
//         }
// }
// console.log(max);
// let num = 123;
// let store = "";
// while(num>0){
//         let rem = num%10
//         store+=rem
//         num=Math.floor(num/10)
// }
// console.log(store);/////////////////reversing a string
// let str = "sakiv";
// let temp = str.split('')
// let arr = temp.reverse();
// let arr1 = arr.join("");
// let join = arr1.toString() 
// console.log(join);



