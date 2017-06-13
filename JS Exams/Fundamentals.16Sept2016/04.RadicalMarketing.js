/**
 * Created by Vlado on 10/16/2016.
 */
function someting(input) {
    let log = new Map(),
        p = {};

    for (let line of input) {
        if (line.length == 1) {

            if (!log.has(line)) {
                log.set(line, new Set());
                p[line] = 0;
            }

        } else if (line.length > 1) {
            let [first, second] = line.split('-');

            if (log.has(second) && !log.get(second).has(first)) {
                log.get(second).add(first);
                p[first] += 1;
            }

        }
    }
    let sorted = Array.from(log).sort((a, b) => {
        let subsA = a[1].size,
            subsB = b[1].size;
        if (subsB - subsA == 0) {
            return  p[b[0]] - p[a[0]];
        }
        return subsB - subsA;
    });

    console.log(sorted[0][0]);


    let count = 0;
    for (let g of sorted[0][1]) {
        count++;
        console.log(count + '. ' + g);
    }
}


someting([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'
]);

someting([
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
]);