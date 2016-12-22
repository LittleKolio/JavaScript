/**
 * Created by LittleKolio on 10/27/2016.
 */
function aggregates(input) {
    input = input.map(Number);
    function reduce(array, func) {
        let result = array[0];
        for (let el of array.slice(1))
            result = func(result, el)
        return result;
    }

    console.log('Sum = ' +
        reduce(input, (a, b) => a + b)
    );
    console.log('Min = ' +
        reduce(input, (a, b) => Math.min(a, b))
    );
    console.log('Max = ' +
        reduce(input, (a, b) => Math.max(a, b))
    );
    console.log('Product = ' +
        reduce(input, (a, b) => Math.max(a, b))
    );
    console.log('Join = ' +
        reduce(input, (a, b) => '' + a + b)
    );
}


aggregates(['2','3','10','5']);