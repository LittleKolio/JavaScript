function startApp() {
    let appKey = 'kid_BkDKYj_fl';
    let secretKey = 'c14e71c24a534a12a8fb3dcc1134737f';
    let tokenBaisc = 'Basic ' + btoa(appKey + ':' + secretKey);
    let urlApp = `https://baas.kinvey.com/appdata/${appKey}/collection`;
    let urlUser = `https://baas.kinvey.com/user/${appKey}`;

    $(document).on({
        ajaxStart: function() {$('#loadingBox').show();},
        ajaxStop: function() {$('#loadingBox').hide();}
    });

    function start() {
        sessionStorage.clear();
        showMenuLinks();
        showView('viewHome');
    }
    start();
    // VIEW
    function showView(view) {
        $('main section').hide();
        $('#' + view).show();
    }
    // MENU
    function showMenuLinks() {
        $('#menu a').hide();
        if (sessionStorage.getItem('username')) {
            $('#linkHome').show();
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            $('#linkLogout').show();
            $('#linkAdInfo').show();
        } else {
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkHome').show();
        }
    }
    // LINKS
    $('#linkHome').click(function() {
        showView('viewHome')
    });
    $('#linkLogin').click(function() {
        $('#formLogin').trigger('reset');
        showView('viewLogin');
    });
    $('#linkRegister').click(function() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    });
    $('#linkListAds').click(function() {
        requestObj.getAds();
    });
    $('#linkCreateAd').click(function() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    });
    $('#linkLogout').click(function() {
        start();
        showInfo('logout successful');
    });

    // BUTTONS DATA AND CALL REQUEST
    let btnObj = {
        edithAd: function() {
            let data = JSON.stringify({
                title: $('#formEditAd input[name=title]').val(),
                publisher: sessionStorage.getItem('username'),
                description: $('#formEditAd textarea[name=description]').val(),
                price: $('#formEditAd input[name=price]').val(),
                date: $('#formEditAd input[name=datePublished]').val(),
                image: $('#formEditAd input[name=image]').val()
            });
            requestObj.putAd(
                data,
                urlApp + '/' + $('#formEditAd input[name=id]').val(),
                'edited advertisement'
            );
        },
        createAd: function() {
            let data = JSON.stringify({
                title: $('#formCreateAd input[name=title]').val(),
                publisher: sessionStorage.getItem('username'),
                description: $('#formCreateAd textarea[name=description]').val(),
                price: $('#formCreateAd input[name=price]').val(),
                date: $('#formCreateAd input[name=datePublished]').val(),
                image: $('#formCreateAd input[name=image]').val()
            });
            requestObj.postAd(
                data,
                urlApp,
                'create advertisement'
            );
        },
        loginUser: function() {
            let data = JSON.stringify({
                username: $('#formLogin input[name=username]').val(),
                password: $('#formLogin input[name=passwd]').val()
            });
            requestObj.postUser(
                data,
                urlUser + '/login',
                'successful login'
            );
        },
        registerUser: function() {
            let data = JSON.stringify({
                username: $('#formRegister input[name=username]').val(),
                password: $('#formRegister input[name=passwd]').val()
            });
            requestObj.postUser(
                data,
                urlUser,
                'successful registered'
            );
        },
        edithAd: function (id) {
            requestObj.getAd(urlApp + '/' + id);
        },
        deleteAd: function (id) {
            requestObj.deleteAd(
                urlApp + '/' + id,
                'deleted advertisement'
            );
        },
        infoAd: function(id) {
            requestObj.getAdInfo(urlApp + '/' + id);
        }
    };

    // BUTTONS
    $('#buttonRegisterUser').click(btnObj.registerUser);
    $('#buttonLoginUser').click(btnObj.loginUser);
    $('#buttonCreateAd').click(btnObj.createAd);
    $('#buttonEditAd').click(btnObj.edithAd);


    // REQUEST AND ACTION
    let requestObj = {
        postUser: function(data, url, message) {
            $.ajax({
                url: url,
                method: 'POST',
                data: data,
                contentType: 'application/json',
                headers: {
                    'Authorization': tokenBaisc,
                    'Content-Type': 'application/json'
                }
            })
                .then(function(result) {
                    session(result);
                    showInfo(message);
                    showMenuLinks();
                    requestObj.getAds();
                })
                .catch(processingError);
        },
        getAds: function() {
            $.ajax({
                url: urlApp,
                method: 'GET',
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                }
            })
                .then(function(result) {
                    $('#ads.ads').empty();
                    showAds(result);
                })
                .catch(processingError);
        },
        postAd: function(data, url, message) {
            $.ajax({
                url: url,
                method: 'POST',
                data: data,
                contentType: 'application/json',
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                }
            })
                .then(function() {
                    showInfo(message);
                    requestObj.getAds();
                })
                .catch(processingError);
        },
        getAd: function(url) {
            $.ajax({
                url: url,
                method: 'GET',
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                }
            })
                .then(function(result) {
                    $('#formEditAd input[name=id]').val(result._id);
                    $('#formEditAd input[name=title]').val(result.title);
                    $('#formEditAd textarea[name=description]').val(result.description);
                    $('#formEditAd input[name=price]').val(result.price);
                    $('#formEditAd input[name=datePublished]').val(result.date);
                    $('#formEditAd input[name=image]').val(result.image);
                    showView('viewEditAd');
                })
                .catch(processingError);
        },
        getAdInfo: function(url) {
            $.ajax({
                url: url,
                method: 'GET',
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                }
            })
                .then(function(result) {
                    $('#viewAdInfo').empty();
                    showAdInfo(result);
                    showView('viewAdInfo');
                })
                .catch(processingError);
        },
        putAd: function(data, url, message) {
            $.ajax({
                url: url,
                method: 'PUT',
                data: data,
                contentType: 'application/json',
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                }
            })
                .then(function() {
                    showInfo(message);
                    requestObj.getAds();
                })
                .catch(processingError);
        },
        deleteAd: function(url, message) {
            $.ajax({
                url: url,
                method: 'DELETE',
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                }
            })
                .then(function() {
                    showInfo(message);
                    requestObj.getAds();
                })
                .catch(processingError);
        }
    };

    function showAdInfo(result) {
        let html = $(`<div>
    <img src="${result.image}"/><br>
    <label>Title:</label>
    <h1>${result.title}</h1>
    <label>Description:</label>
    <p>${result.description}</p>
    <label>Publisher:</label>
    <div>${result.publisher}</div>
    <label>Date:</label>
    <div>${result.date}</div>
</div>`);
        $('#viewAdInfo').append(html);
    }

    function showAds(result) {
        let table = $(`<table>
            <tr>
                <th>Title</th>
                <th>Publisher</th>
                <th>Description</th>
                <th>Price</th>
                <th>Date Published</th>
                <th>Actions</th>
            </tr>
        </table>`);

        for (let row of result) {
            let links = [];
            if (row._acl.creator == sessionStorage.getItem('creator')) {
                let del = $('<a>', {text: '[Delete]', href: '#', dataId: row._id})
                    .click(function() {btnObj.deleteAd($(this).attr('dataId'))});
                let ed = $('<a>', {text: '[Edit]', href: '#', dataId: row._id})
                    .click(function() {btnObj.edithAd($(this).attr('dataId'))});
                links.push(del);links.push(' ');links.push(ed);links.push(' ');
            }
            let inf = $('<a>', {text: '[Info]', href: '#', dataId: row._id})
                .click(function() {btnObj.infoAd($(this).attr('dataId'))});
            links.push(inf);
            let tr = $('<tr>')
                .append($('<td>', {text: row.title}))
                .append($('<td>', {text: row.publisher}))
                .append($('<td>', {text: row.description}))
                .append($('<td>', {text: row.price}))
                .append($('<td>', {text: row.date}))
                .append($('<td>').append(links));
            table.append(tr);
        }
        $('#ads.ads').append(table);
        showView('viewAds');
    }

    function session(result) {
        sessionStorage.setItem('username', result.username);
        sessionStorage.setItem('authtoken', result._kmd.authtoken);
        sessionStorage.setItem('creator', result._acl.creator);
        showMenuLinks();
    }

    function processingError(error) {
        let message = JSON.stringify(error);
        if (error.readyState == 0)
            message = 'Cannot connect';
        if (error.responseJSON && error.responseJSON.description)
            message = error.responseJSON.description;

        $('#errorBox').text(message).show();
        setTimeout(function() {$('#errorBox').fadeOut()}, 5000)
    }

    function showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {$('#infoBox').fadeOut()}, 2000)
    }
}