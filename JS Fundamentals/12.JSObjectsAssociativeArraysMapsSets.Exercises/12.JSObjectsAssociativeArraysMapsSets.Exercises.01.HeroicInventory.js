/**
 * Created by LittleKolio on 10/12/2016.
 */
function inventory(input) {
    let arrayHero = [];
    for (let line of input) {
        let prop = line.split(' / ');
        let tempObj = {
            name: prop[0],
            level: Number(prop[1]),
            items:[]
        };
        if (prop.length > 2)
            tempObj['items'] = prop[2].split(', ');
        arrayHero.push(tempObj);
    }
    console.log(JSON.stringify(arrayHero));
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
/**
 [{"name":"Isacc","level":25,"items":["Apple"," GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest"," DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator"," Sentinel"," Antara"]}]
 */

inventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]);