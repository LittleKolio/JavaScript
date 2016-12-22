/**
 * Created by LittleKolio on 10/5/2016.
 */
function diagonalSum(input) {
    let arr = input.map(r => r.split(' ').map(Number));
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][(arr.length - 1) - i];
    }
    console.log(sum1 + ' ' + sum2);
}

diagonalSum([
    '20 40',
    '10 60'
]); // 80 50

diagonalSum([
    '3 5 17',
    '-1 7 14',
    '1 -8 89'
]); // 99 25