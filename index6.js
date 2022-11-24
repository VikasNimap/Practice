// let array = [1,2,3,4,null,undefined,'',55,66,33,55,23]
// console.log(truthyValue(array));

// function truthyValue(array){
//     let count = 0;
//     for(let index of array){
//         if(index){
//             count++
//         }

//     }
//     return count;

// }


// let person = {
//     name: "Vikas",
//     age: 20,
//     sub: "JS"
// }
// console.log(stringProp(person));

// function stringProp(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string'){
//             console.log(key,obj[key]);
//         }
//     }
// }



// let person = {
//     name: "Vikas",
//     age: 20,
//     sub: "JS"
// }
// console.log(stringFind(person));
// function stringFind(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string'){
//             console.log(key,obj[key]);
//         }
//     }
// }

// let limit = 10;
// console.log(sumOf(limit));

// function sumOf(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 == 0) {
//             sum+=i

//         }

//     }
//     return sum
// }

// let marks = [0,0,0];

// function studentGrade(marks){
//     let total = 0;
//     for(let i in marks){
//         total += marks[i];
//     }
//     const avg = total/marks.length;
//     if(avg>=90 && avg<=99){
//             console.log("A"); 
//         }
//     else if(avg>79 && avg<=89){
//             console.log("B"); 
//         }
//     else if(avg>=70 && avg<=79){
//             console.log("C"); 
//         }
//     else if(avg>=60 && avg<=69){
//             console.log("D"); 
//         }
//     else if(avg>=1 && avg<=59){
//         console.log("F"); 
//     }
//     else if(avg<1){
//         console.log("FAIL"); 
//     }

// }
// studentGrade(marks);

// function star(rows){
//     for(let i = 1;i<=rows;i++){
//         let pattern = '';
//         for(let j = 0;j<i;j++){
//             pattern += '* '

//         }console.log(pattern);
//     }
// }star(5)

// let int = reverseInt(123)
// function reverseInt(int){
//     return (
//     // parseFloat(
//         int
//         .toString()
//         .split('')
//         .reverse()
//         .join('')

//     )
// }console.log(int);


//  primeNumber(50);
// function primeNumber(limit) {
//     for (let i = 2; i <= limit; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {

//             console.log(`${i}`);
//         }
//     }
// }
// console.log(prime);
