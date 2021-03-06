'use strict';
class Circle {
    constructor(radius) {
        this.radius = radius;
}
    get diameter() {
        return 2 * this.radius;
    }
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(3);
c.diameter = 34;
console.log(c.radius);