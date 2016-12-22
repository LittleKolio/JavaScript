/**
 * Created by LittleKolio on 9/24/2016.
 */
function leapYear([year]) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        return 'yes';
    else
        return 'no';
}
/**
function leapYear([year]) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 'yes' : 'no';
}
 */
