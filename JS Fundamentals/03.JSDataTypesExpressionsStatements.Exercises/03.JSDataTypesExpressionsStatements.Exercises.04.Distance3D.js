/**
 * Created by LittleKolio on 9/26/2016.
 */
function distanceIn3D(input) {
    let [x1, y1, z1, x2, y2, z2] = input.map(Number);
    let xPow2 = Math.pow(x1 - x2, 2);
    let yPow2 = Math.pow(y1 - y2, 2);
    let zPow2 = Math.pow(z1 - z2, 2);
    let base = Math.sqrt(xPow2 + yPow2);
    let hypo = Math.sqrt(base * base + zPow2);
    return hypo;
}