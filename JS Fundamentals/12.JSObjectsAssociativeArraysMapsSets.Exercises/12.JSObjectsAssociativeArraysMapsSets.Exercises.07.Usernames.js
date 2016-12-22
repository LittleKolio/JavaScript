/**
 * Created by LittleKolio on 10/12/2016.
 */
function usernames(input) {
    let names = new Set();
    for (let line of input) {
        names.add(line);
    }

    [...names].sort(oleeee).forEach(l => console.log(l));

    function oleeee(j, k) {
        let result = j.length - k.length;
        if (result == 0)
            result = j.localeCompare(k);
        return result;
    }
}

usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);