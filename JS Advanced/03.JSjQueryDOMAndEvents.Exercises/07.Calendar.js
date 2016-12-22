/**
 * Created by LittleKolio on 10/27/2016.
 */
function calendar([day, month, year]) {
    let date = new Date(year, month - 1, 1);
    let firstDay = new Date(date);

    // alert((firstDay.getDay() + 6) % 7);

    // връща първия ден понеделник от седмицата (дата от предния месец)
    firstDay.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7));
    let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let m = date.toLocaleString('en-us', {month: 'long'});

    let tab = $('<table>');
    let cap = $('<caption>', {
        text: m + ' ' + date.getFullYear()
    });
    let weekDays = $('<tr>');
    $(week).each((index, element) => {
        weekDays.append($('<th>').text(element));
    });

    $('#content')
        .append(tab
            .append(cap)
            .append(weekDays)
        );

    let days = new Date(firstDay);
    while (true) {
        let weekRow = $('<tr>'),
            dayInRow;
        for (let col = 1; col <= 7; col++) {
            switch (true) {
                case (
                    days.getDate() == day &&
                    days.getMonth() == date.getMonth()
                ): dayInRow = $('<td>', {class: 'today', text: days.getDate()});
                    break;
                case (
                    days.getMonth() == date.getMonth() - 1 ||
                    days.getFullYear() < date.getFullYear()
                ): dayInRow = $('<td>', {text: ''});
                    break;
                case (
                    days.getMonth() == date.getMonth() + 1 ||
                    days.getFullYear() > date.getFullYear()
                ): dayInRow = $('<td>', {text: ''});
                    break;
                default: dayInRow = $('<td>', {text: days.getDate()});
            }
            weekRow.append(dayInRow);
            days.setDate(days.getDate() + 1);
        }
        $('#content table').append(weekRow);
        if (
            days.getMonth() == date.getMonth() + 1 ||
            days.getFullYear() > date.getFullYear()
        ) break;
    }
}


// month = objDate.toLocaleString(locale, { month: "long" });