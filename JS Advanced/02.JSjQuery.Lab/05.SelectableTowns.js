/**
 * Created by LittleKolio on 10/23/2016.
 */
function attachEvents() {
    $('#showTownsButton').on('click', show);
    $('#items li').on('click', function() {
        if ($(this).attr('data-selected')) {
            $(this).removeAttr('data-selected');
            $(this).css('background', '');
        } else {
            $(this).attr('data-selected', 'true');
            $(this).css('background', '#DDD');
        }
    });

    function show() {
        // alert($('#items li[data-selected=true]').toArray());
        $('#selectedTowns').text(
            $('#items li[data-selected=true]')
                .toArray()
                .map(li => li.textContent)
                .join(', ')
        );
    }
}
