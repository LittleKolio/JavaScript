function loadRepos() {
    $('#repos').empty();
    let user = $('#username').val();
    let url = 'https://api.github.com/users/' + user + '/repos';
    $.get(url)
        .then(displayRepos)
        .catch(displayError);

    function displayRepos(repos) {
        let text = $(document.createDocumentFragment());
        for (let repo of repos) {
            let a = $('<a>', {
                text: repo.full_name,
                href: repo.html_url
            });
            let li = $('<li>').append(a);
            text.append(li);
        }
        $('#repos').append(text);
    }
    function displayError() {
        let li = $('<li>', {text: 'Error!'});
        $('#repos').append(li);
    }
}

/*
$.get(url)
    .then(function (data) {
        $(data).each((i, e) => {
            let a = $('<a>')
                .text(e.full_name)
                .attr('href', e.html_url);
            let li = $('<li>').append(a);
            $('#repos').append(li);
        });
    })
    .catch(function() {
        $('#repos').append($('<li>Error!</li>'))
    });
*/

/*
function loadRepos() {
    $("#repos").empty();
    let url = "https://api.github.com/users/" +
        $("#username").val() + "/repos";
    $.ajax({ url,
        success: displayRepos,
        error: displayError
    });
    function displayRepos(respos) {
        for (let repo of respos) {
            let link = $('<a>').text(repo.full_name);
            link.attr('href', repo.html_url);
            $("#repos").append($('<li>').append(link));
        }
    }
    function displayError(err) {
        $("#repos").append($("<li>Error</li>"));
    }
}
*/