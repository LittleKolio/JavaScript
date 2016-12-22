/**
 * Created by LittleKolio on 9/27/2016.
 */
function pointInRectangle([x, y, xA, xB, yA, yB]) {
    [x, y, xA, xB, yA, yB] = [x, y, xA, xB, yA, yB].map(Number);
    let xBool = x >= xA && x <= xB;
    let yBool = y >= yA && y <= yB;
    let bool = xBool && yBool ? 'inside' : 'outside';
    console.log(bool);
}
