function resolve(selector) {
    let text = [];
    $('#content strong').each((i, e) => {
        // text.push(e.textContent);
        text.push($(e).text());
    });
    // console.log(text.join('\n'));

    let html = $('<div>', {id: 'summary'})
        .append($('<h2>', {text: 'Summary'}))
        .append($('<p>', {text: text.join('')}));

    // $(selector).on('click', function(ev) {
    //     $(ev.target).parent().append(html);
    // });

    // $(selector).click(function() {
    //     $(this).parent().append(html);
    // });

    $(selector).click(function() {
        $(html).insertAfter('#content')
    });
}