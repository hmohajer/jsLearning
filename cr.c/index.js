// console.log("hello");
// console.error("an error");


// const fname = "Ben";
// const age = 25;
// console.log(`my name is ${fname} and i am ${age}`);
// const s = "Hello World!";
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(" "));
// // console.log(s.split(""));
// // const numbers = new Array(1,2,3,4,5,6);
// // console.log(numbers);
// const fruits = ["apple", "orange", "pear", 10, ];
// console.log(fruits[1]);
// fruits[3] = "grape";
// fruits.push("mango");
// fruits.unshift("strawberies")
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits.indexOf("pear"))



// const person = {
//     firstName: "john",
//     lastName: "Dam",
//     age: 30,
//     hobbies:["music","movie", "sport"],
//     address: {
//         street: "10 voordallee",
//         city: "Boston",
//         country: "US"
//     }
// }
// person.email="john@gmail.com";
// console.log(person);
// const {firstName, lastName, address :{city}} = person;
// console.log(firstName, city);


//     {
//         id:2,
//         text:"Meeting",
//         isCompleted: true
//     },
//     {
//         id:3,
//         text:"Dentist appoinment",
//         isCompleted: false
//     },
// ];

// for(let i = 0; i < todo.length; i++){
//     // console.log(todo[i].id);
// }
// for(let td of todo){
//     // console.log(td.text);
// }

// todo.forEach(function(td) {
    // console.log(td.text);
// });
// const todoText = todo.map(function(td) {
//     return td.text;
// });
// console.log(todoText);

// const todoCompleted = todo.filter(function(td) {
//     return td.isCompleted === true;
// }).map(function(td){
//     return td.text;
// });
// console.log(todoCompleted);

// todo.forEach(td => console.log(td));

// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

// for(let i=0;i<10;i++){
//     // console.log(i);
// }

// let i = 0;
// while (i < 10){
//     // console.log(i);
//     i++;
// }

// let x = 23;
// if(x === 10){
//     console.log("it's 10");
// } else {
//     console.log("x is not 10");
// }
// let y = 15;
// if (x < 22 || (y > 12 && x > 23)){
//     console.log("one nice condition");
// }
// const color = x > 20 ? "red" : "blue";
// console.log(color);
// switch (color) {
//     case "red":
//         console.log("color is red");
//         break;
//     case "blue":
//         console.log("color is blue");
//         break;
//     default:
//         console.log("color is not red or blue");    
//         break;
// }

// function addNums(num1 = 1,num2 = 1){
//     return num1 + num2;
// }
// console.log(addNums()); 
// console.log(addNums(2,4));
// const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums2(2,4));
// const addNums3 = num1 => num1 + 6;
// console.log(addNums3(4));

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
    // this.getBirthYear = () => this.dob.getFullYear();
    // this.getFullName = () => `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }
// Person.prototype.getFullName = () => `${this.firstName} ${this.lastName}`;

// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }

// }

// const person1 = new Person("john","janson", "12-24-1987");
// const person2 = new Person("Mary","jans", "7-25-1992");
// console.log(person1);
// console.log(person2.dob);
// console.log(person2.getBirthYear());
// console.log(person1.getFullName());

// console.log(window);
//single element selector
// console.log(document.getElementById("my-form"));
// const form = document.getElementById("my-form");
// console.log(form);
// console.log(document.querySelector("#my-form"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("h1"));


//multiple element selector

// console.log(document.querySelectorAll(".item"));

// const items = document.querySelectorAll(".item")
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello Dear!";
// ul.children[1].innerText = "How yo doin?";
// ul.lastElementChild.innerHTML = "<h4>Hello again!</h4>"
// const btn = document.querySelector(".btn");
// btn.style.background = "red";
// const btns = document.querySelectorAll(".btn");
// btns.forEach((bt) => bt.style.background = "darkblue");

// btn.addEventListener("click", (e) => {
// btn.addEventListener("mouseover", (e) => {
// btn.addEventListener("mouseout", (e) => {
//     e.preventDefault();
//   // console.log(e.target.className);
//     document.querySelector("#my-form").style.background = "#aaa";
//     document.querySelector("body").classList.add("bg-dark");
//     document.querySelector(".items").lastElementChild.innerHTML = "<h1>hellooooo</h1>";
//     document.querySelector(".items").lastElementChild.style.color = "black";

// })

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add("error");
        msg.innerHTML = "<p>Please enter all fields.</p>";
        setTimeout(() => msg.firstElementChild.remove(), 3000);
    }else{
        // console.log("success");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)) .innerHTML = nameInput.value;
        userList.appendChild(li);

        //clear fields
        nameInput.value = "";
        emailInput.value = "";
    }
    
}

