/**
 * Created by LittleKolio on 10/22/2016.
 */
function extractText() {
    let res = $('#items li')
        .toArray()
        .map(li => $(li).text())
        .join(', ');
    $('#result').text(res);
}