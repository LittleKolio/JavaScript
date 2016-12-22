/**
 * Created by LittleKolio on 10/10/2016.
 */
function replace(input) {
    /**
    let pattName = '\\*[A-Z][a-zA-Z]+(?=\\s|$)';
    let pattPhone = '\\+[0-9-]{10}(?=\\s|$)';
    let pattID = '![a-zA-Z0-9]+(?=\\s|$)';
    let pattBase = '_[a-zA-Z0-9]+(?=\\s|$)';
     */
    let patterns = [
        '\\*[A-Z][a-zA-Z]*(?=\\s|$)',
        '\\+[0-9-]{10}(?=\\s|$)',
        '![a-zA-Z0-9]+(?=\\s|$)',
        '_[a-zA-Z0-9]+(?=\\s|$)'
    ];
    let result = [];
    for (let i of input) {
        let line = i;
        for (let j of patterns) {
            let reg = new RegExp(j, 'g');
            line = line.replace(reg,match => '|'.repeat(match.length));
        }
        result.push(line);
    }
    result.forEach(r => console.log(r));
}

replace([
    'Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    "I can't really remember...",
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    "I really don't know what happened there.",
    'This is all I saw, that night.',
    'I cannot explain it myself...'
]);

/**
 Agent |||||||| was in the room when it all happened.
 The person in the room was heavily armed.
 Agent |||||||| had to act quick in order.
 He picked up his phone and called some unknown number.
 I think it was |||||||||||
 I can't really remember...
 He said something about "finishing work" with subject |||||||||||||| and returning to Base |||||||||
 Then after that he disappeared from my sight.
 As if he vanished in the shadows.
 A moment, shorter than a second, later, I saw the person flying off the top floor.
 I really don't know what happened there.
 This is all I saw, that night.
 I cannot explain it myself...
 */