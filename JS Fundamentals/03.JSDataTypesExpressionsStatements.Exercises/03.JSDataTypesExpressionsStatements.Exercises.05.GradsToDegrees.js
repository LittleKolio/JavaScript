/**
 * Created by LittleKolio on 9/26/2016.
 */
function gradsToDegrees(num) {
    let grads = num % 400;
    if (grads < 0) {grads += 400;}
    let degrees = grads * 360 / 400;
    console.log(degrees);
}