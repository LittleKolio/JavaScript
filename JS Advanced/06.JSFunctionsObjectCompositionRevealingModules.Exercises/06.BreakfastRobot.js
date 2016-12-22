/**
 * Created by LittleKolio on 10/30/2016.
 */
let breakfast = (function breakfast() {
    let recipes = {
        apple: {carbohydrate:1, flavour:2},
        coke: {carbohydrate:10, flavour:20},
        burger: {
            carbohydrate:5,
            flavour:3,
            fat:7
        },
        omelet: {
            flavour:1,
            fat:1,
            protein:5
        },
        cheverme: {
            carbohydrate:10,
            flavour:10,
            fat:10,
            protein:10
        }
    };
    let stock = {
        carbohydrate:0,
        flavour:0,
        fat:0,
        protein:0,
        toString: () => {
            let text = `protein=${stock.protein} ` +
            `carbohydrate=${stock.carbohydrate} ` +
            `fat=${stock.fat} ` +
            `flavour=${stock.flavour}`;
            return text;
        }
    };
    return function(input) {
        let [action, key, val] = input.split(' ');
        let process = {
            restock: () => {
                stock[key] += Number(val);
                return 'Success';
            },
            prepare: () => {
                let r = recipes[key],
                    v = Number(val);
                for (let k in r) {
                    if ((r[k] * v) > stock[k])
                        return `Error: not enough ${k} in stock`;
                }
                for (let k in r) {
                    stock[k] -= r[k] * v;
                }
                return 'Success';
            },
            report: () => stock.toString()
        };
        return process[action]();
    }
})();
/*
console.log(breakfast('restock carbohydrate 10'));
console.log(breakfast('restock flavour 10'));
console.log(breakfast('prepare apple 1'));
console.log(breakfast('restock fat 10'));
console.log(breakfast('prepare burger 1'));
console.log(breakfast('report'));

console.log(breakfast('prepare cheverme 1'));
console.log(breakfast('restock protein 10'));
console.log(breakfast('prepare cheverme 1'));
console.log(breakfast('restock carbohydrate 10'));
console.log(breakfast('prepare cheverme 1'));
console.log(breakfast('restock fat 10'));
console.log(breakfast('prepare cheverme 1'));
console.log(breakfast('restock flavour 10'));
console.log(breakfast('prepare cheverme 1'));
console.log(breakfast('report'));
 */


// console.log(breakfast('restock carbohydrate 10'));
// console.log(breakfast('restock flavour 10'));
// console.log(breakfast('prepare apple 1'));
// console.log(breakfast('restock fat 10'));
// console.log(breakfast('prepare burger 1'));
console.log(breakfast('report'));


