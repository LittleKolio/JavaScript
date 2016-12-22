/**
 * Created by LittleKolio on 10/10/2016.
 */
function checkStartOfString([str, word]) {
    let index = str.indexOf(word);
    return index == 0;
}

console.log(checkStartOfString(['How have you been?', 'how'])); // false

console.log(checkStartOfString(['The quick brown fox…', 'The quick brown fox…'])); // true