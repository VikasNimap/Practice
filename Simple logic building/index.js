//Q1 // let arr = [454,22,33,44,77,23,11,0,345,354,354,456];         //find second max
// let max1 = 0;
// let max2 = 0;
// for(let i =0;i<arr.length;i++){
//         if(arr[i]>max1){
//                 max1=arr[i]
//         }
// }
// for(let i in arr){
//         if(arr[i]>max2 && arr[i]<max1){
//                 max2 = arr[i]
//         }
// }
// console.log(max2);

//Q2 // let num = 456;                                            //reverse of an integer
// let num = 123;
// let str = '';
// while(num>0){
//         let res = num%10
//         str += res
//        num = Math.floor(num/10)

// }
// console.log(str);


//Q3 //// let a = 10;                                         //Swapping without 3rd variable
// let b = 12;
// a=a+b
// b=a-b
// a=a-b
// console.log(a);
// console.log(b);

//Q4 //function anagram(str1,str2){                         //Check anagram string
//         let a = Array.from(str1).sort().join('')
//         let b = Array.from(str2).sort().join('')
//         if(a===b) console.log(`The given string is Anagram`);
        
//         else console.log(`The given string does not follow Anagram property`);
        
// }
// anagram("heart","earth")



//Q5 // let str = "Vikas";                                  // reverse of string
// let a = Array.from(str);
// a=a.reverse().toString().replaceAll(',',"")
// console.log(a);




