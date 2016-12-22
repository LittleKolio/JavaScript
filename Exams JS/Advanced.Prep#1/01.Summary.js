function summary(selector) {
    let str = '';
    $('#content strong').each((i, e) => str += e.textContent);

    let result = $('<div>', {id: 'summary'})
        .append($('<h2>', {text: 'Summary'}))
        .append($('<p>', {text: str}));

    $(selector).on('click', function () {
        result.insertAfter('#content');
    });
}