/**
 * Created by LittleKolio on 10/10/2016.
 */
function occurrencesOfWord([str, word]) {
let pattern = '\\b' + word + '\\b';
let regexp = new RegExp(pattern, 'gi');
let result = str.match(regexp);
return result ? result.length : '0';
}

console.log(occurrencesOfWord(['The waterfall was so high, that the child couldn’t see its peak.', 'the'])); // 2

console.log(occurrencesOfWord(['How do you plan on achieving that? How? How can you even think of that?', 'how'])); // 3

console.log(occurrencesOfWord(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'])); // 1