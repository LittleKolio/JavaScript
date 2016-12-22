/**
 * Created by LittleKolio on 10/5/2016.
 */
function process(input) {
    let arr = input.filter((n, i) => i % 2 == 1).map(x => x * 2).reverse();
    console.log(arr.join(' '));
}

process(['10', '15', '20', '25']); // 50 30
process(['3', '0', '10', '4', '7', '3']); // 6 8 0