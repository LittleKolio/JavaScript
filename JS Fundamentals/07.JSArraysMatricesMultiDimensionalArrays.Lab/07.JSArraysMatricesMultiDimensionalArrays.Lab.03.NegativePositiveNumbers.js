/**
 * Created by LittleKolio on 10/4/2016.
 */
function numbers(input) {
    input = input.map(Number);
    let result = [];
    for (let i of input) {
        if (i < 0)
            result.unshift(i);
        else
            result.push(i);
    }
    console.log(result.join('\n'));
}

numbers(['7', '-2', '8', '9']); // -2 7 8 9
numbers(['3', '-2', '0', '-1']); // -1 -2 3 0