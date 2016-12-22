function attachEvents() {
    const appId = 'kid_S14Snagze';
    const url = 'https://baas.kinvey.com/appdata/' + appId;
    const user = 'peter';
    const pass = 'peter';
    const authHeaders = {
        Authorization: 'Basic ' + btoa(user + ':' + pass)
    };

    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPost);

    function loadPosts() {
        let request = {
            url: url + '/posts',
            method: 'GET',
            headers: authHeaders
        };
        $.ajax(request)
            .then(displayPosts)
            .catch(displayError);
    }

    function displayPosts(posts) {
        // console.log(posts);
        let data = $(document.createDocumentFragment());
        for (let post of posts) {
            let op = $('<option>', {
                text: post.title,
                value: post._id
            });
            data.append(op);
        }
        $('#posts').append(data);
    }

    function viewPost() {
        let selected = $('#posts').val();
        let requestPost = $.ajax({
            url: url + '/posts/' + selected,
            method: 'GET',
            headers: authHeaders
        });
        let requestComments = $.ajax({
            url: url + `/comments/?query={"post_id":"${selected}"}`,
            method: 'GET',
            headers: authHeaders
        });
        Promise.all([requestPost, requestComments])
            .then(displayPostAndComments)
            .catch(displayError);
    }

    function displayPostAndComments([post, comments]) {
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);
        $('#post-comments').empty();
        let data = $(document.createDocumentFragment());
        for (let comm of comments) {
            let li = $('<li>', {text: comm.text});
            data.append(li);
        }
        $('#post-comments').append(data);
    }

    function displayError(error) {
        let div = $('<div>', {
            text: 'Error: ' + error.status +
            ' (' + error.statusText + ')'
        });
        $(document.body).prepend(div);
        setTimeout(function() {
            div.fadeOut(function() {
                div.remove();
            });
        }, 2000)
    }
}