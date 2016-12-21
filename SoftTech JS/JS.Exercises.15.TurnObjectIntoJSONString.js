/**
 * Created by LittleKolio on 6/21/2016.
 */
function jsonString (arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var temp = arr [i].split (' -> ');
        obj [temp [0]] = Number (temp [1]) || temp [1];
    }
    obj = JSON.stringify (obj);
    console.log (obj);
}
/**
jsonString([
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
]);
 */
