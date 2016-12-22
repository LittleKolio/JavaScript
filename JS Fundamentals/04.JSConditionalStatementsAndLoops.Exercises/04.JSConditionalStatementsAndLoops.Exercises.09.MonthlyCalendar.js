/**
 * Created by LittleKolio on 9/27/2016.
 */

function calendar([day, month, year]) {
    let inputDate = new Date(year, month - 1, 1);

    let firstDay = new Date(inputDate);

    firstDay.setDate(firstDay.getDate() - firstDay.getDay());

    let result = '<JSONtoHTMLtable>\n  <tr>';
    let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let item of week) {
        result += `<th>${item}</th>`
    }
    result += '</tr>\n';

    let days = new Date(firstDay);

    while (true) {
        result += '  <tr>';
        for (let col = 1; col <= 7; col++) {

            switch (true) {
                case (
                    days.getDate() == day &&
                    days.getMonth() == inputDate.getMonth()
                ):
                    result += `<td class="today">${days.getDate()}</td>`;
                    break;
                case (
                    days.getMonth() == inputDate.getMonth() - 1 ||
                    days.getFullYear() < inputDate.getFullYear()
                ):
                    result += `<td class="prev-month">${days.getDate()}</td>`;
                    break;
                case (
                    days.getMonth() == inputDate.getMonth() + 1 ||
                    days.getFullYear() > inputDate.getFullYear()
                ):
                    result += `<td class="next-month">${days.getDate()}</td>`;
                    break;
                default:
                    result += `<td>${days.getDate()}</td>`;
                    break;
            }

            days.setDate(days.getDate() + 1);
        }
        result += '</tr>\n';
        if (
            days.getMonth() == inputDate.getMonth() + 1 ||
            days.getFullYear() > inputDate.getFullYear()
        ) break;
    }
    result += '</JSONtoHTMLtable>';
    return result;
}
