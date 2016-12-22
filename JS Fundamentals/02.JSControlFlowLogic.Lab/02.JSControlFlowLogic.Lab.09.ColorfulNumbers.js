/**
 * Created by LittleKolio on 9/25/2016.
 */
function colorfulNumbers(num) {
    let result = '<ul>';
    for (let i = 1; i <= Number(num); i++) {
        let color = (i % 2 == 0) ? 'blue' : 'green';
        result += `<li><span style="color: ${color}">${i}</span></li>`;
    }
    result += '</ul>';
    return result;
}
/**
function colorfulNumbers(num) {
    let result = '<ul>\n';
    for (let i = 1; i <= Number(num); i++) {
        let color = (i % 2 == 0) ? 'blue' : 'green';
        result += `\t<li><span style="color: ${color}">${i}</span></li>\n`;
    }
    result += '</ul>\n';
    return result;
}
 */