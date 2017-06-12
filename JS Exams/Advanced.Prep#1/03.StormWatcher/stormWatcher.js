let Watcher = (function() {
    let id = 0;
    class Watcher {
        constructor(tmp, hm, pr, ws) {
            this.id = id++;
            this.temperature = tmp;
            this.humidity = hm;
            this.pressure = pr;
            this.windSpeed = ws;

            // this.id = Watcher.getId();
        }

        get weatherStatus() {
            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                return 'Stormy';
            } else {
                return 'Not stormy';
            }
        }

        // static несе закачат към this а към constructor
        // static getId() {
        //     if (!Watcher.nextId)
        //         Watcher.nextId = 0;
        //     return Watcher.nextId++;
        // }


        toString() {
            return `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${this.weatherStatus}`
        }
    }
    return Watcher;
})();

let watch1 = new Watcher(32, 66, 760, 12);
console.log(watch1.toString());

let watch2 = new Watcher(10, 40, 680, 30);
console.log(watch2.toString());