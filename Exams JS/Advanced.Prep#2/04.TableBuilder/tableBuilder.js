function tableBuilder(selector) {

    function del() {
        $(this).parent().parent().remove();
        // $(event.target.parentNode.parentNode).remove();
    }

    function createTable(columnNames) {
        $(selector).empty();

        let tr = $('<tr>');
        for (let col of columnNames) {
            tr.append($('<th>').text(col))
        }
        tr.append($('<th>').text('Action'));
        let table = $('<table>').append(tr);

        $(selector).append(table)
    }

    function fillData(dataRows) {

        for (let row of dataRows) {
            let but = $('<button>').text('[Delete]').click(del);
            let tr = $('<tr>');
            for (let col of row) {
                tr.append($('<td>').text(col))
            }
            tr.append($('<td>').append(but));
            $(selector + ' table').append(tr);
        }
    }

    return {createTable, fillData}
}