/**
 * Created by LittleKolio on 10/23/2016.
 */
function subtract() {
    let numFirst = Number($('#firstNumber').val());
    let numSecond = Number($('#secondNumber').val());
    $('#result').text(numFirst - numSecond);
}