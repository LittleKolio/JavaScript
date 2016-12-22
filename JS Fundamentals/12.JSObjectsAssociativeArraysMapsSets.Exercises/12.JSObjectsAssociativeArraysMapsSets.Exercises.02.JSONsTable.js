/**
 * Created by LittleKolio on 10/12/2016.
 */
function JSONtoHTMLtable(input) {
    let table = [];
    let result = '<table>\n';

    for (let line of input) {
        let tempData = JSON.parse(line);
        result += '\t<tr>\n';
        result += `\t\t<td>${tempData['name']}</td>\n` +
            `\t\t<td>${tempData['position']}</td>\n` +
            `\t\t<td>${tempData['salary']}</td>\n`;
        result += '\t<tr>\n';
    }
    result += '</table>';
    return result;
}

console.log(
    JSONtoHTMLtable([
        '{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ])
);
/**
 <table>
 <tr>
 <td>Pesho</td>
 <td>Promenliva</td>
 <td>100000</td>
 <tr>
 <tr>
 <td>Teo</td>
 <td>Lecturer</td>
 <td>1000</td>
 <tr>
 <tr>
 <td>Georgi</td>
 <td>Lecturer</td>
 <td>1000</td>
 <tr>
 </table>
 */