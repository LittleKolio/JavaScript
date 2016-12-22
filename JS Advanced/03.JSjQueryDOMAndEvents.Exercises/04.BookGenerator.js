/**
 * Created by LittleKolio on 10/24/2016.
 */

let createBook = (function () {
    let count = 1;
    return function (selector, title, author, isbn) {

        let div = $('<div>').attr('id', 'book' + count);
        count++;
        let pTitle = $('<p>')
            .addClass('title')
            .text(title);
        let pAuthor = $('<p>')
            .addClass('author')
            .text(author);
        let pISBN = $('<p>')
            .addClass('isbn')
            .text(isbn);
        let btnSelect = $('<button>')
            .text('Select')
            .on('click', function () {
                div.css('border', '2px solid blue');
            });
        let btnDeselect = $('<button>')
            .text('Deselect')
            .on('click', function () {
                div.css('border', 'medium none');
            });
        $(selector).append(div
            .append(pTitle)
            .append(pAuthor)
            .append(pISBN)
            .append(btnSelect)
            .append(btnDeselect)
        );
    }
}());


/*
function createBook(selector, title, author, isbn) {
    let count = 1 + $('div' + selector + '>div').toArray().length;

    let div = $('<div>').attr('id', 'book' + count);
    let pTitle = $('<p>')
        .addClass('title')
        .text(title);
    let pAuthor = $('<p>')
        .addClass('author')
        .text(author);
    let pISBN = $('<p>')
        .addClass('isbn')
        .text(isbn);
    let btnSelect = $('<button>')
        .text('Select')
        .on('click', function () {
            div.css('border', '2px solid blue');
        });
    let btnDeselect = $('<button>')
        .text('Deselect')
        .on('click', function () {
            div.css('border', 'medium none');
        });
    $(selector).append(div
        .append(pTitle)
        .append(pAuthor)
        .append(pISBN)
        .append(btnSelect)
        .append(btnDeselect)
    );
}
 */