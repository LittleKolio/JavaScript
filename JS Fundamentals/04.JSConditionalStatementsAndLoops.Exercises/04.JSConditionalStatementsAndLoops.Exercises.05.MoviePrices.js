/**
 * Created by LittleKolio on 9/27/2016.
 */
function moviePrices([title, day]) {
    switch (title.toLowerCase()) {
        case 'the godfather': {
            let obj = {
                'monday': 12,
                'tuesday': 10,
                'wednesday': 15,
                'thursday': 12.5,
                'friday': 15,
                'saturday': 25,
                'sunday': 30
            };
            let price = obj[day.toLowerCase()];
            console.log(price != undefined ? price : 'error');
        } break;
        case "schindler's list": {
            let obj = {
                'monday': 8.50,
                'tuesday': 8.50,
                'wednesday': 8.50,
                'thursday': 8.50,
                'friday': 8.50,
                'saturday': 15,
                'sunday': 15
            };
            let price = obj[day.toLowerCase()];
            console.log(price != undefined ? price : 'error');
        } break;
        case 'casablanca': {
            let obj = {
                'monday': 8,
                'tuesday': 8,
                'wednesday': 8,
                'thursday': 8,
                'friday': 8,
                'saturday': 10,
                'sunday': 10
            };
            let price = obj[day.toLowerCase()];
            console.log(price != undefined ? price : 'error');
        } break;
        case 'the wizard of oz': {
            let obj = {
                'monday': 10,
                'tuesday': 10,
                'wednesday': 10,
                'thursday': 10,
                'friday': 10,
                'saturday': 15,
                'sunday': 15
            };
            let price = obj[day.toLowerCase()];
            console.log(price != undefined ? price : 'error');
        } break;
        default: console.log('error');  break;
    }
}
