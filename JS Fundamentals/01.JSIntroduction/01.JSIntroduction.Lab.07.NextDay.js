/**
 * Created by LittleKolio on 9/23/2016.
 */
function nextDay([year, month, day]) {
    let date = new Date(year, month - 1, day);
    let oneDay = 24 * 36e+5;
    let nextDay = new Date(date.getTime() + oneDay);
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`)
}