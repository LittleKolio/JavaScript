/**
 * Created by LittleKolio on 10/31/2016.
 */
function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}