/**
 * Created by LittleKolio on 10/7/2016.
 */
function orbit(input) {
    input = input.map(r => r.split(' ').map(Number));

    console.log(input);

    //let matrix = new Array(input[0][0]).fill(new Array(input[0][1]).fill(0));
    let matrix = new Array(input[0][0]).fill([]);
    /**
    for (let i = 0; i < input[0][0]; i++) {
        matrix[i] = [];
    }
     */
    matrix[0][2] = 1;
    matrix[1][2] = 22;
    matrix[2][2] = -5;
    matrix.forEach(r => console.log(r.join(' ')));
    /**
    let count = 1, num = 2;
    while (true) {
        let row0 = Math.max(0, (input[1][0] - count)),
            col0 = Math.max(0, (input[1][1] - count));
        let rowN = Math.min(input[0][0], (input[1][0] + count)),
            colN = Math.min(input[0][1], (input[1][1] + count));

        for (let i = row0; i <= rowN; i++) {
            for (let j = col0; j <= colN; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][j] = num;
                }
            }
        }

        count++;
        num++;
    }
    matrix.forEach(r => console.log(r.join(' ')));
     */
}


orbit(['4 4', '0 0'])