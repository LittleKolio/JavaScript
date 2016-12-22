/**
 * Created by LittleKolio on 10/6/2016.
 */
function extractText(input) {
    if (Array.isArray(input))
        input = input[0];
    let arr = [];
    let right = -1;
    while (true) {
        let left = input.indexOf('(', right + 1);
        if (left < 0) break;
        right = input.indexOf(')', left + 1);
        if (right < 0) break;
        arr.push(input.substring(left + 1, right));
    }
    console.log(arr.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']); // Bulgarian brandy, alcoholic drink