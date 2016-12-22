function attachEvents() {
    const url = 'https://littleproject-25aff.firebaseio.com/messenger';

    let loadContent = function() {
        $('#messages').empty();
        $.get(url + '.json')
            .then(displayMessages)
            .catch(displayError);
    };
    loadContent();
    $('#submit').click(postContent);
    $('#refresh').click(loadContent);

    function displayMessages(data) {
        let text = $(document.createDocumentFragment());
        Object.keys(data)
            .map(key => data[key])
            .sort((f, s) => f.timestamp - s.timestamp)
            .forEach(e => text.append(`${e.author}: ${e.content}\n`));
        $('#messages').append(text);
    }

    function displayError() {
        $('#messages').text('Error!');
    }

    function postContent() {
        let data = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        };
        $.postUser(url + '.json', JSON.stringify(data))
            .then(() => {
                $('#messages').append(`${data.author}: ${data.content}\n`);
                $('#author').val('');
                $('#content').val('');
            })
            .catch(displayError);
    }
}