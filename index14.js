// let person = {
//     fname: "Vikas",
//     lname: "Maurya",
//     set fullname(value){

//         if(typeof value != 'string'){
//             throw new Error('Value is not string')
//         }
//         const parts = value.split(" ")
//         if(parts.length != 2){
//             throw new Error("name should have more then 2 letters")
//         }
//         this.fname = parts[0]
//         this.lname = parts[1]
//     }
// };
// try{
//     person.fullname = ''

// }catch(e){
//     console.log(e);
// }
// console.log(person);

// function start() {
//     for (let i = 0; i < 5; i++) 
//         console.log(i);

//     // console.log(i);
// }
// start()

// let video = {
//     title: "a",
//     tags: ['Tag 1','Tag 2','Tag 3'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title,tag);
//         })
//     }
// }
// video.showTags()











// let video = {
//     title: "A",
//     tags: ['a','b','c'],
//     showTags() {
//         this.tags.forEach( (tag) =>{
//             console.log(this.title,tag);
//         })
//     }
// }
// video.showTags()

// function sum(...args){
//     if(args.length == 1 && Array.isArray(args[0]))
//     args = [...args[0]]


//      return args.reduce((a,b) => a+b )
// }

// console.log(sum([1,2,3,4,5]));

// let circle = {
//     radius: 5,
//     get  area() {
//         return Math.PI *( this.radius * this.radius)
//     },

// }
// circle.radius = 5 
// console.log(circle.area);


// try{

//     let number = [5,2,3,4,5];
//     let count = occurances(null,5);
//     console.log(count);
// }catch(e){
//     console.log(e.message);
// }

// function occurances(number,searchEl){
//     if(!Array.isArray(number)){
//         throw new Error("Invalid Array")
//     }
//     return number.reduce((accumulator,current) =>{
//         const occurance = (current === searchEl) ? 1 : 0
//         return accumulator + occurance
//     },0)
// }


// try{
// let number = [1, 2, 3, 4];
// let output = sum(null);
// console.log(output);
// }
// catch(e){
//     console.log(e.message);
// }
// function sum(number) {
//     let total = 0
//     if (!number === 'string') {
//         throw new Error("Please Enter Valid Array")
//     }
//     for(let values of number){
//         total +=  values
//     }
//     return total
// }
// function Stopwatch(){
//     let start, stop, running, duration = 0;
//     this.start = function(){
//         if(running){
//             throw new Error("Stopwatch has already Started.")
//         }
//         running = true
//         start = new Date();
//     };
//     this.stop = function(){
//         if(!running){
//             throw new Error("The Stopwatch is not started.");
//         }
//         running = false
//         stop = new Date();
//         let seconds = (stop.getTime()-start.getTime())/1000;
//         duration += seconds;
//     };
//     this.reset = function(){
//         start =  null;
//         end =  null;
//         running =  false;
//         duration = 0;
//         Object.defineProperty(this,'duration',{
//             get: function(){return duration}
//         })
//     };

// }
// const sw = new Stopwatch();
// sw.start();
// sw.stop();
// sw.duration();
// console.log(sw.reset());


// let sum = (...args) => {
//     let total = 0;
//     for(let i in args){
//         total += args[i]
//     }
//     return `The total sum is: ${total}`
// }
// let array = [1,2,3,4,5,6,7,8,9]
// console.log(sum(...array));


// let a = new Object();
// a.fname = "Vikas";
// a.lname = "Maurya";
// console.log(a);

// let fname = "Vikas"
// let age = 20;
// let sub = "Js"
// let details = {
//     fname,
//     age,
//     sub,
// }
// // let details1 = new details("Vikas",20,"js");
// console.log(details);


// let n = "student";
// let person = {
//     [`${n} name`]: "Vikas",
//     course: "JS"
// }
// console.log(person);
// console.log(person.course);

// let person = {
//     name: "Vikas",
//     sum(...args){
//         let total = 0;
//         for(let i in args){
//             total+= args[i]
//         }
//         return total
//     }
// }
// let array  = [1,2,3,4,5,6,7,8,9];
// console.log(person.sum(...array));

// let name = "Vikas";
// let age = 20;
// let person = (name,age) =>{
//     return {name,age}
// }
// console.log(person(name,age));
// person = ["vikas",20,23,45,6,789,123]
// let [name,age,...array] = person;
// console.log(name);
// console.log(age);
// console.log(array);

// let person  = ([name,age,sub]) =>{
//     console.log(name);
//     console.log(age);
//     console.log(sub);
// }
// person(["Vikas",20,"JS"])

//object destructuring
// let person = {
//     name: "vikas",
//     age: 20,
//     subject: "js"
// };
// let {name,age,subject} = person
// console.log(person.name);
// console.log(person.age);
// console.log(person.subject);
// // let user = {"Vikas",20, "JS"}

//classes in js
// class hello {
//      message = ()=>{
// console.log("Hii");
//     }
// }
// let output = new hello();
// // console.log(output);
// output.message();
// class student{
//     constructor(){
//         let name;
//         console.log("Hii");
//     }
//     hello(){

//     }
// }
// let factorial = (num) => {
//     if(num==0) return 1
//     else{
//         return num*factorial(num-1)
//     }
// }
// let output = factorial(5)
// console.log(output);
