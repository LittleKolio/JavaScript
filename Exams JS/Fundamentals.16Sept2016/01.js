/**
 * Created by Vlado on 10/16/2016.
 */
function arithmephile(input) {
    input = input.map(Number);
    //console.log(input);
    let sums = [];
    for (let x = 0; x < input.length; x++) {
        let num = input[x];
        if (num > 0 && num < 10) {
            let sum = 1;
            for (let j = 1; j <= num; j++) {
                //console.log(input[x + j]);
                sum *= input[x + j];
            }
            //console.log(sum);
            sums.push(sum);
        }
    }
    sums.sort((a, b) => b - a);
    console.log(sums[0]);
}

arithmephile([
    '10',
    '20',
    '2',
    '30',
    '44',
    '123',
    '3',
    '56',
    '20',
    '24'
]);