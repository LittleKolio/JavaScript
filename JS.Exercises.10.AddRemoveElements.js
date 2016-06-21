/**
 * Created by LittleKolio on 6/21/2016.
 */
function elements (arr) {
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = arr [i].split(' ');
        if (temp.length > 1) {
            if (temp [0] == 'add') {
                nums.push (Number (temp [1]));
            } else if (temp [0] == 'remove') {
                nums.splice(Number (temp [1]), 1);
            }
        }
    }
    for (let j of nums) {
        console.log (j);
    }
}
