/**
 * Created by LittleKolio on 10/6/2016.
 */
function printLetters(input) {
    // is array or string
    if (Array.isArray(input))
        input = input[0];
    for (let i in input)
        console.log(`str[${i}] -> ${input[i]}`);
}

printLetters(['Hello, World!']);
/**
 str[0] -> H
 str[1] -> e
 str[2] -> l
 str[3] -> l
 str[4] -> o
 str[5] -> ,
 str[6] ->
 str[7] -> W
 str[8] -> o
 str[9] -> r
 str[10] -> l
 str[11] -> d
 str[12] -> !
 */

printLetters(['SoftUni']);
/**
 str[0] -> S
 str[1] -> o
 str[2] -> f
 str[3] -> t
 str[4] -> U
 str[5] -> n
 str[6] -> i
 */