/**
 * Created by LittleKolio on 10/22/2016.
 */
function search() {
    let text = $('#searchText').val();
    let count = 0;
    $('#towns li').each((index, element) => {
        if (element.textContent.includes(text)) {
            $(element).css('font-weight', 'bold');
            count++;
        } else {
            $(element).css('font-weight', '');
        }
    });
    /*
    $('#towns li').each(function() {
        if ($(this).text().indexOf(text) != -1) {
            $(this).css('font-weight', 'bold');
            count++;
        } else {
            $(this).css('font-weight', '');
        }
    });
     */
    $('#result').text(count + ' matches found.');
    $('#searchText').val('');
}