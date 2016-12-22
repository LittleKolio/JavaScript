/**
 * Created by LittleKolio on 9/26/2016.
 */
function distanceOverTime([v1, v2, t]) {
    [v1, v2, t] = [v1, v2, t].map(Number);
    let dis = Math.abs(((v1 - v2) * t / 3600) * 1000);
    console.log(dis);
}