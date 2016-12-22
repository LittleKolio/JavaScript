/**
 * Created by LittleKolio on 10/29/2016.
 */
function solve(array, sort) {
    let action = {
        asc: (array) => array.sort((a, b) => a - b),
        desc: (array) => array.sort((a, b) => b - a)
    };
    return action[sort](array);
}

/*
function solve(array, sort) {
    let model = getModel();
    model[sort]();
    function getModel() {
        let model = {
            asc: () => {model.action((a, b) => a - b)},
            desc: () => {model.action((a, b) => b - a)},
            action: (func) => {
                model['arr'] = array.sort(func);
            }
        };
        return model
    }
    return model.arr;
}
*/
console.log(
    solve([14, 7, 17, 6, 8], 'asc')
);
console.log(
    solve([14, 7, 17, 6, 8], 'desc')
);