/**
 * Created by LittleKolio on 6/21/2016.
 */
function jsonParse (arr) {
    let peoples = arr.map (JSON.parse);
    for (let obj of peoples) {
        console.log ('Name: ' + obj.name);
        console.log ('Age: ' + obj.age);
        console.log ('Date: ' + obj.date);
    }
}
/**
jsonParse([
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]);
 */