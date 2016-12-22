/**
 * Created by LittleKolio on 10/7/2016.
 */
function diagonalAttack(input) {
    let arr = input.map(r => r.split(' ').map(Number));
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][(arr.length - 1) - i];
    }
    //console.log(arr);
    if (sum1 == sum2) {
        for (let row = 0; row < arr.length; row++) {
            for (let col = 0; col < arr[row].length; col++) {
                if (row == col || row + col == arr.length - 1)
                    continue;
                arr[row][col] = sum1;
            }
        }
        //console.log(arr.map(r => r.join(' ')).join('\n'));
        arr.forEach(r => console.log(r.join(' ')));
    } else {
        arr.forEach(r => console.log(r.join(' ')));
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
/**
 5 15 15 15 1
 15 4 15 2 15
 15 15 3 15 15
 15 4 15 2 15
 5 15 15 15 1
 */

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);
/**
 1 1 1
 1 1 1
 1 1 0
 */
