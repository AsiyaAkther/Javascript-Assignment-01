//Q1. Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";

//--------------------------------------------------

//Q2. On one single line, declare three variables with the following names and values:
firstName = "John";
lastName = "Doe";
age = 35;

/* So What Will Be The 1st Variable Name, Then 2nd Variable Values &
3rd Variable Name And Values Both! */

let firstName = "John";
let lastName = "Doe";
let age = 35;

//--------------------------------------------------

/*Q3. Use the correct assignment operator that will
result in x being 50 (same as x = x * y). */
x = 10;
y = 5;
x *= y;

//--------------------------------------------------

//Q4. Use comments to describe the correct data type of the following variables:

let length = 16; // Number
let lastName = "Johnson"; // String

const x = {
    firstName: "John",
    lastName: "Doe",
}; // Object

//--------------------------------------------------

//Q5. Execute the function named myFunction.

function myFunction() {
    alert("Hello World!");
}
myFunction();

//--------------------------------------------------

/*Q6. Create an object called person with name = John, age = 50, Then,
    access the object to alert("John is 50").*/
const person = {
    name: "John",
    age: "50",
};
alert(person.name + " is " + person.age);

//--------------------------------------------------

//Q7. The <button> element should do something when someone clicks on it. Try to fix it!
<button onClick="alert('Hello')">Click me.</button>;

//--------------------------------------------------

//Q8-1.  Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

//Q8-2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);

//--------------------------------------------------

//Q9-1. Use the correct Math method to create a random number.
let random = Math.random();
console.log(random);

//Q9-2. Use the correct Math method to return the largest number of 10 and 20.
let maximum = Math.max(10, 20);
console.log(maximum);

//Q9-3. Use the correct Math method to get the square root of 9.
let sqrt = Math.sqrt(9);
console.log(sqrt);

//--------------------------------------------------

//Q10-1. Choose the correct comparison operator to alert true, when x is greater than y.
x = 10;
y = 5;
alert(); // x>y

//Q10-2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = prompt("Enter your age");
let check = age < 18 ? "Too young" : "Old enough";
alert(check);