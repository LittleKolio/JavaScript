/**
 * Created by LittleKolio on 10/29/2016.
 */
function cars(input) {
    let cars = new Map;
    let process = (function () {
        return {
            create: ([name, ,parent]) => {
                // предполага ме че ако се подава parent
                // то той съществува в cars
                parent = parent ? cars.get(parent) : null;
                let newObj = Object.create(parent);
                cars.set(name, newObj);
            },
            set: ([name, key, val]) => {
                let obj = cars.get(name);
                obj[key] = val;
            },
            print: (name) => {
                let obj = cars.get(name[0]), objects = [];
                for (let key in obj)
                    objects.push(`${key}:${obj[key]}`);
                console.log(objects.join(', '))
            }
        }
    }());
    for (let line of input) {
        let args = line.split(' ');
        let action = args.shift();
        process[action](args);
    }
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);