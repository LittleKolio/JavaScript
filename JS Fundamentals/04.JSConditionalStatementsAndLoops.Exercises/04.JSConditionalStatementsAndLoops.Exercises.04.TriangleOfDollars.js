/**
 * Created by LittleKolio on 9/27/2016.
 */
function triangleOfDollars(num) {
    /**
    let dollars = '';
    for (let i = 1; i <= Number(num); i++) {
        dollars += '$';
        console.log(dollars);
    }
     */

    /**
    for (let i = 1; i <= Number(num); i++) {
        console.log('$'.repeat(i));
    }
     */

    for (let i = 1; i <= Number(num); i++) {
        console.log(new Array(i + 1).join('$'));
    }
}
