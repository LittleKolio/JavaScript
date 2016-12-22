/**
 * Created by LittleKolio on 10/23/2016.
 */
function attachEvents() {
    $('a.button').on('click', buttonClicked);
    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}