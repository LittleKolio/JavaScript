/**
 * Created by LittleKolio on 10/3/2016.
 */

/**
function validityChecker([x1, y1, x2, y2]) {
    let pointList = [[0, 0], [x1, y1], [x2, y2]];

    for (let i = 0; i < pointList.length - 1; i++) {
        let a = boolee(pointList[i]);

        for (let j = i + 1; j < pointList.length; j++) {
            console.log(`{${pointList[j]}} to {${pointList[i]}} is ${a(pointList[j])}`)
        }
    }

    function boolee([a, b]) {
        return function ([c, d]) {
            let s = Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
            return (s == Math.round(s) ? 'valid' : 'invalid');
        }
    }
}
 */

function validityChecker([x1, y1, x2, y2]) {

    console.log(`{${x1}, ${y1}} to {0, 0} is ${boolee(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${boolee(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${boolee(x1, y1, x2, y2)}`);

    function boolee(a, b, c, d) {
        let s = Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
        return (s == Math.round(s) ? 'valid' : 'invalid');
    }
}

validityChecker(['3','0','0','4']);
/**
 {3, 0} to {0, 0} is valid
 {0, 4} to {0, 0} is valid
 {3, 0} to {0, 4} is valid
 */


validityChecker(['2','1','1','1']);
/**
 {2, 1} to {0, 0} is invalid
 {1, 1} to {0, 0} is invalid
 {2, 1} to {1, 1} is valid
 */