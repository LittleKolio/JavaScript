/**
 * Created by LittleKolio on 10/4/2016.
 */
function evenPosElement(input) {
    let result = [];
    for (let i in input) {
        if (i % 2 == 0)
            result.push(input[i]);
    }
    return result.join(' ');
}

function evenPosElement2(input) {
    return input
        .filter((n, i) => i % 2 == 0)
        .join(' ');
}

(input) => input.filter((n, i) => i % 2 == 0).join(' ');

console.log(evenPosElement(['20', '30', '40'])); // 20 40
console.log(evenPosElement(['5', '10'])); // 15

console.log(evenPosElement2(['20', '30', '40'])); // 20 40