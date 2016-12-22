function something() {
    let appKey = 'kid_SJsiyMIGx';
    let secretKey = 'ef249dd84ac0474aba28b544e5d7c740';
    let tokenBaisc = 'Basic ' + btoa(appKey + ':' + secretKey);
    let urlApp = `https://baas.kinvey.com/appdata/${appKey}/collection`;
    let urlUser = `https://baas.kinvey.com/user/${appKey}`;

    sessionStorage.clear();
    showAndHideMenu();
    $('body section').hide();
    showView('viewHome');


    // menu LINKS
    $('#linkHome').click(function() {showView('viewHome')});

    $('#linkLogin').click(function() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    });

    $('#linkRegister').click(function() {
        showView('viewRegister');
        $('#formRegister').trigger('reset');
    });

    $('#linkListBooks').click(function() {
        listBooks();
    });

    $('#linkCreateBook').click(function() {
        showView('viewCreateBook');
        $('#formCreateBook').trigger('reset');
    });

    $('#linkLogout').click(logout);

    // section BUTTONS
    $('#formLogin').submit(loginUser);
    $('#formRegister').submit(registerUser);
    $('#formCreateBook').submit(createBook);
    $('#formEditBook').submit(editBookBtn);

    // box MESSAGES
    $('#infoBox, #errorBox').click(function() {
        $(this).fadeOut();
    });

    // $(document).on({
    //     ajaxStart: function() {$('#loadingBox').show();},
    //     ajaxStop: function() {$('#loadingBox').hide();}
    // });

    function showAndHideMenu() {
        $('#menu a').hide();
        if (sessionStorage.getItem('authToken')) {
            $('#linkHome').show();
            $('#linkLogout').show();
            $('#linkListBooks').show();
            $('#linkCreateBook').show();
            $('#loggedInUser').text(
                'Welcome ' + sessionStorage.getItem('username')
            );
        } else {
            $('#linkHome').show();
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#loggedInUser').text('');
        }
    }

    function showView(view) {
        $('main > section').hide();
        $('#' + view).show();
    }

    function loginUser(event) {
        event.preventDefault();
        let userData = JSON.stringify({
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=password]').val()
        });
        $.ajax({
            url: urlUser + '/login',
            method: 'POST',
            data: userData,
            contentType: 'application/json',
            headers: {
                'Authorization': tokenBaisc
            }
        })
            .then(function(result) {
                sessionStorage.setItem('username', result.username);
                sessionStorage.setItem('authToken', result._kmd.authtoken);
                sessionStorage.setItem('author', result._id);
                showInfo('User login successful');
                showAndHideMenu();
            })
            .catch(processingError);
    }

    function registerUser(event) {
        event.preventDefault();
        let userData = JSON.stringify({
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=password]').val()
        });
        $.ajax({
            url: urlUser,
            method: 'POST',
            data: userData,
            contentType: 'application/json',
            headers: {
                'Authorization': tokenBaisc,
                'Content-Type': 'application/json'
            }
        })
            .then(function(result) {
                sessionStorage.setItem('username', result.username);
                sessionStorage.setItem('authToken', result._kmd.authtoken);
                sessionStorage.setItem('author', result._id);
                showInfo('User registration successful');
                showAndHideMenu();
            })
            .catch(processingError);
    }

    function logout() {
        sessionStorage.clear();
        showAndHideMenu();
        showView('viewHome');
        showInfo('Logout successful')
    }

    function listBooks() {
        $('#books').empty();
        $.ajax({
            url: urlApp,
            method: 'GET',
            headers: {
                'Authorization': 'Kinvey ' +
                sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            }
        })
            .then(displayBooks)
            .catch(processingError);
    }

    function displayBooks(data) {
        let table = $(`<table>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </table>`);

        for (let row of data) {
            let links = [];
            if (row._acl.creator == sessionStorage.getItem('author')) {
                let id = row._id;
                let del = $('<a>', {
                    text: '[Delete]',
                    href: '#'
                }).click(function () {
                    deleteBook(id);
                });
                let ed = $('<a>', {
                    text: '[Edit]',
                    href: '#'
                }).click(function () {
                    editBook(id)
                });
                links.push(del);links.push(' ');links.push(ed);
            }
            let tr = $('<tr>')
                .append($('<td>', {text: row.title}))
                .append($('<td>', {text: row.author}))
                .append($('<td>', {text: row.description}))
                .append($('<td>').append(links));

            table.append(tr);
        }
        $('#books').append(table);
        showView('viewBooks');
    }

    function createBook(event) {
        event.preventDefault();
        let data = JSON.stringify({
            author: $('#formCreateBook input[name=author]').val(),
            title: $('#formCreateBook input[name=title]').val(),
            description: $('#formCreateBook textarea[name=descr]').val()
        });
        $.ajax({
            url: urlApp,
            method: 'POST',
            data: data,
            contentType: 'application/json',
            headers: {
                'Authorization': 'Kinvey ' +
                sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            }
        })
            .then(function() {
                showInfo('Book created');
                listBooks();
            })
            .catch(processingError);
    }

    function editBookBtn(event) {
        event.preventDefault();
        let data = JSON.stringify({
            author: $('#formEditBook input[name=author]').val(),
            title: $('#formEditBook input[name=title]').val(),
            description: $('#formEditBook textarea[name=descr]').val()
        });
        $.ajax({
            url: urlApp + '/' + $('#formEditBook input[name=id]').val(),
            method: 'PUT',
            data: data,
            contentType: 'application/json',
            headers: {
                'Authorization': 'Kinvey ' +
                sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            }
        })
            .then(function() {
                showInfo('Book edited');
                listBooks();
            })
            .catch(processingError);
    }

    function editBook(id) {
        $.ajax({
            url: urlApp + '/' + id,
            method: 'GET',
            headers: {
                'Authorization': 'Kinvey ' +
                sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            }
        })
            .then(function(book) {
                $('#formEditBook input[name=id]').val(book._id);
                $('#formEditBook input[name=author]').val(book.author);
                $('#formEditBook input[name=title]').val(book.title);
                $('#formEditBook textarea[name=descr]').val(book.description);
                showView('viewEditBook');
            })
            .catch(processingError);
    }

    function deleteBook(id) {
        $.ajax({
            url: urlApp + '/' + id,
            method: 'DELETE',
            headers: {
                'Authorization': 'Kinvey ' +
                sessionStorage.getItem('authToken'),
                'Content-Type': 'application/json'
            }
        })
            .then(function() {
                showInfo('Book deleted');
                listBooks();
            })
            .catch(processingError);
    }

    function processingError(error) {
        let message = JSON.stringify(error);
        if (error.readyState == 0)
            message = 'Cannot connect';
        if (error.responseJSON && error.responseJSON.description)
            message = error.responseJSON.description;
        showError(message);
    }

    function showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {$('#infoBox').fadeOut()}, 2000)
    }

    function showError(message) {
        $('#errorBox').text(message).show();
        setTimeout(function() {$('#errorBox').fadeOut()}, 5000)
    }
}