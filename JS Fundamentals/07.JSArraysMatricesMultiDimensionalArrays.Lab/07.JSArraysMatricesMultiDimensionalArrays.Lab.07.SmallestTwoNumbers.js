/**
 * Created by LittleKolio on 10/5/2016.
 */
function smallestTwoNumbers(input) {
    let arr = input.sort((a, b) => a - b).slice(0, 2);
    console.log(arr.join(' '))
}

smallestTwoNumbers(['30', '15', '50', '5']); // 5 15
smallestTwoNumbers(['3', '0', '10', '4', '7', '3']); // 0 3