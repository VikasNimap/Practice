// console.log("Hello");
// let data = [1,3,5,9];
// data.forEach((element)=>{
//      console.log(element*element);   
// })
// console.log(c);
// let str = "VIKAS";
// let out = Array.from(str);
// console.log(out);
// let data = [1,2,3,4,5];
// for(let i in data){
//         console.log(i);
// }
// let data = [1,2,3,4];
// for(let i in data){
//         if(data[i]>3)
//         console.log(data[i]);
// }
// let data = [1,2,3,4,5];
// let a = data.forEach((element,i,v)=>{
//         // console.log(element);
//         // console.log("printed");
//         // console.log(i);
//         // console.log("printed");
//         console.log(v);
//         console.log("printed");
// })
// let data = [1, 2, 3, 4];
// let a = data.map((value, index) => {
//         console.log(value, index);
//         return value * 2
// })
// console.log(a);

// let arr = [22,33,44,55,7,1,2,3,4,5,6];
// let a = arr.filter((value)=>{
//         return value<10
// })
// console.log(a, arr);

// let arr = [1,2,3,4,5];
// let c = arr.reduce((acc, curr)=>{
//         return acc+curr
// })
// console.log(c);

// let arr = [1,2,3,4,5];
// let c = arr.reduce((acc, curr)=>{
//         console.log(acc, curr);
//         return acc-curr
// })
// console.log(c);

// let arr = [10,20,30,40,50,12,1];
// let a = arr.filter((elements)=>{
//         return (elements%10==0)
// })
// console.log(a);

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((elements) => {
//         return elements*elements
// })
// console.log(newArr);

// let arr = [1,2,3,4,5];
// let a = arr.reduce((acc,curr)=>{
//         return acc*curr
// })
// console.log(a);
// let arr = [1,2,3,4,5];
// let num = 5;
// let store = 1
// for(let i = 1;i<=num;i++){
//         store*=i
// }
// console.log(store);

// let num = Math.random() * 100;
// num = Math.floor(num)
// let number = 0;
// number += num
// let a
// // while(number!=a) {
// //       a =  prompt("Enter a number to guess it correct")
// //       a = parseInt(a)
// //       alert("wrong guess")
// // }
// if(a===number){

//         console.log("Number guessed is correct");
// }
// else{
//         console.log("wrong");
// }

// console.log(console);
// let data = [1, 2, 3, 4];
// let a = data.map((element) => {
//         return element+element
// })
// console.log(a);
// let alpha = Math.random()*3;
// let ab = prompt("Enter S,W or G");
// let val ;
// confirm(`Are you sure you hve selected ${a}`)

// if(alpha==0){
// val = 'S'
// }
// else if(alpha==1){
// val = 'W'
// }
// else if(alpha==2){
// val = 'G'
// }
// if(alpha==val){
//         alert("YOu won")
// }
// else{
//         alert("You lose")
// }
// let a = confirm("Do you want to play again?")

// let ask;
// do{
// let inp = prompt("enter S, G or W");
// let rand = Math.floor(Math.random()*3);
// let val;
// if(rand == 0){
//   val = "S";
// }
// else if(rand == 1){
//   val = "W";
// }
// else if(rand == 2){
//   val = "G"
// }
// if(inp==val){
//   alert("you win");
// }
// else{
//   alert("you lose");
// }
// ask = confirm("want to play again ?");
// }while(ask)


// setTimeout(()=>{
//         alert("Helo")
// },3000)


// setInterval(() => {
//         let date = new Date();
//         console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
// }, 1000);
// function a(name,b){
//         console.log(`Hello ${name}`);
//         b()
// }
// function b(){
//         console.log("hello");
// }
// a("Vikas",b)
// let a = (name1,b) => {
//         console.log(`Hello ${name1}`);
//         b("Vikas")
// }
// let b = (name) => {
//         console.log(`Hello ${name}`);
// }
// a("Akash",b)

// let loadScript = (src,callback)=>{
//         document.createElement('script')
//         script.src=src
//         document.body.appendChild(script)
//         callback("Vikas")
// }
// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',callback)

// function callback(name){
//         console.log(`Hello ${name}`);
// }

// let loadScript = (src,callback)=>{
//         script = script.src
//         document.createElement('script')
//         document.body.appendChild(script)
//         append.h
//         callback("Vikas")
// }
// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',callback)

// function callback(name){
//         console.log(`Hello ${name}`);
// }
// try{
// let p1=new Promise((resolve, reject)=>{
//         return reject(56);
// })
// console.log(p1);
// }catch(err){
//         console.log(err);
// }

// let arr =  [1,2];
// let [arr1,arr2] = arr;
// console.log(arr1,arr2);

// let data = [1,2,3,4];
// let [arr1,arr2,...array] = data
// console.log(arr1);
// console.log(arr2);
// console.log(array);

// let a = +"ABCD"
// console.log(typeof a,a);
// console.log();
// let a = 3
// function myFunc(a){
//         console.log(a);
// }
// function myFunc2(){
//         myFunc(a)
// }
// myFunc2(myFunc)


