/**
 * Created by LittleKolio on 10/11/2016.
 */
function fromJSONtoHTML(input) {
    let array = JSON.parse(input);
    //return array;

    let html = '<JSONtoHTMLtable>\n';

    html += '  <tr>';
    for (let key in array[0]) {
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += '</tr>\n';
    //return html;

    for (let line of array) {
        html += '  <tr>';
        for (let k in line) {
            html += `<td>${htmlEscape(line[k])}</td>`;
        }
        html += '</tr>\n';
    }
    //return html;

    html += '</JSONtoHTMLtable>';
    return html;

    function htmlEscape(text) {
        let newText = new String(text);
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return newText.replace(/["&'<>]/g, ch => map[ch]);
    }
}

console.log(
    fromJSONtoHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
);
/**
 <JSONtoHTMLtable>
 <tr><th>Name</th><th>Price</th></tr>
 <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
 <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
 </JSONtoHTMLtable>
 */

console.log(
    fromJSONtoHTML('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]')
);
/**
 <JSONtoHTMLtable>
 <tr><th>Name</th><th>Age</th><th>City</th></tr>
 <tr><td>Pesho &lt;div&gt;-a</td><td>20</td><td>Sofia</td></tr>
 <tr><td>Gosho</td><td>18</td><td>Plovdiv</td></tr>
 <tr><td>Angel</td><td>18</td><td>Veliko Tarnovo</td></tr>
 </JSONtoHTMLtable>
 */