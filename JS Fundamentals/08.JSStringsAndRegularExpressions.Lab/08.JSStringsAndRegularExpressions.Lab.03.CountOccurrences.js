/**
 * Created by LittleKolio on 10/6/2016.
 */
function countOccurrences([str, text]) {
    //[str, text] = [str.toLowerCase(), text.toLowerCase()];
    let count = 0;
    let index = -1;
    while (true) {
        index = text.indexOf(str, index + 1);
        if (index < 0)
            return count;
        count++;
    }
}


// ([str, text]) => text.split(str).length - 1;


console.log(countOccurrences(['the', 'The quick brown fox jumps over the lay dog.'])); // 1

console.log(countOccurrences(['ma', 'Marine mammal training is the training and caring for' +
' marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals.' +
' It is also a duty of the trainer to do mental and physical exercises to keep the animal' +
' healthy and happy.'])); // 7