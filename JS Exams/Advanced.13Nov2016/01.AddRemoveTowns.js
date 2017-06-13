function attachEvents() {
    $('#towns option:selected').prop('selected', false);
    $('#newItem').val('');

    $('#btnAdd').click(function() {
        let text = $('#newItem').val();
        $('#towns').append($('<option>').text(text));
        $('#newItem').val('');
    });
    $('#btnDelete').click(function() {
        $('#towns option:selected').remove();
    });
}