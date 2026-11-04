// Import the modules
const EmployeeInfo = require("./EmployeeInfo");
const student = require("./StudentInfo");
const Person = require("./Person");

// Display program heading
console.log("===== JavaScript Lab Exercises =====");

// Display current date and time
const currentDateTime = new Date();

console.log("Program started");
console.log("Date and Time: " +
    currentDateTime.toLocaleString());

// Exercise 1: Call EmployeeInfo function
console.log("\n===== Exercise 1 =====");

EmployeeInfo("John", 50000);
EmployeeInfo("David", 35000);

// Exercise 2: Arrow Function
console.log("\n===== Exercise 2 =====");

const EmpSkills = (skills, studentID, labGroup) => {

    console.log("Student ID: " + studentID);
    console.log("Expert in: " + skills);
    console.log("Lab Group: " + labGroup);

};

EmpSkills("JavaScript", "3032687", "GROup 18");

// Exercise 3: Student Information Module
console.log("\n===== Exercise 3 =====");

console.log("Student Name: " + student.getName());
console.log("Campus: " + student.Location());
console.log("Date of Birth: " + student.dob);

console.log("Grade: " + student.Studentgrade(55));

// Create a Person object
const person1 = new Person(
    "Jim",
    25,
    "jim@gmail.com"
);

console.log("Person Information:");
console.log(person1.getPersonInfo());

console.log("\n===== Program Ended =====");
