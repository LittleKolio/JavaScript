/**
 * Created by LittleKolio on 9/27/2016.
 */
function quadEquation([a, b, c]) {
    /**
     * a*x^2 + b*x + c = 0
     */
    [a, b, c] = [a, b, c].map(Number);
    let discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        console.log('No');
    } else if (discriminant == 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x1 = Math.round(x1 * 10e+4) / 10e+4;
        x2 = Math.round(x2 * 10e+4) / 10e+4;
        console.log(x1 > x2 ? x2 : x1);
        console.log(x1 > x2 ? x1 : x2);
    }
}
