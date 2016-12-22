/**
 * Created by LittleKolio on 10/7/2016.
 */
function spiralMatrix([input]) {
    [row, col] = input.split(' ').map(Number);
    let num = 1, max = row * col, matrix = [];

    for (let i = 0; i < row; i++)
        matrix[i] = []

    let row0 = 0, col0 = 0;
    let rowN = row - 1, colN = col - 1;

    while (num <= max) {
        for (let right = col0; right <= colN && num <= max; right++) {
            matrix[row0][right] = num;
            num++;
        }
        row0++;
        for (let down = row0; down <= rowN && num <= max; down++) {
            matrix[down][colN] = num;
            num++;
        }
        colN--;
        for (let left = colN; left >= col0 && num <= max; left--) {
            matrix[rowN][left] = num;
            num++;
        }
        rowN--;
        for (let up = rowN; up >= row0 && num <= max; up--) {
            matrix[up][col0] = num;
            num++;
        }
        col0++;
    }
    matrix.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(['5 5']);
/**
 1 2 3 4 5
 16 17 18 19 6
 15 24 25 20 7
 14 23 22 21 8
 13 12 11 10 9
 */

spiralMatrix(['3 3']);
/**
 1 2 3
 8 9 4
 7 6 5
 */