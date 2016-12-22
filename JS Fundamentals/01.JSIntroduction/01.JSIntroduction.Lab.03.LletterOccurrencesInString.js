/**
 * Created by LittleKolio on 9/23/2016.
 */
/**
function letterInString(input) {
    let count = 0;
    let oldIndex = 0;
    while (true) {
        let index = input[0].indexOf(input[1], oldIndex);
        if (index < 0) {break;}
        oldIndex = index + 1;
        count++;
    }
    console.log(count);
}
 */

/**
 * for (let item in array) // [index] of array
 *
 * for (let item of array) // element of array (c# -> foreach)
 *
 *
 */

function letterInString([str, letter]) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter)
            count++;
    }
    return count;
}