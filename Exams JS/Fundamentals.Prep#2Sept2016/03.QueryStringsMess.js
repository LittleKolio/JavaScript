/**
 * Created by LittleKolio on 10/15/2016.
 */
function queryStringsMess(input) {
    for (let line of input) {
        let temp = line.split(/&|\?=url=|\?/g).filter(l => l != '');
        let tempMap = new Map();
        for (let e of temp) {
            if (/^url=/.test(e)) {
                if (!tempMap.has('url'))
                    tempMap.set('url', []);
                tempMap.get('url').push(e.slice(4))
            } else if (/=/.test(e)) {
                let [key, val] = e.split('=').map(x => x.replace(/(\+|%20)+/g, ' ').trim());
                if (!tempMap.has(key))
                    tempMap.set(key, []);
                tempMap.get(key).push(val);
            }
        }
        let result = '';
        for (let [k, v] of tempMap) {
            result += k + '=[' + v.join(', ') + ']';
        }
        console.log(result);
    }
}

function queryStringsMess2(input) {
    let pattern = /([^=&?]+)=([^=&?]+)/g;
    let pattern2 = /(\+|%20)+/g;
    for (let line of input) {
        let lineObj = {}, match, key, val, output = '';
        match = pattern.exec(line);
        while (match) {
            key = match[1].replace(pattern2, ' ').trim();
            val = match[2].replace(pattern2, ' ').trim();
            if (!lineObj.hasOwnProperty(key))
                lineObj[key] = [];
            lineObj[key].push(val);
            match = pattern.exec(line);
        }
        for (let b in lineObj) {
            output += b + '=[' + lineObj[b].join(', ') + ']';
        }
        console.log(output);
    }
}

queryStringsMess2([
    "foo=%20foo&value=+val&foo+=5+%20+203",
    "foo=poo%20&value=valley&dog=wow+",
    "url=https://softuni.bg/trainings/coursesinstances/details/1070",
    "https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php"
]);

