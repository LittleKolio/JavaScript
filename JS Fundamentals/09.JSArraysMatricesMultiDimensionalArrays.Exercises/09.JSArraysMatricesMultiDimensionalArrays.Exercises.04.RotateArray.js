/**
 * Created by LittleKolio on 10/7/2016.
 */
function rotate(input) {
    let num = Number(input.pop());
    let result = [];
    //console.log(num % input.length)
    for (let i = 0; i < input.length; i++) {
        //console.log((i + num % input.length) % input.length);
        result[(i + num % input.length) % input.length] = input[i];
    }
    console.log(result.join(' '));
}

rotate(['1', '2', '3', '4', '2']); // 3 4 1 2

rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']); // Orange Coconut Apple Banana
