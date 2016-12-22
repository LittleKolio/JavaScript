import $ from 'jquery';

const kinveyUrl = "https://baas.kinvey.com/";
const appKey = "kid_S1zRH5LXe";
const secretKey = "e84e23ac0b3a4952bc1d272a55847aee";


function makeAuth(auth) {
    switch (auth) {
        case 'basic': return {'Authorization': 'Basic ' + btoa(appKey + ':' + secretKey)};
            break;
        case 'kinvey': return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')};
            break;
        default: break;
    }
}

function post(mid, end, data, auth) {
    let url = `${kinveyUrl}${mid}/${appKey}/${end}`;
    let headers = makeAuth(auth);
    let req = $.ajax({
        method: 'POST',
        url: url,
        headers: headers
    });
    if (data) {
        req = $.ajax({
            method: 'POST',
            url: url,
            data: data,
            headers: headers
        });
    }
    return req;
}

function get(mid, end, auth) {
    let url = `${kinveyUrl}${mid}/${appKey}/${end}`;
    let headers = makeAuth(auth);
    let req = $.ajax({
        method: 'GET',
        url: url,
        headers: headers
    });
    return req;
}

function put(mid, end, data, auth) {
    let url = `${kinveyUrl}${mid}/${appKey}/${end}`;
    let headers = makeAuth(auth);
    let req = $.ajax({
            method: 'PUT',
            url: url,
            data: data,
            headers: headers
        });
    return req;
}

export {post, get, put}