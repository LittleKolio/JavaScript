(function() {
    let id = 0;
    return class Record {
        constructor(temp, hum, pre, wS) {
            this.id = id++;
            this.temperature = temp;
            this.humidity = hum;
            this.pressure = pre;
            this.windSpeed = wS;
        }

        weathet() {
            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25)
                return 'Stormy';
            return 'Not stormy';
        }

        toString() {
            return `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${this.weathet()}`
        }
    }
})();

/*
(function() {
    let nextID = 0;
    class Record {
        constructor() {
            this.id = nextID++;
        }
    ...
    }
})();
*/

/*
class Record {
    constructor() {
        this.id = Record.getID();
    }
    ...
    // static несе закачат към this а към constructor
    static getID() {
        if (!Record.nextID)
            Record.nextID = 0;
        return Record.nextID++;
    }
}
*/




let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
