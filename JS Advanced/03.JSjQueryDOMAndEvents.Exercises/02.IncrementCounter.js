/**
 * Created by LittleKolio on 10/23/2016.
 */
function increment(selector) {

    function add() {
        let li = $('<li>').text($('textarea.counter').val());
        $('ul.results').append(li);
    }
    function increment() {
        let v = Number($('textarea.counter').val()) + 1;
        $('textarea.counter').val(v + '');
        // alert(Number($('textarea.counter').val()));
    }

    let textarea = $('<textarea class="counter" disabled="true">').val('0');
    let btn1 = $('<button class="btn" id="incrementBtn">')
        .text('Increment')
        .on('click', increment);
    let btn2 = $('<button class="btn" id="addBtn">')
        .text('Add')
        .on('click', add);
    let ul = $('<ul class="results">');

    $(selector)
        .append(textarea)
        .append(btn1)
        .append(btn2)
        .append(ul);
}