/**
 * Created by LittleKolio on 10/11/2016.
 */
function countWords(input) {
    let array = input
        .join('\n')
        .split(/[^a-zA-Z0-9_]+/)
        .filter(w => w != '');
    let words = {};
    for (let w of array) {
        if (!words[w])
            words[w] = 0;
        words[w]++;
    }
    return JSON.stringify(words);
}

console.log(
    countWords(["Far too slow, you're far too slow."])
);
/**
 {"Far":1,"too":2,"slow":2,"you":1,"re":1,"far":1}
 */

console.log(
    countWords(["JS devs use Node.js for server-side JS.-- JS for devs"])
);
/**
 {"JS":3,"devs":2,"use":1,"Node":1,"js":1,"for":2,"server":1,"side":1}
 */