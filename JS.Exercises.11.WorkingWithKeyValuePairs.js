/**
 * Created by LittleKolio on 6/21/2016.
 */
function sortingObject (arr) {
    let pairs = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = arr [i].split(' ');
        pairs [temp [0]] = temp [1];
    }
    let key = arr [arr.length - 1];
    console.log (pairs [key] || 'None')
}
/**
sortingObject([
    '3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4'
]);
 */