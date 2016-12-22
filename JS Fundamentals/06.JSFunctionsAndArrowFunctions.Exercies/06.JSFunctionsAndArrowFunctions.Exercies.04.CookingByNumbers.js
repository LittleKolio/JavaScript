/**
 * Created by LittleKolio on 10/3/2016.
 */


function cooking(input) {

    let num = Number(input[0]);

    function operation(op) {
        switch (op) {
            case 'chop': return function (num) {return num / 2;};
            case 'dice': return function (num) {return Math.sqrt(num);};
            case 'spice': return function (num) {return ++num;};
            case 'bake': return function (num) {return num * 3;};
            case 'fillet': return function (num) {return num * 0.8;};
        }
    }

    for (let i = 1; i < input.length; i++) {
        let temp = operation(input[i]);
        num = temp(num);
        console.log(Math.round(num * 10) / 10);
    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']) // 16, 8, 4, 2, 1
cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']) // 3, 4, 2, 6, 4.8
