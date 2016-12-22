/**
 * Created by LittleKolio on 10/7/2016.
 */
function extract(input) {
    let biggest = Number.NEGATIVE_INFINITY;
    input.map(Number).forEach(e => {
        if (biggest <= e) {
            biggest = e;
            console.log(e);
        }
    })
}

//extract(['1', '3', '8', '4', '10', '12', '3', '2', '24']);

//extract(['20', '3', '2', '15', '6', '1']);

extract(['-45', '-5', '2', '-555', '1', '0']);