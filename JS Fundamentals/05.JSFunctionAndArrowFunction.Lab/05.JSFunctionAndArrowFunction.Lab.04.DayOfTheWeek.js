/**
 * Created by LittleKolio on 10/2/2016.
 */
function dayOfWeek(str) {
    let text = str.toString().toLowerCase();
    switch (text) {
        case 'monday': return 1; break;
        case 'tuesday': return 2; break;
        case 'wednesday': return 3; break;
        case 'thursday': return 4; break;
        case 'friday': return 5; break;
        case 'saturday': return 6; break;
        case 'sunday': return 7; break;
        default: return 'error'; break;
    }
}
