/**
 * Created by LittleKolio on 10/2/2016.
 */
function aggregate(input) {
    let something = input.map(Number);

    agg(something, 0, (a, b) => a + b);
    agg(something, 0, (a, b) => a + 1 / b);
    agg(something, '', (a, b) => a + b);

    function agg(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i])
        }
        console.log(val);
    }
}
