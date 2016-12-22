$(function() {
    const url = 'https://phonebook-bc992.firebaseio.com/book';
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContacts);

    $('#person').val('');
    $('#phone').val('');

    function loadContacts() {
        $('#phonebook').empty();
        $('#person').val('');
        $('#phone').val('');

        $.get(url + '.json')
            .then(displayContacts)
            .catch(displayError);
    }

    function displayContacts(contacts) {
        for (let key of Object.keys(contacts)) {
            if (contacts[key].name) {
                let cont = contacts[key].name +
                    ': ' + contacts[key].phone + ' ';
                let li = $('<li>', {text: cont});
                let a = $('<a>', {href: '#', text: '[Delete]'})
                    .click(() => {deleteContact(key)});
                $('#phonebook').append(li.append(a));
            }
        }
    }

    function deleteContact(key) {
        // alert(key);
        $.ajax({
            url: `${url}/${key}.json`,
            method: 'DELETE'
        })
            .then(loadContacts)
            .catch(displayError);
    }

    function createContacts() {
        let data = JSON.stringify({
            name: $('#person').val(),
            phone: $('#phone').val()
        });
        $.postUser(url + '.json', data)
            .then(loadContacts)
            .catch(displayError);
        $('#person').val('');
        $('#phone').val('');
    }

    function displayError() {
        $('#phonebook').append($('<li>', {text: 'Error!'}));
    }
});