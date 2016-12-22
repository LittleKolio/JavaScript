/**
 * Created by LittleKolio on 9/25/2016.
 */
function chessBoard([n]) {
    let result = '<div class="chessboard">\n';
    for (let row = 1; row <= Number(n); row++) {
        result += '\t<div>\n';
        let color = (row % 2 == 0) ? 'white' : 'black';
        for (let col = 1; col <= Number(n); col++) {
            result += `\t\t<span class="${color}"></span>\n`;
            color = (color == 'white') ? 'black' : 'white';
        }
        result += '\t</div>\n'
    }
    result += '</div>';
    return result;
}
