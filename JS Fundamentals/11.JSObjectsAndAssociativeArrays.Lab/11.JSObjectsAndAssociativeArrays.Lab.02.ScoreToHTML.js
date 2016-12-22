/**
 * Created by LittleKolio on 10/11/2016.
 */
function toHTML(input) {
    let scoreJSON = JSON.parse(input);
    let html = '<JSONtoHTMLtable>\n';
    html += `  <tr><th>name</th><th>score</th></tr>\n`;
    for (let line of scoreJSON) {
        html += `  <tr><td>${htmlEscape(line['name'])}</td>` +
            `<td>${htmlEscape(line['score'])}</td></tr>\n`;
    }
    html += '</JSONtoHTMLtable>';
    return html;

    function htmlEscape(text) {
        text = new String(text);
        let map = {'"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;'};
        return text.replace(/["&'<>]/g, ch => map[ch]);
    }
}

console.log(
    toHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')
);
/**
 <JSONtoHTMLtable>
     <tr><th>name</th><th>score</th></tr>
     <tr><td>Pesho</td><td>479</td></tr>
     <tr><td>Gosho</td><td>205</td></tr>
 </JSONtoHTMLtable>
 */