/**
 * Created by LittleKolio on 6/21/2016.
 */
function printLines (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr [i] == 'Stop')
            break;
        console.log (arr [i]);
    }
}