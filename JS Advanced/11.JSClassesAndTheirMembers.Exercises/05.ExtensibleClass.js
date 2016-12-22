(function() {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(temp) {
            for (let key in temp) {
                if (typeof temp[key] == 'function')
                    Extensible.prototype[key] = temp[key];
                else
                    Extensible[key] = temp[key];
            }
        }
    }
    return Extensible;
})();


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
