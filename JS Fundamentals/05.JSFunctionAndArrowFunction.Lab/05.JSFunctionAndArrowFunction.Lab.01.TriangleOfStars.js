/**
 * Created by LittleKolio on 10/2/2016.
 */
function triangleOfStars(num) {
    num = Number(num);
    for (let row = 1, step = 1; row <= num && row > 0; row += step) {
        print(Math.abs(row));
        if (row == num)
            step = -1;
    }
    function print(row) {
        console.log('*'.repeat(row));
    }
}

triangleOfStars(1);
/**

 *

 */


triangleOfStars(2);
/**

 *
 **
 *

 */


triangleOfStars(5);
/**

 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *

 */