/**
 * Created by LittleKolio on 9/24/2016.
 */
function circleArea(r) {
    let area = Math.PI * r * r;
    let round = Math.round(area * 100) / 100;
    console.log(area);
    console.log(round);
}
