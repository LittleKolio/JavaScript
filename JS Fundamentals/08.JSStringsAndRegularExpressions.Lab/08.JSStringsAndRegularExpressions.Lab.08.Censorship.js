/**
 * Created by LittleKolio on 10/6/2016.
 */
function censorship(input) {
    let text = input[0];
    let censor = input.slice(1);
    for (let i of censor) {
        let rep = '-'.repeat(i.length);


        text = text.replace(new RegExp(i, 'g'), rep);

        /**
         let index = -1;
        while (true) {
            index = text.indexOf(i, index + 1);
            if (index < 0) break;
            text = text.replace(i, rep);
        }
         */
    }
    console.log(text);
}

function censorship2(input) {
    RegExp.escape= function(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    let text = input[0];
    let censor = input.slice(1).map(RegExp.escape).join('|');
    let reg = new RegExp(censor, 'g');
    text = text.replace(reg, w => '-'.repeat(w.length));
    console.log(text);
}

censorship2(['roses are red, violets are blue', ', violets are', 'red']);
// roses are ---------------- blue

censorship2(['roses are red, violets are blue', ', violets are', 'red']);
// roses are ---------------- blue