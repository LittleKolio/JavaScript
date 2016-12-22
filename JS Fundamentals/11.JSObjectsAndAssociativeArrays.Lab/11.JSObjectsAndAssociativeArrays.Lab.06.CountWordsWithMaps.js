/**
 * Created by LittleKolio on 10/11/2016.
 */
function countWords(input) {
    let line = input
        .join('\n')
        .toLowerCase()
        .split(/[^a-zA-Z0-9_]+/)
        .filter(w => w != '');
    let wordsMap = new Map();
    for (let w of line) {
        if (!wordsMap.has(w))
            wordsMap.set(w, 0);
        wordsMap.set(w, wordsMap.get(w) + 1);
    }
    //console.log(wordsMap);
    let wordsArray = Array.from(wordsMap.keys()).sort();
    //console.log(wordsArray);
    wordsArray.forEach(w => console.log(`'${w}' -> ${wordsMap.get(w)} times`))
}

countWords(["Far too slow, you're far too slow."])