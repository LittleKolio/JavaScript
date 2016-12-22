/**
 * Created by LittleKolio on 10/10/2016.
 */
function splitString([str, delim]) {
    console.log(str.split(delim).join('\n'));
}

splitString(['One-Two-Three-Four-Five', '-']); // One Two Three Four Five

splitString(['http://platform.softuni.bg', '.']); // http://platform softuni bg