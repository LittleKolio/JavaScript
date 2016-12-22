sessionStorage.setItem('authToken', btoa('guest:guest'));

(function() {
    // sammy
    let router = Sammy(function() {
        const appKey = 'kid_rkxzoazme';
        const appSecret = '6edc19c0b51447abbca888630e2b9c29';
        let url = 'https://baas.kinvey.com';

        let authentication = new Authentication(appKey, appSecret);
        let request = new Request();

        let peopleView = new PeopleView();
        let peopleModel = new PeopleModel(appKey, url, request, authentication);
        let peopleController = new PeopleController(peopleModel, peopleView);

        this.get('#/home', function() {
            $('.wrapper').empty();

            $('.wrapper').append('<button id="list-people">List all</button>');

            let _self = this;
            $('#list-people').click(function() {
                // location.hash = '#/list';
                _self.redirect('#/list');
            });
        });
        this.get('#/list', function() {
            peopleController.all();
        });
        this.get('#/people/:id', function() {
            peopleController.one(this.params['id']);
        });

        this.bind('bah-mamamu', function(event, data) {
            this.redirect('#/people/' + data.id)
        })
    });

    router.run('#/home')

})();