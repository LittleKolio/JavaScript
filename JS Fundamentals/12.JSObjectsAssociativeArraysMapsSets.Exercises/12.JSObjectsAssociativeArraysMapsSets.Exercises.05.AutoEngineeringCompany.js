/**
 * Created by LittleKolio on 10/12/2016.
 */
function carsCompany(input) {
    let cars = new Map();
    for (let c of input) {
        let [brand, model, quan] = c.split(' | ');
        if (!cars.has(brand))
            cars.set(brand, new Map());
        if (!cars.get(brand).has(model))
            cars.get(brand).set(model, 0);
        cars.get(brand).set(model, cars.get(brand).get(model) + Number(quan));
    }
    for (let [b, f] of cars) {
        console.log(b);
        for (let [b, q] of f)
            console.log(`###${b} -> ${q}`);
    }
}

carsCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);