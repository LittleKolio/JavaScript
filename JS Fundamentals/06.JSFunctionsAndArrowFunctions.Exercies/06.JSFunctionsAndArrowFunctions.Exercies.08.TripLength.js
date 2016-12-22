/**
 * Created by LittleKolio on 10/4/2016.
 */


/**
 * 1 - 2 = a
 * 2 - 3 = b
 * 3 - 1 = c
 */

function trip(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let a = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let b = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));
    let c = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3));

    //console.log(a + ' ' + b + ' ' + c);

    if (c >= b && c >= a)
        console.log('1->2->3: ' + (a + b));
    else if (b >= a && b >= c)
        console.log('2->1->3: ' + (a + c));
    else
        console.log('1->3->2: ' + (b + c));
}


trip([0, 0, 2, 0, 4, 0]); // 1->2->3: 4
trip([5, 1, 1, 1, 5, 4]); // 2->1->3: 7
trip([-1, -2, 3.5, 0, 0, 2]); // 1->3->2: 8.154234499766936