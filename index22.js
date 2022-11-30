// console.log("22");
// let person = {
//         name: "Vikas",
//         gender: "male"
// }
// let print = (obj)=>{
//         console.log(obj.name);
//         console.log(obj.gender);
// }
// (print(person));
// function myFunc(){
//          function hello(){
//                 console.log("hello");
//         }
//         return hello();
// }
// let a = myFunc()
// console.log(a);

// var name = "Vikas";
// let num = 14;
// function first(num,callback) {
//         if(num>10){
//                 callback(new Error("failed"))
//         }
//         else{
//                 callback(null,"success")
//         }
// }
// function second(err,data) {
//         if(err){
//                 console.log(err.message);
//         }
//         else{
//                 console.log(data);
//         }
// }
// first(num, second)
// let data = [1,2,3,4,5];
// let sum = data.reduce((accumulator,currentValue)=>{
//         return accumulator * currentValue
// })
// console.log(sum);

// let arr1 = [1,2,34];
// let arr2 = arr1.slice(0);
// console.log(arr1);
// console.log(arr2);
// arr1.push(100);
// console.log(arr1);
// console.log(arr2);

// const fs = require('fs');
// const file = "vikas.txt";
// const func = (err,data)=>{
//         if(err){
//                 throw new Error("failed")
//         }
//         else{
//                 console.log("success");
//         }
// }
// func(fs)
// fs.readFileSync()
// let cart = [
//         {pid: 1,pname: 'phone',price: 12000},
//         {pid: 2,pname: 'laptop',price: 42000},
//         {pid: 3,pname: 'tablet',price: 22000}
// ]
// let total = cart.reduce((totalprice,currprice)=>{
//         return totalprice + currprice.price
// },0)
// console.log(total);


// let a =  [22,1,33,66,4];
// let o = a.sort((a,b)=>{return b-a})
// console.log(o);
// let p1 = new Promise((resolve,reject)=>{
//        resolve(value)
// }).then((56)=>{
//         resolve(value)
// })
// console.log(p1);

// let person = [1,2,3,4,5,6];
// let daat = person.fill((person)=>{
//         return ("user.userId%2==0")
// })
// console.log(daat);
// let arr = new Array(10).fill(2)
// console.log(arr);
// let number = new Set('Vikas');
// number.add(5,3,4,5,6,7)
// console.log(number);
// let set = new Set([1,2,3,4,5]);
// for(let item of set) console.log(set);

// let map = new Map();
// map.set(1,"Vikas")
// map.set(2,"rakesh")
// map.set(3,3)
// map.set(4,4)
// map.set(5,5)
// map.set(5,5)
// console.log(map);

// let data = [2,33,44,55,66];
// let max1 = 0
// let max2 = 0
// for(let i=0;i<data.length;i++){
//         if(data[i]>max1){
//                 max1=data[i]
//         }
// }
// for(let i=0;i<data.length;i++){
//         if(data[i]>max2){
//                 max2=data[i]
//         }
// }
// console.log(max2);

// let data = [22,5,77,88,99,22,11,454,444,444,454,454,500,500];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<data.length;i++){
//         if(data[i]>max1){
//                 max1=data[i]
//         }
// }
// for(let i = 0;i<data.length;i++){
//         if(data[i]>max2 && data[i]<max1){
//                 max2=data[i]
//         }
// }
// console.log(max2);

// function func1(){
//         return new Promise(function(resolve,reject){
//                 let error = true
//                 if(!error){
//                         console.log("resolved");
//                         resolve()
//                 }
//                 else{
//                         console.log("rejected");
//                         reject()
//                 }
//         })
// }

// func1()
// .then(()=>{
//         console.log("good bro");
// }).catch(()=>{
//         console.log("bad bro");
// })
// let num = 20;                                  //promises in js
// let myFunc = (num)=>{
//         let p1 = new Promise((resolve,reject)=>{
//                 if(num>10){
//                         resolve({success:true});
//                         console.log("True the no. is greater than 10");
//                 }
//                 else{
//                         reject(new Error("Error occured"));
//                         // console.log();

//                 }
//         }).then((data)=>{
//                 console.log(data);
//         }).catch((err)=>{
//                 console.log(err.message);
//         })
// }

// myFunc(num)

// let data = 1
// console.log(data);
//  data =2
//  setTimeout(() => {
//         console.log(data);
//  }, 2000);
// data  =3;
// console.log(data);
// let data = new Promise((resolve, reject) => {
//         reject(new Error("failed to resolve"))
// })
// data.then((data) => {
//         console.log(data);
// }).catch((err) => {
//         console.log(err.message);
// })
// console.log("start");
// let data = 200
// let p1 = new Promise((resolve, reject) => {
//         console.log("in promise");
//         if (data % 2 == 0) {
//                 resolve(data)
//         }
//         else {
//                 reject(new Error("Not divisible"))
//         }

// }).then((data) => {
//         console.log(data);
// }).catch((err) => {
//         console.log(err.message);
// })
// console.log("out of promie");

// let data = 17;
// let p1 = new Promise((resolve, reject) => {
//         if (data % 2 == 0) {
//                 resolve(data)
//         }
//         else {
//                 reject(new Error("Not divisible"))
//         }
// })
// p1.then((value) => {

//         console.log(value),
//         (error) => {
//                         console.log(error)
//                 }
// }).catch((err) => {
//         console.log(err.message);
// })


