/**
 * Created by LittleKolio on 10/7/2016.
 */
function matrices(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let sum = [];
    matrix.forEach(row => sum.push(row.reduce((a, b) => a + b)));
    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row of matrix)
            colSum += row[col];
        sum.push(colSum);
    }
    sum = sum.sort((a, b) => a - b);
    console.log(sum[0] == sum[sum.length - 1]);
}

matrices([
    '4 5 6',
    '6 5 4',
    '5 5 5'
]);

matrices([
    '11 32 45',
    '21 0 1',
    '21 1 1'
]);

matrices([
    '1 0 0',
    '0 0 1',
    '0 1 0'
]);