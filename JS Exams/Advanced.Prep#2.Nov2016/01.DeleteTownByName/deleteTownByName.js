function attachEvents() {
    $('#btnDelete').click(function() {
        // let input = $(this).parent().find('input').val();

        // :contains хваща и част от дума
        // let search = $('#towns').find(`:contains(${town})`);
        // if (search) {
        //     search.remove();
        //     $('#result').text(`${town} deleted.`)
        // } else {
        //     $('#result').text(`${town} not found.`)
        // }

        let town = $('#townName').val();
        let towns = $('#towns option').toArray();
        let deleteBool = false;

        for (let t of towns) {
            if (t.textContent === town) {
                $(t).remove();
                deleteBool = true;
            }
        }

        $('#result').text(function() {
            return deleteBool
                ? `${town} deleted.`
                : `${town} not found.`;
        });

        $('#townName').val('');

    })
}