// console.log("hii...");
// console.log("Hello");
// setTimeout((func) => {       
//         for(let i = 0;i<1000;i++){
//                 console.log(i);        
//         }
//         func();
// }, 3000);
// console.log("End");
// function func(){
//         console.log(2*3)
// // }
// function name(){
//         console.log("hello Vikas");
// }
// name()
// (function hello(){
//         console.log("Hello");
// }())
// let obj1 = {
//         name: "vikas",
//         language: "js",
//         feature: function(rating,subscribe){
//                 console.log(`${this.name},${this.language},${rating},${subscribe}`);
//         }
// }
// let obj2 = {
//         name: "Vikash",
//         language: "javascript",
// }
// obj1.feature(4,'support')
// obj1.feature.call(obj2,5,"v")
// console.log(obj2);
// let max = Math.max([1,2,3,4])
// console.log(max);
// let a =Math.max.apply(null,[1,2,3,4,5,6])
// console.log(a);
// let a = 5;
// let b = 10;
// [a,b]= [b,a]
// console.log(a);
// console.log(b);
// let student = () => {
//         setTimeout(() => {
//             console.log("getting roll no"); 
//             let rool = [1,2,3,4]   ;
//             console.log(rool);

//         setTimeout((rool) => {
//                 let biodata = {
//                         name: "Vikas",
//                         age: 22
//                 }
//                 console.log(`${biodata.name},${rool}`);
//         setTimeout((name) => {
//                 biodata.gender = "Male"
//                 console.log(`${biodata.gender},${name}`);
//         }, 2000,biodata.name);
//         }, 2000,rool[1]);
//         }, 2000);

// }
// student()
// let student = ()=>{
//         console.log("getting student details");
//         setTimeout(() => {
//                 let roll = [1,2,3,4,5];
//                 console.log(roll);
//         setTimeout((roll) => {
//                 let person = {
//                         name: "viks",
//                         age: 21
//                 }
//                 console.log(`My nameis ${person.name} and age is ${person.age} and roll no is:${roll}`);
//         setTimeout((name,roll) => {
//                 person.gender = "Male";
//                 console.log(`${person.gender},${name}`);
//         }, 2000,person.name,roll[3]);
//         }, 2000,roll[3]);
//         }, 2000);
// }
// student()
// let num = 12;
// let p1 = new Promise((resolve, reject)=>{
//         if(num>10){
//                 resolve(num)
//         }
//         else{
//                 reject(new Error("Error occured"))
//         }
// }).then((num)=>{
//         console.log(`Fulfilled ${num}`);
// }).catch((err)=>{
//         console.log(err.message);
// })


// let num = 20;
// let abc = (num) => {
//         let p1 = new Promise((resolve, reject) => {
//                 if (num > 10) {
//                         resolve(num)
//                 }
//                 else {
//                         reject(new Error("Error occured"))
//                 }
//         })
//         return p1
// }
// abc(num).then((num) => {
//         console.log("the number is",num);
//         return num * 2;
// }).then((num) => {
//         console.log("the num is",num);
//         return num * 3;
// }).then((num) => {
//         console.log(`The final value is: ${num}`);
// }).catch((err) => {
//         console.log(err.message);
// })
let screen = document.getElementById('screen');
let string = ""

let btn = document.getElementsByTagName('button');
Array.from(btn).forEach((button)=>{
        button.addEventListener('click',(e)=>{
                if(e.target.innerHTML == '='){
                        string=eval(string)
                        screen.value=string
                }
                else if(e.target.innerHTML == 'C'){
                        string = ""
                        screen.value=string
                }
                else{
                string = string + e.target.innerHTML
                screen.value = string
                // console.log(screen);
                }
        })
})





























































































































































































































































































