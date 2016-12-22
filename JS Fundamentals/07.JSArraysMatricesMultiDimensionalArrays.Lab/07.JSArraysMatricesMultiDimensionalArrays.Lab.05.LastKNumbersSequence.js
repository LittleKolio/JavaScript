/**
 * Created by LittleKolio on 10/5/2016.
 */
function lastKNumbers([l, n]) {
    [l, n] = [l, n].map(Number);
    let arr = [1];
    for (let i = 1; i <= l - 1; i++) {
        let start = Math.max(0, i - n);
        let end = i - 1;
        let temp = arr.slice(start, end + 1).reduce((a, b) => a + b);
        arr.push(temp);
        //console.log(typeof temp)
    }
    console.log(arr.join(' '));
}

lastKNumbers(['6', '3']); // 1 1 2 4 7 13
lastKNumbers(['8', '2']); // 1 1 2 3 5 8 13 21