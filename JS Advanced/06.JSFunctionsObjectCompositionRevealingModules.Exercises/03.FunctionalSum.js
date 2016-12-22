/**
 * Created by LittleKolio on 10/30/2016.
 */
/*
(function solve() {
    let sum = 0;
    function add(num) {
        sum += num;
        return add;
    }
    add.toString = () => sum;
    return add;
})()
*/

/*
function solve() {
    let sum = 0;
    function add(num) {
        sum += num;
        return add;
    }
    add.toString = () => sum;
    return add;
}
let add = solve();

console.log('' + add(1)(6)(-3));
console.log(add(1)(6)(-3).toString());
*/

function solve() {
    let sum = 0;
    function add(num) {
        sum += num;
        return add;
    }
    add.valueOf = () => sum;
    return add;
}
let add = solve();

console.log(+ add(1)(6)(-3));
console.log(add(1)(6)(-3).valueOf());