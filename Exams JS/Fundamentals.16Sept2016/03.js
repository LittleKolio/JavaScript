/**
 * Created by Vlado on 10/16/2016.
 */
function spy(input) {
    let key = input.shift().toLowerCase(),
        regex2 = new RegExp(key, 'gi'),
        lele = input.map(l => l.replace(regex2, m => m.toLowerCase())),
        map = {'!': 1, '%': 2, '#': 3, '$': 4},
        index = 0;

    //console.log(lele);

    for (let l of lele) {
        let regex = new RegExp('(( |^)' + key + ')[ ]+([!%$#A-Z]{8,})(( |\\.|,)|$)', 'g'),
            regex3 = new RegExp('[!%$#A-Z]{8,}', 'g');
        let match = regex.exec(l);
        while (match) {
            input[index] = input[index].replace(match[3], ahh);
            match = regex.exec(l);
        }
        index++;
    }
    function ahh(word) {
        return word.toLowerCase().replace(/[!%#$]/g, m => map[m]);
    }
    console.log(input);
}

spy([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);

spy([
    'enCode',
    'Some messages are just not encoded what can you do?',
    'RE - ENCODE THEMNOW! - he said.',
    'Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%.'
]);