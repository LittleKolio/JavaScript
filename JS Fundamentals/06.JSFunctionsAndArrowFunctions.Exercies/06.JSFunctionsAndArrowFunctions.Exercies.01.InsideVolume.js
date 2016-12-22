/**
 * Created by LittleKolio on 10/3/2016.
 */
function insideVolume(input) {

    let bool = function ([x, y, z]) {
        [x, y, z] = [x, y, z].map(Number);
        let boolee = (x >= 10 && x <= 50) &&
            (y >= 20 && y <= 80) &&
            (z >= 15 && z <= 50);
        return boolee;
    };

    function emi(oldArray, f) {
        let boolArray = [];
        let count = 3;
        for (let i = 0; i < oldArray.length; i += count) {
            boolArray.push(f(oldArray.slice(i, i + count)));
        }
        return boolArray;
    }

    for (let i of emi(input, bool)) {
        if (i) console.log('inside');
        else console.log('outside');
    }
}

insideVolume([
    13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43
]); // inside, inside, outside