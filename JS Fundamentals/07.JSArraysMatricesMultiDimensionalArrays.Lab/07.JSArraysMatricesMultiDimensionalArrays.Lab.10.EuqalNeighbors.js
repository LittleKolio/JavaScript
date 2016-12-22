/**
 * Created by LittleKolio on 10/5/2016.
 */
function neighbors(input) {
    let arr = input.map(r => r.split(' '));
    //console.log(arr);
    let count = 0;
    for (let r = 0; r < arr.length - 1; r++) {
        for (let c = 0; c < arr[r].length; c++) {
            if (arr[r][c] == arr[r + 1][c])
                count++;
        }
    }
    for (let r = 0; r < arr.length; r++) {
        for (let c = 0; c < arr[r].length - 1; c++) {
            if (arr[r][c] == arr[r][c + 1])
                count++;
        }
    }
    console.log(count);
}

neighbors([
    '2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 8 7 5 4'
]); // 1

neighbors([
    'test yes yo ho',
    'well done yo 6',
    'not done yet 5'
]); // 2