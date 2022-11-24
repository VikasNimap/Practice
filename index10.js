
// let a = ["BBB",'AAA','Cab','ACB','ABC'];
//Event listeners
// function attach(){

//     let count = 0
//     document.getElementById('clickMe').addEventListener('click',
//     function xyz(){
//         console.log("Hello i'm clicked",++count);
//     })
// }
// attach()

//  a = (num1,num2) =>{
//     console.log("hello");
//     sum = num1+num2
//     console.log(sum); 

// }
// a(4,12);   


// let array = ["vikas","Satendra","Virenra"]
// array.shift()
// console.log(array);

// console.log(Array.from("Vikas"));

// var sum = 0
// const number = [1,2,3,4,5]
// number.forEach(function(number){
//     sum+=number+" "
//     console.log(sum);
// })
// function cb() {
//     console.log("callback");
// }
// cb()
// setTimeout(function cb() {
//     console.log("callback");
// }, 5000);
// console.log("End");

// //while loop to keep execution context busy

// let startDate = new Date().getTime;
// let endDate = startDate;
// while(endDate < startDate + 10000){
//     endDate = new Date().getTime;
// }

// console.log("While loop Expirees");


// const radius = [5,10,15,20];
// const areaOfCircle = function (radius){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push (Math.PI*radius[i]*radius[i])
//         // output = Math.floor()
//     }
//     return output
// }
// console.log(areaOfCircle(radius));

// let radius = [1,2,3,4,5]
// let area = function(radius){
//     return Math.PI*radius*radius
// }
// const calculate = function (radius,logic){
//     let output = []
//     for(let i = 0;i<radius.length;i++){
//         output.push(logic(radius[i]))
//     }return output
// }
// console.log(calculate(radius,area));
// let radius = [1,1,1,1]
// let logic = function(radius){
//     return 2*Math.PI*radius
// }
