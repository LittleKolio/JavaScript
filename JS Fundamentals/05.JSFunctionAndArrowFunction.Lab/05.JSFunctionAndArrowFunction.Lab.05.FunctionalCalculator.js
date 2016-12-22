/**
 * Created by LittleKolio on 10/2/2016.
 */
function calculator([x, y, op]) {
    let [a, b] = [x, y].map(Number);

    let calc = function(a, b, op) {return op(a, b);};

    let sum = function(a, b) {return a + b;};
    let sub = function(a, b) {return a - b;};
    let mul = function(a, b) {return a * b;};
    let div = function(a, b) {return a / b;};

    switch (op) {
        case '+': return calc(a, b, sum); break;
        case '-': return calc(a, b, sub); break;
        case '*': return calc(a, b, mul); break;
        case '/': return calc(a, b, div); break;
    }
}
