import $ from 'jquery';

let KinveyRequest = (function() {
    const appKey = 'kid_SJsiyMIGx';
    const secretKey = 'ef249dd84ac0474aba28b544e5d7c740';
    let tokenBaisc = 'Basic ' + btoa(appKey + ':' + secretKey);
    let urlApp = `https://baas.kinvey.com/appdata/${appKey}/collection`;
    let urlUser = `https://baas.kinvey.com/user/${appKey}`;

    function login(username, password) {
        return (
            $.ajax({
                url: urlUser + '/login',
                method: 'POST',
                data: {username, password},
                headers: {
                    'Authorization': tokenBaisc
                }
            })
        )
    }

    function register(username, password) {
      return (
        $.ajax({
          url: urlUser,
          method: 'POST',
          data: {username, password},
          headers: {
            'Authorization': tokenBaisc
          }
        })
      )
    }

    function getBooks() {
        return (
            $.ajax({
                url: urlApp,
                method: 'GET',
                headers: {
                    'Authorization': 'Kinvey ' +
                        sessionStorage.getItem('authToken')
                }
            })
        )
    }

    function postBook(title, author, description) {
        return (
            $.ajax({
                url: urlApp,
                method: 'POST',
                data: {title, author, description},
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authToken')
                }
            })
        )
    }

    function getBook(bookId) {
        return (
            $.ajax({
                url: urlApp + '/' + bookId,
                method: 'GET',
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authToken')
                }
            })
        )
    }

    function putBook(bookId, title, author, description) {
        return (
            $.ajax({
                url: urlApp + '/' + bookId,
                method: 'PUT',
                data: {title, author, description},
                headers: {
                    'Authorization': 'Kinvey ' +
                    sessionStorage.getItem('authToken')
                }
            })
        )
    }

    return {
        login,
        register,
        getBooks,
        postBook,
        getBook,
        putBook
    }

})();

export default KinveyRequest;