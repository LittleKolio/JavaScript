/**
 * Created by LittleKolio on 10/29/2016.
 */
$(function () {
    let model = getModel();
    model.init('#num1', '#num2', '#result');
    $('#sumButton').click(model.add);
    $('#subtractButton').click(model.subtract);
});
function getModel() {
    let model = {
        init: (num1, num2, resultSel) => {
            model['num1'] = $(num1);
            model['num2'] = $(num2);
            model['result'] = $(resultSel);
        },
        add: () => {model.action((a, b) => a + b)},
        subtract: () => {model.action((a, b) => a - b)},
        action: (func) => {
            let val1 = Number(model.num1.val());
            let val2 = Number(model.num2.val());
            model.result.val(func(val1, val2));
        }
    };
    return model;
}


