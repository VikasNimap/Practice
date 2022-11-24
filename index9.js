
// function a(){
//     console.log("a called");
// }
// // var b = 
// (function (){
//     console.log("b called");
// })();

// const test=str=>{
//     console.log(str)
// }

// test("abcd")



// let b = function call(param1){
//     return  function call1(){
//         console.log(param1);
//     }
// }
// console.log(b("vikas"))

//CALLBACK FUNCTIONS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function x(name,y){

//         setTimeout(() => {

//             console.log("I am hello 1");
//             console.log("I am hello 2");
//             console.log("I am hello 3");
//             console.log("I am hello 4");
//             console.log("I am hello 5");
//             console.log(`Hello ${name}`);
//         }, 5000);

//     y()

// }
// x("vikas",function y(){
//     setTimeout(() => {

//         console.log("I am hello 6");
//     }, 1000);
// })
// console.log();


// function calling(name,callback){

//         console.log(`Hello ${name}`);

//         callback();

// }

// function callback(){
//       return  console.log("vikas");  
// }

// calling("Vikas",callback)



// function x(y){
//     setTimeout(() => {

//         console.log("hello");
//     }, 2000);
//     y("vk");
// }
// function y(name){
//     console.log(`hello ${name}`)
// }
// y("vikas")
// x(y)

// let circle = {
//     radius: 5,
//     diameter: 10
// }
// let anotherCircle = Object.assign( {color: 'yellow',x: 'heee'},circle);
// // for(let key in circle){
// //     anotherCircle[key]  = circle[key]
// // }

// console.log(anotherCircle);

// var a = 20
// function c(){
//     var a = 10;
//     console.log(a);
// }
// c()
// console.log(a);
// console.log(typeof(typeof(undefined)))
// let data = [1,2,34,4]
// data.unshift(100)
// console.log(data);


// var a = 10
// var a = 30
// console.log(a);
