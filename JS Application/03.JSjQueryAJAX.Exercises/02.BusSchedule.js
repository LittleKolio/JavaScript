function solve() {
    const url = 'https://judgetests.firebaseio.com/schedule/';
    let stop = 'depot';

    function depart() {
        $('#depart').prop('disabled', true);

        $.get(url + stop + '.json')
            .then((data) => {
                // console.dir(this);
                displayStops(data);
                $('#arrive').prop('disabled', false);
            })
            .catch(displayError);
    }
    function arrive() {
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }
    return {
        depart,
        arrive
    };

    function displayStops(data) {
        $('#info span.info').text(data.name);
        stop = data.next;
    }

    function displayError() {
        $('#info .info').text('Error');
    }
}
let result = solve();