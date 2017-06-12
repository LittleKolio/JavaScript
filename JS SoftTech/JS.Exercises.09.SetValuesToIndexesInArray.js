/**
 * Created by LittleKolio on 6/21/2016.
 */
function array (arr) {
    let nums = [];
    for (let j = 0; j < Number (arr [0]); j++) {
        nums [j] = 0;
    }
    //console.log (nums.length);
    for (let i = 1; i < arr.length; i++) {
        let temp = arr [i].split(' - ').map(Number);
        nums [temp [0]] = temp [1];
    }
    for ( let k of nums) {
        console.log (k);
    }
}

