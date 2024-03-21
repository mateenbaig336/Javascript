// What are objects?
// Objects are variables that hold multiple pieces of information. In JavaScript, objects are created
// with curly braces {}.

//const person = new Object();
// console.log(typeof person);
// person.name = "John";
// person.age = 30;
// person.city = "New York";
// console.log(person.name);

// method 2: Using the object literal syntax:
// const person2 = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// person2.name = "Jane";
// console.log(person2);
// delete person2.name;
// console.log(person2["name"]);
// console.log(person2);

// Adding Methods to Objects

// const carObj = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1969,
//   color: "red",
//   description: function () {
//     // console.log(this);
//     return `${this.make} ${this.model} ${this.year}`;
//   },
// };
//  console.log(carObj);
//  console.log(carObj.description());

// //Example:
// const student = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// for (let key in student) {
//   console.log(key,  student[key] );
// }

const student2 = {
  name: "John",
  age: 30,
  city: "New York",
};

//The Object.keys() method takes an object as its parameter and 
//returns an array containing the names of all the enumerable own properties of the object.

const keys = Object.keys(student2);
console.log(keys);

keys.forEach((k) => {
  console.log(k, student2[k]);
});





// const man = {
//   name: "Mateen",
//   age: 19,
//   city: "Lahore"
// };
// const keys = Object.keys(man);
// console.log(keys);
// keys.forEach((m) =>{
//   console.log(m, man[m]);

// })







// const student4 = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   height: 1.8,
//   weight: 80,
// };
//The Object.entries() method is used to return an array of a given object's 
//own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
// So, entries will contain an array of arrays where each inner array consists 
//of a key-value pair from the student4 object.

// const entries = Object.entries(student4);
// console.log(entries);

// using forEach loop

// entries.forEach((m) => {
//   console.log(m);
// });
// entries.forEach(([key, value]) => {
/*In JavaScript, ${} is part of a feature called "template literals" or "template strings".
Template literals are a way to concatenate strings with variables or expressions in a more readable 
and convenient manner than traditional string concatenation using the + operator.
Here's a brief overview of how template literals work:
Template literals are enclosed in backticks (` `) instead of single or double quotes.
Inside a template literal, you can embed variables or expressions using ${} syntax.
These are called "placeholders" or "substitutions".
When the template literal is evaluated, the expressions inside ${} are replaced with their corresponding values,
and the entire template literal is converted into a single string. */

//   console.log(`${key}: ${value}`);
// });


/////////////////////////////////////////////////
//Global Scope
//--------

// let user = {
//   name: "Ben",
//   age: 20,
// };

// const amtOfMoney = 100;

// function getUserInfo(objUser) {
//   console.log(`${objUser.name} is ${objUser.age} years old`);
// }

// //update user

// function changeUserInfo(obj) {
//   obj.name = "John";
//   obj.age = 30;
// }
//  getUserInfo(user);
//  changeUserInfo(user);
//  getUserInfo(user);


/////////////////////////////////////////////
//Block Scope
//--------
// let age = 30;

// if (age > 18) {
//   let msg = "You are old enough";
//   console.log(msg);
// }
// console.log(msg);
// console.log(age);

/////////////////////////////////////////////
//Function Scope
//--------

// const myFn = () => {
//   console.log(x);
//   let x = "Hello";
// };

// myFn();

/////////////////////////////////////////////
//Lexical Scope
//--------

// function myFn1() {
//   let x = "Hello";
//   console.log(y);
//   function anotherFn() {
//     let y = 10;
//     console.log(x);
//   }

//   //invoke
//   anotherFn();
// }

// myFn1();

/////////////////////////////////////////////
//------
//High order function vs function as first class citizen in javascript
//------

//Functions returning function

// function addTwoNums() {
//   return function (a, b) {
//     return a + b;
//   };
// }

//invoke
// const ans = addTwoNums();
// console.log(ans(2, 2));

//another way of calling this fn

// const ans = addTwoNums()(2, 2);
// console.log(ans);

//assign fn to a variable

// function sayHello() {
//   console.log("How are you");
// }

// const rseult = sayHello;

// rseult();
// sayHello();

//store fn in arr

// function sayHello() {
//   console.log("Hello");
// }

// function sayHi() {
//   console.log("Hi");
// }

// const arr = [sayHello, sayHi];

// arr[0]();
// arr[1]();

//-----
//High Order Function (HOF)
//-----
// > function pass an argument to another function is called call back function
//Calc Bill
// const calcBill = function (qyt, price) {
//   return qyt * price;
// };

//Display Bill
// const displayBill = function (calcBillFn) {
//   console.log(calcBillFn);
// };

// displayBill(calcBill(2, 5));

//---------
//IIFE - Immediately Invoked Function Expression
//-------

// function logHello() {
//   console.log("Hello normal function");
// }

// logHello();

// using IIFE
// (function sayhello() {
//   logHello();
// })();

// (() => console.log("Another IIFE"))(); //(Immediately Invoked Function Expression)

/////////////////////////////////////////////////////////
