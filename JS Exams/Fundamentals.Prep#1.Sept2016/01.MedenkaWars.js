/**
 * Created by LittleKolio on 10/13/2016.
 */
function wars(input) {
    input = input.map(l => l.split(' '));
    //console.log(input);

    let white = 0, dark = 0;
    let countWhite = 1, countDark = 1;
    let oldWhiteDam, oldDarkDam;

    for (let i = 0; i < input.length; i++) {
        let newDam = Number(input[i][0]);

        if (input[i][1] == 'white') {
            if (newDam == oldWhiteDam)
                countWhite++;
            if (countWhite == 2) {
                white += (newDam * 2.75);
                countWhite = 1;
                oldWhiteDam = -1;
            } else {
                white += newDam;
                oldWhiteDam = newDam;
            }
        } else if (input[i][1] == 'dark') {
            if (newDam == oldDarkDam)
                countDark++;
            if (countDark == 5) {
                dark += (newDam * 4.5);
                countDark = 1;
                oldDarkDam = -1;
            } else {
                dark += newDam;
                oldDarkDam = newDam;
            }
        }
    }

    let winner = 'Naskor', damage = dark;
    if (white > dark) {
        winner = 'Vitkor ';
        damage = white;
    }
    console.log('Winner - ' + winner);
    console.log('Damage - ' + damage * 60);

    //console.log(input);
}
wars([
    '5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);
/**
 Winner - Vitkor
 Damage - 540
 */


wars([
    '2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);
/**
 Winner - Naskor
 Damage - 1020
 */