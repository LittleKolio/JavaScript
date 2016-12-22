/**
 * Created by LittleKolio on 9/21/2016.
 */
function sumAndVAT (input) {
    let sum = 0;
    /**
    input.forEach(function (item) {
        sum += Number(item);
    })
     */
    for (let item of input) {
        sum += Number(item);
    }
    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.2);
    console.log("total = " + sum * 1.2);
}