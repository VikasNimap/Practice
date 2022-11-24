// function BlogPost(title,body,author){
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }
// let newConstructor = new BlogPost("PUBG","Playing","Squad",5,"Play Better")
// console.log(newConstructor);

// const number = [1, -1, 2, 3, 4, 5];
// let sum = number.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// })
// console.log(sum);
// const data = [1, 3, 4, 5];
// let output = function (data, searchEl) {

//     for (let i = 0; i < data.length; i++) { 
//         if (data[i] === searchEl) {
//             return true   
//         }  
//     }
//     return false;
// }
// console.log(output(data,11));
//$$$$$$$$$$$$$$$$$$ swapping without using 3rd variable
// let number1 = 1000;
// let number2 = 500;
// number1 = number2 + number1
// // console.log(number1);
// number2 = number1 - number2 
// // console.log(number2);
// number1 = number1 - number2
// // console.log(number1);
// console.log(`Number1 is ${number1}`);
// console.log(`Number2 is ${number2}`);

//$$$$$$$$$$$$ PAttern print
// function patternPrint(rows){
//     for(let i = 1 ;i<=rows;i++){
//         let str = ""
//         for(let j = 1;j<=i;j++){
//             str+=" * "
//         }console.log(str);
//     } 
// }
// patternPrint(5)

// let numbers = [1,2,3,4,5];
// function remove(numbers,excluded){
//     let array = []
//     for(let elements of numbers){
//         if(!excluded.includes(elements)){
//             array.push(elements)
//         }
//     }
//     return array

// }
// let output = remove(numbers,[1])
// console.log(output);

// let data = [1,2,3];
// function moving(data,index,position){
//     let output = [...data]

//     let element = output.splice(index,1)[0]
//     output.splice(index+position,0,element)
//     return output


// }
// let a = moving(data,0,2);
// console.log(a);

// let data = [1, 2, 3, 1];
// function counter(data, searchEl) {
//     return data.reduce((accumulator, currentValue) => {
//         let occurance = (currentValue===searchEl) ? 1 : 0
//         console.log(accumulator,currentValue,searchEl);
//         return accumulator + occurance
//     },0)
// // return occurance
// }
// let output = counter(data, 1);
// console.log(output);

///////////SSSSSSSSS  MAx of array
// let array = [-2,-3,-456,-55,-44,-77,-88]
// function maximum(array){
//     let max = array[0];
//     for(let element in array){
//         if(array[element]>max){
//             max = array[element]
//         }
//     }
//     return max
// }
// let output = maximum(array);
// console.log(output);
// let movies = [
//     { title: "a", year: 2017, rating: 3.4 },
//     { title: "c", year: 2018, rating: 4.5 },
//     { title: "b", year: 2018, rating: 4.2 },
//     { title: "d", year: 2022, rating: 4.8 },
//     { title: "e", year: 2015, rating: 4.0 },
// ];
// //write code to filter movies year and rating 
// // write code to keep rating in descending order
// // write code to keep  title only in output
// const titles = movies
// .filter (m =>m.year === 2018 && m.rating >4)
// .sort((a,b) =>a.rating - b.rating )
// .reverse()
// .map(m =>m.title)
// console.log(titles);

// function sum(discount,...price){///using rest operator
//     let total = price.reduce((a,b) => 
//         a+b)
//         return total *(1-discount)
// }                 
// console.log(sum(0.1,3,4,5,6,7,8,9,0));
