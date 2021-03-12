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


const todo = [
    {
        id:1,
        text:"take out the trash",
        isCompleted: true
    },
    {
        id:2,
        text:"Meeting",
        isCompleted: true
    },
    {
        id:3,
        text:"Dentist appoinment",
        isCompleted: false
    },
];

for(let i = 0; i < todo.length; i++){
    // console.log(todo[i].id);
}
for(let td of todo){
    // console.log(td.text);
}

todo.forEach(function(td) {
    // console.log(td.text);
});
const todoText = todo.map(function(td) {
    return td.text;
});
console.log(todoText);

const todoCompleted = todo.filter(function(td) {
    return td.isCompleted === true;
}).map(function(td){
    return td.text;
});
console.log(todoCompleted);


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

let x = 23;
if(x === 10){
    console.log("it's 10");
} else {
    console.log("x is not 10");
}
let y = 15;
if (x < 22 || (y > 12 && x > 23)){
    console.log("one nice condition");
}
const color = x > 20 ? "red" : "blue";
// console.log(color);
switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not red or blue");    
        break;
}


function addNums(num1 = 1,num2 = 1){
    return num1 + num2;
}
console.log(addNums()); 
console.log(addNums(2,4));