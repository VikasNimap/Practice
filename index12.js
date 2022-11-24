// let data = [

//         {fName: "Vikas",lName: "Maurya",age: 20},
//         {fName: "Satendra",lName: "Kushwaha",age: 20},
//         {fName: "Vishal",lName: "Pal",age: 22},
//         {fName: "Vishal",lName: "Pal",age: 232},
//         {fName: "Vishal",lName: "Pal",age: 22},
//         {fName: "Vishal",lName: "Pal",age: 222},
//         {fName: "Vishal",lName: "Pal",age: 242},
//         {fName: "Raksh",lName: "Maurya",age: 25}

// ]

// let output = data.reduce( (acc,curr) =>{
//     if(acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age]
//     }
//     else{
//         acc[curr.age] = 1
//     }
//     return acc
// },{});
// console.table(output);


// let data = [

//         {fName: "Vikas",lName: "Maurya",age: 210},
// {fName: "Satendra",lName: "Kushwaha",age: 20},
// {fName: "Vishal",lName: "Pal",age: 22},
// {fName: "Vishal",lName: "Pal",age: 232},
// {fName: "Vishal",lName: "Pal",age: 22},
// {fName: "Vishal",lName: "Pal",age: 222},
// {fName: "Vishal",lName: "Pal",age: 242},
//         {fName: "Raksh",lName: "Maurya",age: 255}

// ]
//  const names = [];
// let output = data.reduce( function (acc,curr){
//     console.log(acc.fName)

//     if(curr.age>20){
//         console.log(acc)
//          names.push[curr.fName]

//     }

// },[])
// console.log(names);

// const arr=[1,2,3,4,5,6,7]
// const newarr=[]
// const res=data.reduce((acc,curr)=>{
//     //console.log("acc:",acc)
//     if(curr.age>20) return data.map(x=>x.fName)

// },0)

// console.log(res)

// let string = 'hello vikas'
// console.log(string);

// let output = string.split('')
// console.log(output);

// console.log(Math.pow())

////////Factory functions
// function factoryFunctions(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode
//     }

// }
// let factoryFunctions1 = factoryFunctions("Rani Sati Marg","Mumbai Suburban",400097)
// console.log(factoryFunctions1);


///////////Constructor functions

// function Address(street,city,zipcode) {
//     this.street = street
//     this.city = city
//     this.zipcode = zipcode

// }
// let newAddress = new Address('Marg','Mumbai','400097')
// let anotherAddress = new Address('Marg','Mumbai','400097')
// // console.log(newCircle);
// function areSame(newAddress,anotherAddress){
//     return newAddress.street === anotherAddress.street &&
//     newAddress.city === anotherAddress.city &&
//     newAddress.zipcode === anotherAddress.zipcode

// }
// console.log((areSame(newAddress,anotherAddress)))

// function areEqual(newAddress,anotherAddress){
//     return newAddress === anotherAddress
// }
// console.log((areEqual(newAddress,anotherAddress)))
