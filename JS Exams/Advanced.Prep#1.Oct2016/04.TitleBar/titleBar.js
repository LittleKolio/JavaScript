class TitleBar {
    constructor(title) {
        this.title = title;
        this.menu = [];
        this.menuHTML = {};
    }
    addLink(href, name) {
        this.menu.push(
            $(`<a class="menu-link" href="${href}">${name}</a>`)
        );
    }
    appendTo(selector) {
        // всеки нов html към jQuery Obj и push в this.menu
        $(selector).prepend(this.generate());
    }
    generate() {
        // отново правим jQuery Obj от html
        let html = $(`<header class="header">
    <div class="header-row">
        <a class="button">&#9776;</a>
        <span class="title">${this.title}</span>
    </div>
    <div class="drawer">
        <nav class="menu"></nav>
    </div>
</header>`);

        // console.log($(html).find('nav.menu'));

        // намираме tag-а който ни трябва
        // и го закачаме ме в this.menuHTML
        this.menuHTML = $(html).find('nav.menu');
        this.menu.forEach(e => this.menuHTML.append(e));

        // console.log(html instanceof jQuery);

        // тука this-а трябва да е class-а а не event-а
        // затова използваме .bind(this)
        html.find('a.button').click(this.olee.bind(this));
        return html;
    }

    olee() {
        let menu = $('header.header div.drawer');
        if (menu.css('display') == 'none')
            menu.css('display', 'block');
        else
            menu.css('display', 'none');
    }
}
