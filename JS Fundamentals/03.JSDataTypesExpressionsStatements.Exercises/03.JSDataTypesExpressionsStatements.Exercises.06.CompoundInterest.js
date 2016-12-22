/**
 * Created by LittleKolio on 9/26/2016.
 */
function compoundInterest([P, i, n, t]) {
    [P, i, n, t] = [P, i, n, t].map(Number);
    i /= 100;
    n = 12 / n;
    let f = P * Math.pow(1 + i / n, n * t);
    console.log(f.toFixed(2));
}

