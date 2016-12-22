/**
 * Created by LittleKolio on 10/2/2016.
 */
function palindrome(str) {
    for (let i = 0; i < (str.length / 2); i++) {
        if (str[i] != str[str.length - 1 - i])
            return 'false';
    }
    return 'true';
}


console.log(palindrome('haha')); // false
console.log(palindrome('racecar')); // true
console.log(palindrome('unitinu')); // true