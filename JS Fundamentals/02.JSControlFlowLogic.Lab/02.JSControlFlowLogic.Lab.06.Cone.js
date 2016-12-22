/**
 * Created by LittleKolio on 9/25/2016.
 */
function cone(input) {
    let [r, h] = input.map(Number);
    let apo = Math.sqrt(r * r + h * h);
    let area = Math.PI * r * (apo + r);
    let vol = Math.PI * r * r * h / 3;
    console.log(`volume = ${vol}`);
    console.log(`area = ${area}`);
}