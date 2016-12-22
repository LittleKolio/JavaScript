/**
 * Created by LittleKolio on 10/27/2016.
 */
function commandProcess(input) {
    let proces = (function () {
        let result = '';
        return {
            append: (text) => result += text,
            removeStart: (num) => result = result.slice(Number(num)),
            removeEnd: (num) => result = result.slice(0, result.length - Number(num)),
            print: () => console.log(result)
        }
    })();
    for (let el of input) {
        let [func, arg] = el.split(' ');
        proces[func](arg);
    }
}

commandProcess([
    'append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
]);