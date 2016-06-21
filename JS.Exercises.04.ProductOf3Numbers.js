/**
 * Created by LittleKolio on 6/21/2016.
 */
function num3(arr) {
    let nums = arr.map(Number);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums [i] < 0)
            count++;
    }
    if (count % 2 == 0 || count == 0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
}