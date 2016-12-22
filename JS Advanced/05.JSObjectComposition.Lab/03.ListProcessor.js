/**
 * Created by LittleKolio on 10/28/2016.
 */
function listProcessing(input) {
    let process = (function () {
        let list = [];
        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(el => el != str),
            print: () => console.log(list)
        }
    }());
    for (let el of input) {
        let [func, str] = el.split(' ');
        process[func](str);
    }
}

listProcessing([
    'add hello',
    'add again',
    'remove hello',
    'add again',
    'print'
]);