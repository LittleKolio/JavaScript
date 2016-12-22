/**
 * Created by LittleKolio on 10/15/2016.
 */
function notebook3(input) {
    let result = {}, output = {};
    for (let line of input) {
        let [color, prop, val] = line.split('|');
        if (!result.hasOwnProperty(color)) {
            result[color] = {
                opponents: [],
                wins: 0,
                losses: 0
            };
        }
        switch (prop) {
            case 'age':
            case 'name': {
                result[color][prop] = val;
            } break;
            case 'win': {
                result[color]['opponents'].push(val);
                result[color]['wins'] += 1;
            } break;
            case 'loss': {
                result[color]['opponents'].push(val);
                result[color]['losses'] += 1;
            } break;
        }
    }

    let sorted = Object.keys(result).sort();

    for (let k of sorted) {
        // toFixed() връща string
        let num = ((result[k]['wins'] + 1) / (result[k]['losses'] + 1)).toFixed(2);

        if (!result[k].hasOwnProperty('age') ||
            !result[k].hasOwnProperty('name')) { continue; }
        output[k] = {
            age: result[k]['age'],
            name: result[k]['name'],
            opponents: result[k]['opponents'].sort(),
            rank: num
        };
    }
    console.log(JSON.stringify(output));
}



/**
function notebook(input) {
    let notebook = {}, temp = {};
    for (let line of input) {
        let [color, key, val] = line.split('|');
        if (!notebook.hasOwnProperty(color)) {
            notebook[color] = {
                age: '',
                name: '',
                opponents: [],
                rank: ''
            };
            temp[color] = {
                win: 0,
                loss: 0
            };
        }
        switch (key) {
            case 'age': notebook[color][key] = val; break;
            case 'name': notebook[color][key] = val; break;
            case 'win': {
                notebook[color]['opponents'].push(val);
                temp[color]['win'] += 1;
            } break;
            case 'loss': {
                notebook[color]['opponents'].push(val);
                temp[color]['loss'] += 1;
            } break;
        }
    }
    for (let k of Object.keys(notebook)) {
        if (notebook[k]['age'] == 0 || notebook[k]['name'] == '') {
            delete notebook[k];
            delete temp[k];
        }
    }

    for (let c of Object.keys(temp)) {
        let num = ((temp[c]['win'] + 1) / (temp[c]['loss'] + 1)).toFixed(2);
        notebook[c]['rank'] = num.toString();
    }

    for (let x of Object.keys(notebook)) {
        notebook[x]['opponents'].sort();

    }
}




 function notebook(input) {
    let notebook = new Map(), temp = {};
    for (let line of input) {
        let [color, key, val] = line.split('|');
        if (!notebook.hasOwnProperty(color)) {
            notebook.set(color, new Map());
            notebook.get(color).set('opponents', []);

            temp[color] = {
                win: 0,
                loss: 0
            };
        }
        switch (key) {
            case 'age': notebook.get(color).set(key, val); break;
            case 'name': notebook.get(color).set(key, val); break;
            case 'win': {
                notebook.get(color).get('opponents').push(val);
                temp[color]['win'] += 1;
            } break;
            case 'loss': {
                notebook.get(color).get('opponents').push(val);
                temp[color]['loss'] += 1;
            } break;
        }
    }
    for (let [k, v] of notebook) {
        if (notebook[k]['age'] == 0 || notebook[k]['name'] == '') {
            notebook.delete(k);
            delete temp[k];
        }
    }

    for (let color of Object.keys(temp)) {
        let num = ((temp[color]['win'] + 1) / (temp[color]['loss'] + 1)).toFixed(2);
        notebook.get(color).set('rank', num.toString());
    }

    let result = Array.from(notebook).sort(sort)

    function sort(a, b) {
        let rankA = Number(a[1].get('rank'));
        let rankB = Number(b[1].get('rank'));
        return rankA - rankB;
    }
    //let result = Array.from(notebook).sort((a, b) => Number(a['rank']) - Number(b['rank']));
    console.log(Array.from(notebook));
    //console.log(JSON.stringify(notebook));
}
 */

notebook3([
    'purple|age|99',
    'red|age|44',
'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'
]);