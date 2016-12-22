/**
 * Created by LittleKolio on 10/12/2016.
 */
function catalogue(input) {
    input = input.sort();
    //console.log(input.join('\n'));
    let cat = new Map();
    for (let line of input) {
        let [prod, price] = line.split(' : ');
        let k = prod[0].toUpperCase();
        if (!cat.has(k))
            cat.set(k, new Map());
        cat.get(k).set(prod, price);
    }
    for (let [k, v] of cat) {
        console.log(k);
        for (let [prod, price] of v)
            console.log(`  ${prod}: ${price}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
/**
 A
 Anti-Bug Spray: 15
 Apple: 1.25
 Appricot: 20.4
 B
 Boiler: 300
 D
 Deodorant: 10
 F
 Fridge: 1500
 T
 T-Shirt: 10
 TV: 1499
 */

catalogue([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
]);
/**
 B
 Banana: 2
 Barrel: 10
 P
 Pesho: 0.000001
 R
 Rali Car: 2000000
 Raspberry P: 4999
 Rolex: 100000
 Rollon: 10
 Rubic's Cube: 5
 */