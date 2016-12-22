class Stringer {
    constructor(str, len) {
        this.innerString = str;
        this.innerLength = len;
    }
    increase(len) {
        this.innerLength += len;
        // console.log(this.innerLength);
    }
    decrease(len) {
        this.innerLength -= len;
        // console.log(this.innerLength);
    }
    toString() {
        if (this.innerLength <= 0) {
            return '...';
        } else if (this.innerLength < this.innerString.length) {
            return this.innerString.slice(0, this.innerLength) + '...';
        } else {
            return this.innerString
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
