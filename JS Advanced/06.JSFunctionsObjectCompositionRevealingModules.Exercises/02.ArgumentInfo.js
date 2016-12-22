/**
 * Created by LittleKolio on 10/29/2016.
 */

/*
function result() {
    // console.log(arguments.length);
    let emiii = [];
    for (let i = 0, j = arguments.length; i < j; i++) {
        let type = typeof arguments[i];
        console.log(type + ': ' + arguments[i]);
        check(type);
    }
    function check(type) {
        let bool = false;
        for (let i = 0, j = emiii.length; i < j; i++) {
            if (emiii[i][0] == type) {
                emiii[i][1] += 1;
                bool = true;
                break;
            }
        }
        if (!bool) emiii.push([type, 1]);
    }
    // console.log(emiii);
    emiii
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(e[0] + ' = ' + e[1]));
}
*/

function result() {
    // console.log(arguments.length);
    let obj = new Map();
    for (let i = 0, j = arguments.length; i < j; i++) {
        let type = typeof arguments[i];
        console.log(type + ': ' + arguments[i]);
        if (!obj.has(type)) {obj.set(type, 0);}
        obj.set(type, obj.get(type) + 1);
    }
    Array
        .from(obj)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(e[0] + ' = ' + e[1]));
}

result(
    42,
    'cat',
    function() { console.log('Hello world!'); },
    () => { console.log('Hello world!'.split(' ')); }
);