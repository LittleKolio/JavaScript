function cardDeckBuilder(selector) {
    const f = {2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:'10', J:'J', Q:'Q', K:'K', A:'A'};
    const s = {'S':'\u2660', 'D':'\u2666', 'H':'\u2665', 'C':'\u2663'};
    function addCard(face, suit) {
        let card = $('<div>').addClass('card').text(`${f[face]} ${s[suit]}`);
        $(selector).append(card.on('click', reverce));
    }

    function reverce() {
        let arr = $(selector + ' div').toArray().reverse();
        $(selector).empty();
        arr.forEach(function(e) {
            $(selector).append($(e).on('click', reverce));
        })
    }

    return {addCard};
}