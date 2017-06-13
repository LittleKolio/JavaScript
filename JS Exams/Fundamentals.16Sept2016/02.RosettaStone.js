/**
 * Created by Vlado on 10/16/2016.
 */
function stones(input) {
    input = input.map(l => l.split(' ').map(Number));

    let n = input.shift()[0],
        matrix = input.splice(0, n),
        alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        letters = [],
        result = '';

    for (let i = 0; i < input.length; i++) {
        letters[i] = [];
    }

    for (let i = 0; i < input.length; i += n) {
        for (let j = 0; j < input[i].length; j += matrix[n - 1].length) {
            //console.log(input[i][j]);
            oleeMale(i, j);
        }
    }

    function oleeMale(row, col) {
        //console.log(row + ' ' + col);
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if ((row + i) >= input.length ||
                    (col + j) >= input[row].length)
                    continue;
                //console.log((row + i) + ' ' + (col + j));
                let num = matrix[i][j] + input[row + i][col + j];
                letters[row + i][col + j] = alphabet[num % alphabet.length];
            }
        }
    }

    for (let r of letters) {
        result += r.join('');
    }
    console.log(result);
}

stones([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);

stones([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22'
]);

stones([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
]);