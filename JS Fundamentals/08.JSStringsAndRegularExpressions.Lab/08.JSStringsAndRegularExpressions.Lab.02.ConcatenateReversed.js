/**
 * Created by LittleKolio on 10/6/2016.
 */
function concatenateReversed(input) {
    let text = input.join('');
    let result = Array.from(text).reverse().join('');
    console.log(result);
}

concatenateReversed(['I', 'am', 'student']); // tnedutsmaI

concatenateReversed(['race', 'car']); // racecar