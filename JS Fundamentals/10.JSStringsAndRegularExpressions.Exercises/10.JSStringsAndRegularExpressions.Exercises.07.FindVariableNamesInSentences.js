/**
 * Created by LittleKolio on 10/10/2016.
 */
function variableNames([input]) {
    /**
    if (Array.isArray(input))
        input = input[0];
     */
    let pattern = '\\b_([a-zA-Z0-9]+)\\b';
    let regexp = new RegExp(pattern, 'g');
    //console.log(regexp);

    let result = [];
    let match = regexp.exec(input);
    while (match) {
        result.push(match[1]);
        match = regexp.exec(input);
    }
    console.log(result.join(','));
}

variableNames(['The _id and _age variables are both integers.']); // id,age

variableNames(['__invalidVariable _evenMoreInvalidVariable_ _validVariable']); // validVariable