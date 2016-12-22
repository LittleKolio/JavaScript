/**
 * Created by LittleKolio on 9/26/2016.
 */
function lastMonth([day, month, year]) {
    let lastMonth = new Date(year, month - 1, day);
    $('#time').append(
        $('<p>')
            .text(lastMonth)
    );
}
