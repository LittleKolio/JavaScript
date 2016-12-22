/**
 * Created by LittleKolio on 10/28/2016.
 */
function fib(input) {
    function calc() {
        let x = 0, y = 1, arr = [];
        function inner() {
            arr.push(y);
            let oldY = y;
            y = x + oldY;
            x = oldY;
            // console.log(y);
        }
        for (let i = 1, j = arguments[0]; i <= j; i++) {
            inner();
        }
        return arr;
    }
    return calc(input);
}

console.log(fib(5));