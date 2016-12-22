function pc() {
    class Check {
        static nameObj(obj, cl) {
            if (!(obj instanceof cl))
                throw new TypeError('mamka mu');
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime  = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width  = width;
            this.height  = height;
        }
    }

    class Computer {
        constructor(
            manufacturer,
            processorSpeed,
            ram,
            hardDiskSpace
        ) {
            if (new.target == Computer)
                throw new Error('mamka mu');
            this.manufacturer = manufacturer;
            this.processorSpeed  = processorSpeed;
            this.ram  = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(
            manufacturer,
            processorSpeed,
            ram, hardDiskSpace,
            weight,
            color,
            battery
        ) {
            super(
                manufacturer,
                processorSpeed,
                ram,
                hardDiskSpace
            );
            this.weight = weight;
            this.color  = color;
            this.battery = battery;
        }

        get battery() {return this._battery;}
        set battery(batt) {
            Check.nameObj(batt, Battery);
            this._battery = batt;
        }
    }
    class Desktop extends Computer {
        constructor(
            manufacturer,
            processorSpeed,
            ram,
            hardDiskSpace,
            keyboard,
            monitor
        ) {
            super(
                manufacturer,
                processorSpeed,
                ram,
                hardDiskSpace
            );
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {return this._keyboard;}
        set keyboard(key) {
            Check.nameObj(key, Keyboard);
            this._keyboard = key;
        }

        get monitor() {return this._monitor;}
        set monitor(mon) {
            Check.nameObj(mon, Monitor);
            this._monitor = mon;
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let x = pc();
// let c = new x.Computer('fdsa',14,1235,654);
let k = new x.Keyboard('huh', 12);
let m = new x.Monitor('hah', 12, 12);
let d = new x.Desktop('mam', 1, 2, 3, k, m);
console.log(d.keyboard);
// let ffff = {manufacturer: 'huh', responseTime: 12};
