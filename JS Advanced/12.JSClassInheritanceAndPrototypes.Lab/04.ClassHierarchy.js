function result() {
    class Figure {
        constructor() {
            if (new.target == Figure)
                throw new Error('Cannot instances directly');
        }
        toString() { return this.constructor.nameObj; };
    }
    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        get area() {
            return this.radius * this.radius * Math.PI;
        }
        toString() {
            return super.toString() + ` - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.width * this.height;
        }
        toString() {
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {Figure, Circle, Rectangle};
}

let x = result();

// let f = new x.Figure();       //Error

let c = new x.Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5

let r = new x.Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4
