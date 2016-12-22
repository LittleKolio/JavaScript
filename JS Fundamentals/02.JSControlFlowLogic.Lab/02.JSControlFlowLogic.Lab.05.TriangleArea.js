/**
 * Created by LittleKolio on 9/25/2016.
 */
function triangleArea([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let round = (a + b + c) / 2;
    let area = Math.sqrt(round * (round - a) * (round - b) * (round - c));
    return area;
}