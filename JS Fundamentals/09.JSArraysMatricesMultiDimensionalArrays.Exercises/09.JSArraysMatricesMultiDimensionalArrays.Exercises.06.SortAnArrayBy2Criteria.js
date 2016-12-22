/**
 * Created by LittleKolio on 10/7/2016.
 */
function sortArray(input) {
    let result = input
        //.map(e => e.toLowerCase())
        .sort(function(a, b){
            if (a.length > b.length) {
                return 1;
            } else if (a.length < b.length) {
                return -1;
            } else {
                return a > b;
            }
        });
    console.log(result.join('\n'));
}

function sortArray2(input) {
    let result = input
    //.map(e => e.toLowerCase())
        .sort((a, b) => (a.length - b.length) == 0 ? a > b : a.length - b.length);
    console.log(result.join('\n'));
}

sortArray2(['alpha', 'beta', 'gamma']); // beta alpha gamma

sortArray2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']); // Jack Isacc George Theodor Harrison

sortArray2(['test', 'Deny', 'omen', 'Default']); // Deny omen test Default