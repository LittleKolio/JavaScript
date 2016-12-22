import * as request from './request';
import checkUser from './userState';


function saveSession(info) {
    sessionStorage.setItem('authToken', info._kmd.authtoken);
    sessionStorage.setItem('userId', info._id);
    sessionStorage.setItem('username', info.username);
    sessionStorage.setItem('teamId', info.teamId);

    checkUser.userState();
}

function register(username, password, func) {
    let data = {
        username: username,
        password: password
    };
    request
        .post('user', '', data, 'basic')
        .then(function(userInfo) {
            saveSession(userInfo);
            func(true);
        })
}

function login(username, password, func) {
    let data = {
        username: username,
        password: password
    };
    request
        .post('user', 'login', data, 'basic')
        .then(function(userInfo) {
            saveSession(userInfo);
            func(true);
        })
}

function logout(func) {
    request
        .post('user', '_logout', null, 'kinvey')
        .then(function() {
            sessionStorage.clear();
            checkUser.userState();
            func(true);
        })
}

function create(name, description, func) {
    let data = {
        name: name,
        description: description
    };
    request
        .post('appdata', 'team', data, 'kinvey')
        .then(function(teamData) {
            join(teamData._id, func)
        })
}

function join(id, func) {
    let data = {
        username: sessionStorage.getItem('username'),
        teamId: id
    };
    let userId = sessionStorage.getItem('userId');
    request
        .put('user', userId, data, 'kinvey')
        .then(function(userInfo) {
            saveSession(userInfo);
            checkUser.userState();
            func(true);
        });
}

function load(func, id = '') {
    request
        .get('appdata', 'team/' + id, 'kinvey')
        .then(func);
}

function leave(func) {

}

function usersDetails(id, func) {
    request
        .get('user', `?query={"teamId":"${id}"}`, 'kinvey')
        .then(function(users) {
            func(users);
        })
}

export {register, login, logout, create, load, join, leave, usersDetails};