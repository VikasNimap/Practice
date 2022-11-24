// function Programmer(name,salary,experience,language){
//     Employee.call(this,name,salary,experience);
//     this.language = language
// }
// Programmer.prototype  = Object.create(Employee.prototype)

// let rohan = new Programmer("Rohan",30000,5,"JAVASCRIPT")
// console.log(rohan.slogan());

// class Employee {
//     constructor(givenName, givenExperience, givenDivision) {
//         this.name = givenName;
//         this.experience = givenExperience;
//         this.division = givenDivision;
//     }
//     slogan() {
//         return `I am ${this.name} and this comp. is best`
//     }
//     joiningYear() {
//         return 2022 - this.experience;
//     }
// }

// class Programmer extends Employee() {
//     constructor(givenName, givenExperience, givenDivision, language) {
//         super(givenName, givenExperience, givenDivision, language)
//         this.language = language
//     }

//      favLanguage(){
//         if(this.language=='Python'){
//             return 'python'
//         }
//         else{
//             return 'js'
//         }
//     }
// }

// let Vikas =  new Programmer("VIKS",3,"JAVSC","Javascript");
// console.log(Vikas);
// class Library{
//     constructor(bookList){
//         this.bookList = bookList;
//         this.issuedBooks = {};
//     }
//     getBookList(){
//         this.bookList.forEach(element => {
//             console.log(element);
//         });
//     }
//     issueBook(bookname, user){
//         if(this.issuedBooks[bookname] == undefined){
//             this.issuedBooks[bookname]=user
//         }
//         else{
//             console.log("Book is already Issued.");
//         }
//     }
//     returnBook(bookname){
//        delete this.issuedBooks[bookname]
//     }
// }
// let vkLibrary = new Library(["1st Day","An Afternoon"]);
// vkLibrary.getBookList()
// console.log(vkLibrary);
// vkLibrary.issueBook("An Afternoon","Vk");
// vkLibrary.returnBook("An Afternoon");
// console.log(vkLibrary);

// let data = [11,33,44,55];
// let position = 1;
// let element = 100;
// for(let i =data.length-1;i>=position;i--){
//     if(i>=position){
//         data[i+1]=data[i]
//     }
//     if(i==position){
//         data[i]=element
//     }
// }
// console.log(data);
