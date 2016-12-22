/**
 * Created by LittleKolio on 10/6/2016.
 */
function aggregate(input) {
    let sum = 0, towns = [];
    for (let i of input) {
        let temp = i.split('|'),
            name = temp[1].trim(),
            income = Number(temp[2].trim());
        towns.push(name);
        sum += income;
    }
    console.log(towns.join(', ') + `\n${sum}`);
}

aggregate([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
]);
/**
 Sofia, Veliko Tarnovo, Yambol
 1075
 */