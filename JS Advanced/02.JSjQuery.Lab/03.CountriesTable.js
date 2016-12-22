/**
 * Created by LittleKolio on 10/22/2016.
 */
function initializeTable() {
    $('#createLink').click(function() {
        let countryName = $('#newCountryText').val();
        let capitalName = $('#newCapitalText').val();
        appendRowToTable(countryName, capitalName);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        fixRowActions();
    });

    appendRowToTable('Bulgaria', 'Sofia');
    appendRowToTable('Germany', 'Berlin');
    appendRowToTable('Russia', 'Moscow');

    function appendRowToTable(country, capital) {
        let action = $('<td>')
            .append($('<a href="#">[Up]</a>').click(actionRow))
            .append($('<a href="#">[Down]</a>').click(actionRow))
            .append($('<a href="#">[Delete]</a>').click(actionRow));

        $('#countriesTable')
            .append(
                $('<tr>')
                .append($('<td>').text(country))
                .append($('<td>').text(capital))
                .append(action)
            );
    }

    fixRowActions();

    /*
     function actionRow() {
     let row = $(this).parent();
     let a = function () {row.remove();};
     let b = function () {row.insertBefore(row.prev());};
     let c = function () {row.insertAfter(row.next());};
     switch (this.innerText) {
     case '[Delete]': row.fadeOut(a); break;
     case '[Up]': row.fadeOut(b); break;
     case '[Down]': row.fadeOut(c); break;
     }
     row.fadeIn();
     }
     */

    function actionRow() {
        let row = $(this).parent().parent();
        let action;
        switch (this.innerText) {
            case '[Delete]': action = row.remove(); break;
            case '[Up]': action = row.insertBefore(row.prev()); break;
            case '[Down]': action = row.insertAfter(row.next()); break;
        }
        row.fadeOut(() => {action});
        row.fadeIn();
        fixRowActions();
    }

    function fixRowActions() {
        let rows = $('#countriesTable tr').toArray();
        $(rows).find('a').css('display', 'inline');
        $(rows[2]).find('a:contains("Up")').css('display', 'none');
        $(rows[rows.length - 1]).find('a:contains("Down")').css('display', 'none');
    }
}