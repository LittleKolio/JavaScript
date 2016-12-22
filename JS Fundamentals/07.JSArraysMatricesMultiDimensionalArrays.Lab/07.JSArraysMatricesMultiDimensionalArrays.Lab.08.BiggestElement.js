/**
 * Created by LittleKolio on 10/5/2016.
 */
function biggestElement(input) {
    let arr = input.map(row => row.split(' ').map(Number));
    //console.log(arr);
    let num = Number.NEGATIVE_INFINITY;
    arr.forEach(r => r.forEach(c => num = Math.max(num, c)));
    console.log(num);
}

function biggestElement2(input) {
    let arr = input.map(row => row.split(' ').map(Number));
    //console.log(arr);
    let num = [];
    arr.forEach(r => num = num.concat(r));
    console.log(Math.max.apply(Math, num));
}

biggestElement([
    '20 50 10',
    '8 33 145'
]); // 145

biggestElement([
    '3 5 7 12',
    '-1 4 33 2',
    '8 3 0 4'
]); // 33