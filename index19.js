// console.log("hello");
// let number = 20;
// let isPrimre = true;
// for(let i = 2;i<number;i++){
//         if(number % i == 0){
//                 isPrimre = false
//                 break
//         }
//         if(isPrimre){
//                 console.log(number);
//         }
// }
// let number = 20
// function checkPrime(number) {
//         if (number <= 1) {
//           return false;
//         } else {
//           for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//               return false;
//             }
//           }
//           return ;
//         }
//       }
//       console.log(checkPrime(number));
// let number = 100;
// function checkPrime(number) {
//         let isPrimre = true;
//         let store = []
//         let count = 0;
//         for (let i = 2; i < number; i++) {
//                 // if (number <= 0) {
//                 //         console.log(`${number} is neither prime nor composite`);
//                 // }
//                 count=0
//                 for(let j = 2;j<i;j++){
//                     if(i%j==0){
//                         // isPrimre = fals
//                         count++;
//                         // break;
//                 }

//                 }
//                 if(count ==1) store.push(i)
//         }
//         return store

// }
// console.log(checkPrime(number));

// //i=3
// //j=3

// let num=20
// let c=0
// for(i=2;i<=num;i++){
//         if(num%i) c++
// }
// if(c==1) console.log("prime")
// let num=100
// let c=0
// let arr=[]
// for(i=2;i<=num;i++){
//     c=0
//     for(let j=2;j<=i;j++){
//         if(i%j==0) c++
//     }
//     //console.log(c)
//      if(c==1){ 
//          //console.log(i)
//      arr.push(i)
//      }
// }
// console.log(arr)
/////////////////////////////////////prime number
// const number = 16;
// let count = 0;
// const arr = [];
// for (let i = 2; i <= number; i++) {
//         count = 0
//         for (let j = 2; j <= i; j++) {
//                 if (i % j == 0) {
//                         count++
//                 }
//         }
//         if (count == 1) {
//                 arr.push(i)
//         }
// }
// console.log(arr);
// const data = [1,2,4,5,6,7,8,9];
// for(let i = 0;i<data.length;i++){
//         if(i++){
//                 return true
//         }
//         else{

//         }
// }
// try{
//         throw new ReferenceError('Vikas is not good')
// }catch(err){
// console.log(err.name);
// console.log(err.message);
// // console.log(err);
// }
// try{
//         let age = 20;
//         if(age<120){
//                 throw new Error("Unable to find age.")
//         }
// }catch(err){
//         console.log(err.message);
// }
// console.log("Valid age");


// function name() {
//         try {

//                 console.log(number);
//         } catch (err) {
//                 console.log(err.message);
//         }
//         finally {
//                 console.log("Vikas");
//         }
// }
// name()
// let loadScript = async (src) => {
//         return new Promise((resolve, rejct) => {

//                 let script = document.createElement("script");
//                 script.src = src
//                 script.onload = () => {
//                         resolve(src + " Done Success");
//                 }
//                 document.head.append(script)
//         })
// }
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//         console.log(value);
// })

// const main = async()=>{
//         console.log(new Date().getMilliseconds());
//         let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
//         console.log(a);
//         console.log(new Date().getMilliseconds());
// }
// main();
// let p1 = () => {

//        return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         reject(new Error("This is not acceptable"));
//                 }, 3000);
//         })
// }

// let a = async()=>{
//         try{

//                 let c = await p1()
//                 console.log(c);
//         }catch(err){
//                 console.log(err.message);
//         }
// }
// a()
// let p1 = async () => {
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve(10)
//                 }, 5000);
//         })
// }
// let p2 = async () => {
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve(20)
//                 }, 3000);
//         })
// }
// let p3 = async () => {
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve(30)
//                 }, 1000);
//         })
// }
// const run = async () => {
//         console.time("Run");
//         let a1 =  p1()
//         // console.log(a1);
//         let a2 =  p2()
//         // console.log(a2);
//         let a3 =  p3()
//         // console.log(a1, a2, a3);
//         let output = await Promise.all([a1,a2,a3])
//         console.log(output);
//         console.timeEnd("End");
// }
// run()


// let date = new Date();
// //let time = (date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()); 
// setInterval(() => {
//         console.log((date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()));
// },2000);

// function TimeRanges(){
//          let date = new Date();

//         return date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()       
// }

// setInterval(() => {
//                  console.log(TimeRanges());
//          },1000);


// setInterval(() => {
//         let date = new Date()
//         console.log(date.getHours()':');
// }, 1000);

// function play() {

//         var audio = new Audio('Har Har Shambhu Shambhu Shiv Mahadeva.mp3')
//         audio.play()
// }
// play()


// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/future.json',
//   params: {q: 'London', dt: '2022-12-25'},
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// let p1 = new Promise((resolve,reject)=>{
//         resolve(10)

// }).then((value)=>{
//         console.log(value);
// })

// let vikas="vikaS";
// let Vikas = "Vkas"
// console.log(Vikas);


// var name = "Vikas";
// // var name = "Satya";
// console.log(name);
// let a = null;
// let b = 123;
// let c = "Vikas";
// let d = Symbol('I am symbol');
// let e = true;
// let f = BigInt(346356363646);
// let g = undefined;
// console.log(a,b,c,d,e,f,g);
// console.log(typeof(a));

// const people = {
//         vikas: "Vikas",
//         satya: true,
//         vk: undefined,
//         v: 6
// }
// people.k="vk"
// // console.log(people['k']);
// console.log(people);
// let a = "vikas";
// // a=3
// // console.log(typeof(a));
// function hello(){
//         console.log("hello");
// }
// console.log(hello);


// let  num = 10;
// let num = 10;
// function hello(sum){

// }
// function greet(sum){
//         console.log(`Hello ${name}`);
// }
// greet(sum)
// function sum(num){
//         let name = "Vikas"
// }
// sum(greet)



function sum(a,b,fname){
        console.log(a+b);
        fname()
}
function add(){
        console.log(`The sum is given above`);
}
sum(2,4,add)



