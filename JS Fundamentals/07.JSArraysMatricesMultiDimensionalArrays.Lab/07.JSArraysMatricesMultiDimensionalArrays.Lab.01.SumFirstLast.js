/**
 * Created by LittleKolio on 10/4/2016.
 */
function sum(input) {
    return (Number(input[0]) + Number(input[input.length - 1]));
}

console.log(sum(['20', '30', '40'])); // 60
console.log(sum(['5', '10'])); // 15