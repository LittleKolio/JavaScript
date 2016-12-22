function attachEvents() {
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook';
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(createContacts);

    $('#person').val('');
    $('#phone').val('');

    function loadContacts() {
        $('#phonebook').empty();

        $.get(url + '.json')
            .then(displayContacts)
            .catch(displayError);
    }

    function displayContacts(contacts) {
        let text = $(document.createDocumentFragment());

        for (let key of Object.keys(contacts)) {
            if (contacts[key].person) {
                let cont = contacts[key].person +
                    ': ' + contacts[key].phone + ' ';
                let li = $('<li>', {text: cont});
                let a = $('<a>', {href: '#', text: '[Delete]'})
                    .click(() => {deleteContact(key)});
                text.append(li.append(a));
            }
        }

        $('#phonebook').append(text);
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
            person: $('#person').val(),
            phone: $('#phone').val()
        });
        $.postUser(url + '.json', data)
            .then(() => {
                loadContacts();
                $('#person').val('');
                $('#phone').val('');
            })
            .catch(displayError);

    }

    function displayError() {
        $('#phonebook').append($('<li>', {text: 'Error!'}));
    }
}