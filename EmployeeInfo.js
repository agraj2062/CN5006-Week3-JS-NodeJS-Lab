
function EmployeeInfo(name, salary) {
    console.log("Welcome " + name +
        ". Your monthly salary is £50000" + salary);
}

// Export the function so another file can use it
module.exports = EmployeeInfo;
