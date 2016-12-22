/**
 * Created by LittleKolio on 9/26/2016.
 */
function assignProp(input) {
    let prop = {};
    for (let i = 0; i < input.length; i += 2) {
        prop[input[i]] = input[i + 1];
    }
    console.log(prop);
}
