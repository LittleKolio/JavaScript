/**
 * Created by LittleKolio on 10/5/2016.
 */
function firstAndLastKNumbers(input) {
    let k = Number(input.shift());
    console.log(input.slice(0, k).join(' '));
    console.log(input.slice(input.length - k, input.length).join(' '));
}

firstAndLastKNumbers(['2', '7', '8', '9']);
/**
 7 8
 8 9
 */

firstAndLastKNumbers(['3', '6', '7', '8', '9']);
/**
 6 7 8
 7 8 9
 */