/ class student{
//     constructor(name,age){
//         this.studentname = name;
//         this.studentage = age;
//         console.log("constructor-Function");
//     }
//     hello(){
//         console.log("Hello",this.studentname + " " + "your age is" + this.studentage);
//     }
// }
// let output = new student("Vikas",20)
// // output.name  = "Viaks"
// output.hello()

// class employee {
//     constructor(name,salary) {
//         this.empname  = name
//         this.salary  = salary
//         console.log("Hello " + this.empname);
//     }
//     info(){
//         console.log("Employee Is:" + this.empname,"Salary" + this.salary);
//     }
// }
// class manager extends employee { 
//     info(){
//         let td = 1000;
//         let pd = 300;
//          this.total = this.salary+td+pd
//         console.log("Manager is "+this.total);
//     }
// }
// let out = new employee("Vikas",12000);
// let output = new manager("Ram",20000);
// // console.log(out);
// // console.log(output);
// out.info()
// output.info()
// let data = [1,2,3,4,5,6,7,8,9];
// let total = data.reduce((acc,curr) =>
// acc+curr)
// let result = total**data.length;
// console.log(result);
// let data = [1,2,3,4,5];
// let t = Math.random(1,4);
// setInterval(() => {
//     t++
//     console.log(t);
// }, 1000);

// function prom(){
//     return new Promise((resolve,reject) =>{
//         console.log("Promise started");

//         setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/posts',function(data){
//                 console.log(data);
//             })
//         }, 1000);
//     })
// }
// prom(10,5).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// let promiseCall = ((returnData,msg)=>{
//     return function(resolve,reject){
//         setTimeout(() => {
//             console.log(`The ${msg} promise has resolved.`);
//             resolve(returnData)
//         }, returnData*100);
//     }
// })
// let p1 = new Promise(promiseCall(10,"First"));
// let p2 = new Promise(promiseCall(20,"second"));
// let p3 = new Promise(promiseCall(30,"third"));
// let p4 = new Promise(function(resolve,reject){
//     reject("The 4th promise has been rejected")
// });

// let total = 0
// Promise.all([p1,p2,p3,p4]).then((result) => {
//     for(let i in result){ total += result[i]}
//         console.log(`Results: ${result}`);
//         console.log(`total: ${total}`);  
// }).catch((error) => { 
//     console.log(`Error: ${error}`)
// });

// function Circle(radius){
//     this.radius = radius

// };
// Circle.prototype.move = function(){
//     this.draw()
//     console.log("move");
// }
// const c1 = new Circle(5);
// console.log(c1);

// Circle.prototype.toString = function(){
//     return "Circle radius is:" + this.radius
// }
// Circle.prototype.draw = function(){
//     console.log("draw");
// }

// function Stopwatch() {
//     let start, stop,running, duration = 0;
//     Object.defineProperty(this, 'duration', {
//         get: function () { return duration },
//         set: function(value) {duration=value}
//     })
//     Object.defineProperty(this, 'start', {
//         get: function () { return start }
//     })
//     Object.defineProperty(this, 'stop', {
//         get: function () { return stop }
//     })
//     Object.defineProperty(this, 'running', {
//         get: function () { return running }
//     })
// };
// Stopwatch.prototype.start = function () {
//     if (this.running) {
//         throw new Error("Stopwatch has already Started.")
//     }
//     this.running = true
//     this.start = new Date();
// };
// Stopwatch.prototype.stop = function () {
//     if (!this.running) {
//         throw new Error("The Stopwatch is not started.");
//     }
//     this.running = false
//     this.stop = new Date();
//     let seconds = (stop.getTime() - start.getTime()) / 1000;
//     this.duration += seconds;
// };
// Stopwatch.prototype.reset = function () {
//     this.start = null;
//     this.end = null;
//     this.running = false;
//     this.duration = 0;

// }

// let sw1 = new Stopwatch();
// console.log(sw1);
// function Shape(color){
//     this.color = color;
// }
// Shape.prototype.duplicate = function(){
//     console.log("Duplicate");
// }
// Circle.prototype = Object.create(Shape.prototype);
// function Circle(radius,color) {
//     Shape.call(this,color);
//  this.radius = radius;
// }
// Circle.prototype.draw = function(){
//     console.log("Draw");
// }

// const s = new Shape();
// const c = new Circle(2,"Blue");
// console.log(c);

//Inheritance using prototype
// const proto = {
//   slogan: function(){
//     return `This is best`
//   },
//   changeName: function(newName){
//     this.name = newName
//   }
// }

// let vk = Object.create(proto,{
//     name:{value: "Vikas", writable:true},
//     role:{value: "JS"}
// })
// vk.changeName('Viks')
// // console.log(vk);
// function Employee(name,salary,experience){
//     this.name = name;
//     this.salary = salary;
//     this.experience = experience;
// }
// Employee.prototype.slogan = function(){
//     return `This comp is best,regards ${this.name}`
// }
// let output = new Employee("ViKaS",20000,2)
// // console.log(output.slogan());
