/**
 * Created by LittleKolio on 10/12/2016.
 */
function juice(input) {
    let juice = {};
    let bottles = new Map();

    for (let line of input) {
        let [ju, qu] = line.split(' => ');

        if (!juice.hasOwnProperty(ju))
            juice[ju] = 0;
        juice[ju] += (qu / 1000);

        if (juice[ju] >= 1) {
            if (!bottles.has(ju))
                bottles.set(ju, 0);
            bottles.set(ju,  bottles.get(ju) + Math.floor(juice[ju]));
            juice[ju] = juice[ju] % 1;
        }
    }
    for (let [key, val] of bottles)
        console.log(key + ' => ' + val);
}

juice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
/**
 Orange => 2
 Peach => 2
 */

juice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
/**
 Pear => 8
 Watermelon => 10
 Kiwi => 4
 */