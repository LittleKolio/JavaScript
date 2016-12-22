function loadCommits() {
    $('#commits').empty();
    let user = $('#username').val();
    let repo = $('#repo').val();
    let url = 'https://api.github.com/repos/' +
        user + '/' + repo + '/commits';
    $.get(url)
        .then(displayCommits)
        .catch(displayError);

    function displayCommits(commits) {
        let data = $(document.createDocumentFragment());
        // console.log(commits);
        for (let commit of commits) {
            if (commit.commit.author) {
                let text = commit.commit.author.name +
                    ': ' + commit.commit.message;
                let li = $('<li>', {text: text});
                data.append(li);
            }
        }
        $('#commits').append(data);
    }
    function displayError(error) {
        let text = 'Error: ' + error.status +
            ' (' + error.statusText + ')';
        let li = $('<li>', {text: text});
        $('#commits').append(li);
    }
}