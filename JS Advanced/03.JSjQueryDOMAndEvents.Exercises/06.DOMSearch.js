/**
 * Created by LittleKolio on 10/26/2016.
 */
function domSearch(selector, casesensitive = false) {

    function removeItemFromUl() {
        $(this).parent().remove();
    }

    function addItemToUl() {
        let textInput = $('div.add-controls label input').val();
        let li = $('<li>', {class: 'list-item'})
            .append($('<a>', {class: 'button', text: 'X'}).click(removeItemFromUl))
            .append($('<strong>', {text: textInput}));
        $('div.result-controls ul').append(li);
    }

    let add = $('<div>', {class: 'add-controls'})
        .append($('<label>', {text: 'Enter text:'}).append($('<input>')))
        .append($('<a>', {
            class: 'button',
            style: 'display: inline-block',
            text: 'Add'
        }).click(addItemToUl));



    let search = $('<div>', {class: 'search-controls'})
        .append($('<label>', {text: 'Search:'})
            .append($('<input>').on('input', compare))
        );

    let result = $('<div>', {class: 'result-controls'})
        .append($('<ul>', {class: 'items-list'}));

    $(selector)
        .append(add)
        .append(search)
        .append(result);

    function compare() {
        if ($(this).val()) {
            $('li.list-item').each((index, element) => {
                let elementText = element.textContent;
                let searchText = $(this).val();

                if (!casesensitive) {
                    elementText = elementText.toLowerCase();
                    searchText = searchText.toLowerCase();
                }

                if (elementText.includes(searchText)) {
                    $(element).css('display', 'block');
                } else {
                    $(element).css('display', 'none');
                }
            });
        } else {
            $('li.list-item').css('display', 'block');
        }
    }
}
