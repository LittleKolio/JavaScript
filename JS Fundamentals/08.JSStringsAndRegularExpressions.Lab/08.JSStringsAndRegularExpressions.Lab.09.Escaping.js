/**
 * Created by LittleKolio on 10/6/2016.
 */

function list(input) {

    /**
     let print = '<ul>\n';
     for (let i of input)
     print += `  <li>${escapingHTML(i)}</li>\n`
     print += '</ul>';
     return print;
     */

    let print = '<ul>\n' +
    input
        .map(escapingHTML)
        .map(i => `  <li>${i}</li>`)
        .join('\n') +
    '\n</ul>';
    return print;


    /**
     function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
     }
     */

    function escapingHTML(str) {
        let result = '';
        for (let c of str) {
            if (c == '<')
                result += '&lt;';
            else if (c == '>')
                result += '&gt;';
            else if (c == '&')
                result += '&amp;';
            else if (c == '"')
                result += '&quot;';
            else if (c == '\'')
                result += '&#39;';
            else
                result += c;
        }
        return result;
    }
}



console.log(list(['<b>unescaped text</b>', 'normal text']));