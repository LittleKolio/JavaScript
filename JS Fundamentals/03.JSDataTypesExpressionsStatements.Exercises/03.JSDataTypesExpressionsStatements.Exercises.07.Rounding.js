/**
 * Created by LittleKolio on 9/26/2016.
 */
function rounding([num, pow]) {
    [num, pow] = [num, pow].map(Number);
    pow = Math.pow(10, pow);
    let a = Math.round(num * pow) / pow;
    console.log(a);
}
