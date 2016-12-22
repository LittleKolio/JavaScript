import React, { Component } from 'react';
import {logout} from '../module/callDB';

export default class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout() {
        logout(this.logoutSuccess.bind(this))
    }

    logoutSuccess(res) {
        if (res) {
            this.context.router.push('/');
        } else {
            alert('НЕЕЕЕЕЕЕЕ');
        }
    }

    render() {
        return (
            <div>
                <h1>Logout Page</h1>
            </div>
        )
    }
}

LogoutPage.contextTypes = {
    router: React.PropTypes.object
};