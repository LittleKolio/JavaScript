/**
 * Created by LittleKolio on 10/14/2016.
 */
function removeX(input) {
    let matrix = input.map(x => x.toLowerCase());
    let indexes = new Set();

    for (let r = 0; r < matrix.length - 2; r++) {
        let colEnd = Math.min(matrix[r].length, matrix[r + 2].length);
        for (let c = 0; c < colEnd - 2; c++) {
            let bool = (matrix[r][c] ==  matrix[r][c + 2]) &&
                (matrix[r][c] == matrix[r + 1][c + 1]) &&
                (matrix[r][c] == matrix[r + 2][c]) &&
                (matrix[r][c] == matrix[r + 2][c + 2]);
            if (bool) {
                indexes.add(r + ',' + c);
                indexes.add(r + ',' + (c + 2));
                indexes.add((r + 1) + ',' + (c + 1));
                indexes.add((r + 2) + ',' + c);
                indexes.add((r + 2) + ',' + (c + 2));

            }
        }
    }
    for (let i of indexes) {
        let [r, c] = i.split(',').map(Number);
        input[r] = input[r].slice(0, c) + ' ' + input[r].slice(c + 1);
    }

    console.log(input.map(r => r.replace(/ /g, '')).join('\n'));
}

removeX([
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
]);
