/**
 * Created by LittleKolio on 10/11/2016.
 */
function sumTowns(input) {
    let townsSum = {};
    for (let i = 0; i < input.length; i += 2) {
        let [town, incom] = [input[i], Number(input[i + 1])];
        //console.log(typeof town + ' ' + typeof incom);
        if (!townsSum[town])
            townsSum[town] = 0;
        townsSum[town] += incom;
    }
    return JSON.stringify(townsSum);
}

console.log(
    sumTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])
);
/**
 {"Sofia":25,"Varna":7}
 */

console.log(
    sumTowns(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4'])
);
/**
 {"Sofia":25,"Varna":7}
 */