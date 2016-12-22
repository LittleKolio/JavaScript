class PeopleController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    one(id) {
        let _self = this;
        this.model.getOne(id)
            .then(function(result) {
                _self.view.listOne(result);
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    all() {
        let _self = this;
        this.model.getAll()
            .then(function(result) {
                _self.view.listAll(result)
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    createPerson(data) {
        let _self = this;
        this.model.postOne(data)
            .then(function() {
                _self.all();
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}