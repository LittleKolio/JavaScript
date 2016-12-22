class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} ` +
            `(age: ${this.age}, email: ${this.email})`;
    }
}

// let d = new Person('dede', 'dada', 63, 'sss@sss.com');
// console.log(d + '');