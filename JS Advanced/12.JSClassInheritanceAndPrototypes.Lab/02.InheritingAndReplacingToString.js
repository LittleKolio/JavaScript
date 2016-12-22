function result() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString() {
            let className = this.constructor.nameObj;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let protStr = super.toString().slice(0, -1);
            return protStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let protStr = super.toString().slice(0, -1);
            return protStr + `, course: ${this.course})`;
        }
    }
    return {Person, Teacher, Student};
}


let func = result();
let as = new func.Teacher('bebe', 'ba@ba', 'papu');
console.log(as + '');