function attachEvents() {
    const url = 'https://judgetests.firebaseio.com/';
    let symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };
    let location = $('#location').val();
    $('#submit').click(getLocations);

    function getLocations() {
        $.get(url + 'locations.json')
            .then(getWeather)
            .catch(displayError);
    }
    function getWeather(locations) {
        let code = locations.filter(e => e.name == location)[0].code;

        let getToday = $.get(
            `${url}forecast/today/${code}.json`
        );
        let getUpcoming = $.get(
            `${url}forecast/upcoming/${code}.json`
        );
        Promise.all([getToday, getUpcoming])
            .then(displayWeather)
            .catch(displayError);
    }

    function displayWeather([today, upcoming]) {
        let objCurrent = {
            symbolSpan: `<span class="condition symbol">` +
            `${symbols[today.forecast.condition]}</span>`,
            nameSpan: `<span class="forecast-data">` +
            `${today.name}</span>`,
            degreeSpan: `<span class="forecast-data">` +
            `${today.forecast.low}&deg;/${today.forecast.high}&deg;</span>`,
            conditionSpan: `<span class="forecast-data">` +
            `${today.forecast.condition}</span>`,
        };

        let spanCurrnet = $('<span>').addClass('condition')
            .append($(objCurrent.nameSpan))
            .append($(objCurrent.degreeSpan))
            .append($(objCurrent.conditionSpan));

        function upcomingHTML(day) {
            let objUpcoming = {
                symbolSpan: `<span class="symbol">` +
                `${symbols[day.condition]}</span>`,
                degreeSpan: `<span class="forecast-data">` +
                `${day.low}&deg;/${day.high}&deg;</span>`,
                conditionSpan: `<span class="forecast-data">` +
                `${day.condition}</span>`,
            };
            return $('<span>')
                .addClass('upcoming')
                .append($(objUpcoming.symbolSpan))
                .append($(objUpcoming.degreeSpan))
                .append($(objUpcoming.conditionSpan));
        }

        let html = $(document.createDocumentFragment());
        for (let day of upcoming.forecast)
            html.append(upcomingHTML(day));

        $('#current')
            .append($(objCurrent.symbolSpan))
            .append(spanCurrnet);
        $('#upcoming').append(html);

        $('#forecast').removeAttr('style');
    }

    function displayError(error) {
        let message = 'Error: ' + error.status + ' (' + error.statusText + ')';
        let div = $('<div>').text(message);
        $('#forecast')
            .append(div)
            .removeAttr('style');

        // setTimeout(function() {
        //     $('#forecast').fadeOut(function() {
        //         div.remove();
        //         $('#forecast').removeAttr('style');
        //     });
        // }, 2000)
    }
}