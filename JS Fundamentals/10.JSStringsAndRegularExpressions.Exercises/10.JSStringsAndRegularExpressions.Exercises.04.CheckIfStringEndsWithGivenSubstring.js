/**
 * Created by LittleKolio on 10/10/2016.
 */
function checkEndOfString([str, word]) {
    let index = str.indexOf(word);
    return index == (str.length  - word.length);
}

console.log(checkEndOfString(['This sentence ends with fun?', 'fun?'])); // true

console.log(checkEndOfString(['This is Houston, we have…', 'We have…'])); // false