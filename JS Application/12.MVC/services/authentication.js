class Authentication {
    constructor(appKey, appSecret) {
        this._appKey = appKey;
        this._appSecret = appSecret
    }

    loggedIn() {
        return sessionStorage.getItem('authToken')
    }

    getHeaders() {
        let headers = {
            'Content-Type': 'application/json'
        };

        if (this.loggedIn()) {
            headers['Authorization'] = 'Basic ' + this.loggedIn();
        } else {
            headers['Authorization'] = 'Basic ' + btoa(this._appKey + ':' + this._appSecret);
        }
        return headers;
    }
}