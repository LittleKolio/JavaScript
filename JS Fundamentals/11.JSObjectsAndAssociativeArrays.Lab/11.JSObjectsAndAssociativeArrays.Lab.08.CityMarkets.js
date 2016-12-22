/**
 * Created by LittleKolio on 10/11/2016.
 */
function cityMarkets(input) {
    let towns = new Map();
    for (let line of input) {
        [town, product, salesAndPrice] = line.split(/\s*->\s*/);
        [sales, price] = salesAndPrice.split(/\s*:\s*/).map(Number);
        let money = sales * price;
        if (!towns.has(town))
            towns.set(town, new Map());
        let oldMoney = towns.get(town).get(product);
        if (oldMoney)
            money += oldMoney;
        towns.get(town).set(product, money);
    }
    for (let town of towns.keys()) {
        console.log('Town - ' + town);
        for (let [product, money] of towns.get(town))
            console.log(`$$$${product} : ${money}`);
    }
}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);
/**
 Town - Sofia
 $$$Laptops HP : 400000
 $$$Raspberry : 300000000
 $$$Audi Q7 : 20000000
 Town - Montana
 $$$Portokals : 200000
 $$$Qgodas : 4000
 $$$Chereshas : 300
 */