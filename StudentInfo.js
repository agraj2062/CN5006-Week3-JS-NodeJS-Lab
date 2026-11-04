
// Exercise 3: Student Information Module

const dateofBirth = "01/01/2000";

// Function to return student name
const getStudentName = () => {
    return "Agraj Pandey";
};

// Function to return campus name
const getCampusName = () => {
    return "UEL Campus";
};

// Export functions and variables
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// Function to calculate student grade
exports.Studentgrade = (marks) => {

    if (marks > 50 && marks < 70) {
        return "B Grade";
    } else {
        return "A Grade";
    }

};
