class PeopleView {
    constructor() {

    }

    listAll(result) {
        $('.wrapper div').empty();

        result.forEach(function(person) {
            let allDiv = `<div>
    <div>${person.name}</div>
    <div>${person.age}</div>
    <div>${person.weight}</div>
    <div>${person.mantalitet}</div>
    <button id=${person._id} class="show-details">details</button>
</div>`;
            $('.wrapper').append(allDiv);
        });

        Sammy(function() {
            let _self = this;

            $('.show-details').click(function(ev) {
                _self.trigger('bah-mamamu', {id: $(ev.target).attr('id')})
            });
        })
    }

    listOne(person) {
        $('.wrapper div').empty();

        let oneDiv = `<div class="person-details">
    <div>Name: ${person.name}</div>
    <div>Age: ${person.age}</div>
    <div>Weight: ${person.weight}</div>
    <div>Mantalitet: ${person.mantalitet}</div>
</div>`;
        $('.wrapper').append(oneDiv);

    }
}
