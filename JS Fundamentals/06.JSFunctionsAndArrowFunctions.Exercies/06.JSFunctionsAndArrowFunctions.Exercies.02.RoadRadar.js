/**
 * Created by LittleKolio on 10/3/2016.
 *
 * motorway 130 km/h
 * interstate 90 km/h
 * city 50 km/h
 * residential area 20 km/h
 *
 * up to 20 km/h speeding
 * up to 40 excessive speeding
 * anything else reckless driving
 */
function radar([speed, area]) {

    let limit = (function (ha) {
        switch (ha) {
            case 'residential': return 20;
            case 'city': return 50;
            case 'interstate': return 90;
            case 'motorway': return 130;
        }
    })(area);

    function beee(speed, lim) {
        let overSpeed = Number(speed) - lim;
        if (overSpeed > 0 && overSpeed <= 20)
            return 'speeding';
        else if (overSpeed > 20 && overSpeed <= 40)
            return 'excessive speeding';
        else if (overSpeed > 40)
            return 'reckless driving';
        else
            return '';
    }

    console.log(beee(speed, limit));
}

radar(['40', 'city']); // (empty)
radar(['120', 'interstate']); // excessive speeding
radar(['21', 'residential']); // speeding
radar(['200', 'motorway']); // reckless driving