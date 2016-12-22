/**
 * Created by LittleKolio on 10/7/2016.
 */
function print(input) {
    let step = Number(input.pop());
    //console.log(input);
    for (let i = 0; i < input.length; i += step) {
        console.log(input[i]);
    }
}

print(['5', '20', '31', '4', '20', '2']); // 5 31 20

print(['dsa', 'asd', 'test', 'tset', '2']); // dsa test

print(['1', '2', '3', '4', '5', '6']); // 1