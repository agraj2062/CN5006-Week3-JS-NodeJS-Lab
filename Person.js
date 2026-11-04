
// Exercise 3: Person Class

class Person {

    constructor(name, age, email) {

        this.name = name;
        this.age = age;
        this.email = email;

    }

    // Method to return person information
    getPersonInfo() {

        return {
            Name: this.name,
            Age: this.age,
            Email: this.email
        };

    }

}

// Export the Person class
module.exports = Person;
