/**
 * Created by LittleKolio on 10/2/2016.
 */
function uppercase([input]) {
    let inputUpp = input.toUpperCase();
    let words = extract();
    function extract() {
        return inputUpp.split(/\W+/)
    }
    words = words.filter(w => w != '');

    return words.join(', ');
}
