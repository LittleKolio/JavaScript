/**
 * Created by LittleKolio on 10/4/2016.
 */
function treasure(input) {

    for (let i = 0; i < input.length; i += 2)
        console.log(location(input[i], input[i + 1]));

    function location(x, y) {
        switch (true) {
            case (x >= 1 && x <= 3) && (y >= 1 && y <= 3): return 'Tuvalu';
            case (x >= 0 && x <= 2) && (y >= 6 && y <= 8): return 'Tonga';
            case (x >= 5 && x <= 7) && (y >= 3 && y <= 6): return 'Samoa';
            case (x >= 4 && x <= 9) && (y >= 7 && y <= 8): return 'Cook';
            case (x >= 8 && x <= 9) && (y >= 0 && y <= 1): return 'Tokelau';
            default: return 'On the bottom of the ocean';
        }
    }
}

treasure([4, 2, 1.5, 6.5, 1, 3]);
/**
 On the bottom of the ocean
 Tonga
 Tuvalu
 */


treasure([6, 4]);
/**
 Samoa
 */