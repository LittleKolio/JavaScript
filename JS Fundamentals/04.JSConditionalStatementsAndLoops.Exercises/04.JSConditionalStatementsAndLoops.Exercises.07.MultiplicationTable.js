/**
 * Created by LittleKolio on 9/27/2016.
 */

function multiTable(num) {
    let result = '<JSONtoHTMLtable border="1">\n\t<tr><th>x</th>';
    for (let col = 1; col <= Number(num); col++) {
        result += `<th>${col}</th>`;
    }
    result += '</tr>\n';
    for (let row = 1; row <= Number(num); row++) {
        result += `\t<tr><th>${row}</th>`;
        for (let col = 1; col <= Number(num); col++) {
            result += `<td>${col * row}</td>`;
        }
        result += '</tr>\n';
    }
    result += '</JSONtoHTMLtable>';
    return result;
}

