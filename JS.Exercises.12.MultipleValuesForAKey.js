/**
 * Created by LittleKolio on 6/21/2016.
 */
function sortingObject (arr) {
    let pairs = {};
    for (let i = 0; i < arr.length - 1; i++) {
        let temp = arr [i].split(' ');
        if (pairs [temp [0]] == undefined) {
            pairs [temp [0]] = [temp [1]];
        } else {
            pairs [temp [0]].push(temp [1]);
        }
    }
    let key = arr [arr.length - 1];
    if (pairs [key] == undefined) {
        console.log ('None');
    } else {
        console.log (pairs [key].join('\n'))
    }
    //console.log (pairs [key].join('\n') || 'None')
}