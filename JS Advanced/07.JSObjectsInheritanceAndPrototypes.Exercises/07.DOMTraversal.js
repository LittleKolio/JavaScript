function olee(selector) {
    let count = 0;
    let element = '';
    // console.log($(selector).children());
    something(count, selector);
    function something(c, child) {
        if (c > count) {
            count = c; element = child;
        }
        $(child).children().each((i, e) => something(c + 1, e))
    }

    // $(element).addClass('highlight');
    let e = element;

    // console.log(e[0]);
    // console.log($(selector)[0]);

    while (true) {
        $(e).addClass('highlight');
        if (e == $(selector)[0]) {
            break;
        }
        e = ($(e).parent())[0];
    }
    // console.log(element);
}