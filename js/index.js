// console.log("hello");
// const data = [33,22,11,1,2,8,5,77,99,11];
// for(let i = 0;i<data.length;i++){
//     for(let j = 0;j<i;j++){
//         if(data[i]<data[j]){
//             let temp = data[i]
//             data[i] = data[j]
//             data[j] = temp
//         }
//     }
// }
// console.log(data);

// function factorial(num){
//     if(num==0){
//         return 1
//     }
//     return num * factorial(num - 1)
// }
// console.log(factorial(6));

// let arr = ["vikas","satendra","node"];;
// let i = 5;
// while(i<arr.length){
//     console.log(arr[i]);
//     arr++
// }
// function a(){
//     let i = 1;
//     console.log("a called");
//     while(i<10){
//         a()
//         i+1
//     }
// }
// a()
// let num = 5;
// let a = 0
// for(let i = num;i>=1;i--){
//      a += (i*(i-1))
// }
// console.log(a);
// let a = 10;
// console.log(a);
// {
//     console.log(a);
//     let a = 5;
// }
// console.log(a);
// {
//     a = 10;
// }
// console.log(a);
// let a = 10;
// {
//     {
//         {
//             {
//                 {
                    
//                     {
//                         {
//                             {
//                                 {
//                                     {
//                                         {
//                                             let a = 20
//                                         }
//                                         console.log(a);
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// var a = 10;
// {
//     var a = 100;
//     console.log(a);
// }
// console.log(a);
// const a = 10;
// {
//     var a = 90;
// }
// let arr = [23,110,99,86,54,45,3];
// let max1 = 0;
// let max2 = 0;
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max1){
//         max1 = arr[i]
//     }
// }
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>max2 && arr[i]<max1){
//         max2 = arr[i]
//     }
// }
// console.log(max2);

// let num = 123;
// let res = 0;
// // while(num>0){
// //     res = (res*10) + num%10
// //     num = Math.floor(num)
// // }
// // console.log(res);
// const express = require('express');
// const app = express();
// // const tz = require('timezone')
// const moment = require('moment-timezone');
// moment().format('YYYYMMDD HH:mm:ss');
// const port =process.env.PORT || 9000;
// app.get('/time/:country/:timezone',async(req,res)=>{
//     const country = req.params.country;
//     const timezone = req.params.timezone;
//    const response =  await moment.tz(`${country}/${timezone}`).toString();
//     res.send({'message':'success',result:response})
// })
// app.listen(port,()=>{
//       console.log(`server listening ${port}`);
// })
// let str = "Satendra";
// let s = str.split('')
// let a = s.reverse();
// let t = a.join('')
// console.log(t);









































































































