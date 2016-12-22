/**
 * Created by LittleKolio on 10/6/2016.
 */
function matchAllWords(input) {
    if (Array.isArray(input))
        input = input[0];
    let exp = /[^\S\w\d_]+/g;
    let result = input
        .split(exp)
        //.filter(x => x != '')
        .join('|')
    console.log(result);
    //console.log(typeof input);
}

matchAllWords(['A Regular Expression needs to have the global flag in order to match all occurrences in the text']);
// A|Regular|Expression|needs|to|have|the|global|flag|in|order|to|match|all|occurrences|in|the|text

matchAllWords(['_(Underscores) are also word characters']);
// _|Underscores|are|also|word|characters