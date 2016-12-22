/**
 * Created by LittleKolio on 10/2/2016.
 */

/**
function rectangleOfStars(num) {
    "use strict";
    for (let rep = 1; rep <= Number(num); rep++) {
        print(Number(num));
    }
    function print(num) {
        "use strict";
        let result = '';
        for (let row = 1; row <= num - 1; row++) {
            result += '* ';
        }
        result += '*';
        console.log(result);
    }
}
 */

function rectangleOfStars(num) {
    for (let row = 1; row <= num; row++) {
        print();
    }
    function print() {
        console.log('* '.repeat(num - 1) + '*');
    }
}

rectangleOfStars(1);
/**

 *

 */


rectangleOfStars(2);
/**

 * *
 * *

 */


rectangleOfStars(5);
/**

 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *

 */