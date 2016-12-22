/**
 * Created by LittleKolio on 10/7/2016.
 */
function addRemoveElements(input) {
    let element = 1;
    let array = [];
    for (let i of input) {
        if (i == 'add') {
            array.push(element);
        } else if (i == 'remove') {
            array.pop();
        }
        element++;
    }
    if (array[0]) {
        console.log(array.join('\n'));
    } else if (!array[0]) {
        console.log('Empty');
    }
}

addRemoveElements(['add', 'add', 'add', 'add']);
// 1 2 3 4

addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
// 1 4 5

addRemoveElements(['remove', 'remove', 'remove', 'remove']);
// Empty