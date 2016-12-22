class PeopleModel {
    constructor(appKey, url, request, authentication) {
        this._url = `${url}/appdata/${appKey}/collection`;
        this._authentication = authentication;
        this._request = request;
    }
    getOne(id) {
        return this._request.get(
            this._url + '/' + id,
            this._authentication.getHeaders()
        )
    }

    getAll() {
        return this._request.get(
            this._url,
            this._authentication.getHeaders()
        )
    }

    postOne(data) {
        return this._request.post(
            this._url,
            this._authentication.getHeaders(),
            data
        )
    }
}