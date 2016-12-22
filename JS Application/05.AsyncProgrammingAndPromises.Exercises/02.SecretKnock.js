let appId = 'kid_BJXTsSi-e';
let url = 'https://baas.kinvey.com/appdata/' + appId + '/knock';
let message = 'Knock Knock.';
let token = 'Basic ' + btoa('guest:guest');

console.log(message);
$.ajax({
    method: 'GET',
    url: url + '?query=' + message,
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
})
    .then(displayResult1)
    .catch(displayError);

function displayResult1(data) {
    console.log(data.answer);
    console.log(data.message);
    $.ajax({
        method: 'GET',
        url: url + '?query=' + data.message,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
        .then(displayResult2)
        .catch(displayError);
}

function displayResult2(data) {
    console.log(data.answer);
    console.log(data.message);
    $.ajax({
        method: 'GET',
        url: url + '?query=' + data.message,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })
        .then(displayResult3)
        .catch(displayError);
}

function displayResult3(data) {
    console.log(data.answer);
}

function displayError(error) {
    let result = 'Error: ' + error.status + ' (' + error.statusText + ')';
    console.log(result);
}



// let obj = {
//     message: 'Knock Knock.'
// };
//
// function func(data) {
//     console.log(data.message);
//     $.ajax({
//         method: 'GET',
//         url: url + '?query=' + data.message,
//         headers: {
//             'Authorization': token,
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(func)
//         .catch(displayError);
// }
//
// func(obj);