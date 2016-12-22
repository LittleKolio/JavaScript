function result() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
        get color() { return this._color; }
        set color(c) { this._color = c; }
        get gasWeight() { return this._gasWeight; }
        set gasWeight(g) { this._gasWeight = g; }
    }
    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbon = {color: ribbonColor, length: ribbonLength}
        }

        get ribbon() {
            return this._ribbon;
        }
        set ribbon(r) {
            this._ribbon = r;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text() {
            return this._text;
        }
        set text(t) {
            this._text = t;
        }
    }
    return {Balloon, PartyBalloon, BirthdayBalloon};
}

let res = result();
let t = new res.BirthdayBalloon('red', 1.32, 'blue', 3, 'forever');
console.log(t);