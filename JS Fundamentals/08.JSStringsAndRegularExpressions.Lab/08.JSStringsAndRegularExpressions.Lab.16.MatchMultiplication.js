/**
 * Created by LittleKolio on 10/6/2016.
 */
function matchMulti(input) {
    if (Array.isArray(input))
        input = input[0];
    let regexp = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    input = input.replace(regexp, (match, num1, num2) => Number(num1) * Number(num2));
    console.log(input);
}

matchMulti('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');