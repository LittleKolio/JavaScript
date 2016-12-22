function attachEvents() {
    let appKey = 'kid_BJ_Ke8hZg';
    let tokenBaisc = 'Basic ' + btoa('guest:pass');
    let urlVenues = `https://baas.kinvey.com/rpc/${appKey}/custom/calendar`;
    let urlApp = `https://baas.kinvey.com/appdata/${appKey}/venues/`;

    $('#getVenues').click(postVenues);
    // $('#venue-info').find('input.info').click()
    function postVenues() {
        let date = $('#venueDate').val();
        $.ajax({
            method: 'POST',
            url: urlVenues + '?query=' + date,
            headers: {
                'Authorization': tokenBaisc,
                'Content-Type': 'application/json'
            }
        })
            .then(resultVenues)
            .catch(displayError);
    }

    function resultVenues(venues) {
        $('#venueDate').val('');
        for (let id of venues) {
            getVenue(id);
        }
    }

    function getVenue(id) {
        $('#venue-info').empty();
        $.ajax({
            method: 'GET',
            url: urlApp + id,
            headers: {
                'Authorization': tokenBaisc,
                'Content-Type': 'application/json'
            }
        })
            .then(displayVnues)
            .catch(displayError);
    }

    function displayVnues(data) {
        let html = $(`<div class="venue" id="${data._id}">
          <span class="venue-name">
            <input class="info" type="button" value="More info">${data.name}
          </span>
          <div class="venue-details" style="display: none;">
            <table>
              <tr><th>Ticket Price</th><th>Quantity</th><th></th></tr>
              <tr>
                <td class="venue-price">${data.price} lv</td>
                <td><select class="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select></td>
                <td><input class="purchase" type="button" value="Purchase"></td>
              </tr>
            </table>
            <span class="head">Venue description:</span>
            <p class="description">${data.description}</p>
            <p class="description">Starting time: ${data.startingHour}</p>
          </div>
        </div>`);
        html.find('input.info').click(function(event) {
            alert($(event).append());
            showInfo(data._id)
        });
        $('#venue-info').append(html);
    }

    function showInfo(id) {
        $('#' + id).find('div.venue-details').show();
    }

    function displayError(error) {
        let result = 'Error: ' + error.status + ' (' + error.statusText + ')';
        console.log(result);
    }

}