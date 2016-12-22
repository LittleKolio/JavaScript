/**
 * Created by LittleKolio on 10/11/2016.
 */
function toJSON(input) {
    let obj = [];
    for (let line of input.slice(1)) {
        let [empty, name, lat, long] = line.split(/\s*\|\s*/);
        //console.log([name, lat, long]);
        let temp = {
            Town:name,
            Latitude:Number(lat),
            Longitude:Number(long)
        };
        obj.push(temp);
    }
    return JSON.stringify(obj);
}

console.log(
    toJSON([
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ])
);
/**
 [
    {"Town":"Sofia","Latitude":42.696552,"Longitude":23.32601},
    {"Town":"Beijing","Latitude":39.913818,"Longitude":116.363625}
 ]
 */

console.log(
    toJSON([
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ])
);
/**
 [
     {"Town":"Veliko Turnovo","Latitude":43.0757,"Longitude":25.6172},
     {"Town":"Monatevideo","Latitude":34.5,"Longitude":56.11}
 ]
 */
