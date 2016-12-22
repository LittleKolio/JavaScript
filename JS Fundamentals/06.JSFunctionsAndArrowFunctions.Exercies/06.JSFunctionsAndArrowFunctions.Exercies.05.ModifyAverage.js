/**
 * Created by LittleKolio on 10/3/2016.
 */


function modifyAverage(num) {
    let mee = num[0];
    function sum(str) {
        let sum = 0;
        let count = 0;
        for (let i of Array.from(str.replace(/\D/g,''))) {
            sum += Number(i);
            count++;
            //console.log(sum);
        }
        //console.log(sum);
        return ((sum / count) > 5);
    }
    while (!sum(mee)) {
        mee += '9';
    }
    console.log(Number(mee));
}

modifyAverage(['5835']); // 5835
modifyAverage(['-1.0001']); // -1.0001999999