/**
 * Created by LittleKolio on 10/12/2016.
 */
function sequences(input) {
    let faf = new Set();
    for (let line of input) {
        let mam = JSON.parse(line).map(Number).sort((t, y) => y - t).toString();
        faf.add(mam);
        //console.log(mam);
    }
    [...faf].sort((d, r) => d.length - r.length).forEach(f => console.log(`[${f}]`));
}

sequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);


sequences([
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]'
]);

/**
 .split(',').map(Number).map(z => z.trim)
 */