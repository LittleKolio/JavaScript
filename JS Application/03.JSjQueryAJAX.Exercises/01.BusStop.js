function getInfo() {
    $('#buses').empty();
    $('#stopName').empty();
    const url = 'https://judgetests.firebaseio.com/businfo/';
    let id = $('#stopId').val();
    $.get(url + id + '.json')
        .then(displayBuses)
        .catch(displayError);

    function displayBuses(data) {
        if (data == null)
            return displayError();
        // alert(data);
        let doc = $(document.createDocumentFragment());
        $('#stopName').text(data.name);
        for (let key of Object.keys(data.buses)) {
            let text = `Bus ${key} arrives in ${data.buses[key]} minutes`;
            doc.append($('<li>', {text: text}));
        }
        $('#buses').append(doc);
    }

    function displayError() {
        // alert('Error');
        $('#stopName').text('Error');
    }
}