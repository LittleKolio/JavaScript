import React, { Component } from 'react';
import LoginForm from './LoginForm';
import {login} from '../module/callDB';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            fieldState: false
        };
        // this.bindThis();
    }

    // bindThis() {
    //     this.changeHandler = this.changeHandler.bind(this);
    //     this.submitHandler = this.submitHandler.bind(this);
    //     this.registerSuccess = this.registerSuccess.bind(this);
    // }

    changeHandler(event) {
        // let newState = {};
        // newState[event.target.name] = event.target.value;
        // this.setState(newState);

        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            default:
                break;
        }
    }

    submitHandler(event) {
        event.preventDefault();
        this.setState({ fieldState: true });
        login(this.state.username, this.state.password, this.loginSuccess.bind(this));
    }

    loginSuccess(res) {
        if (res) {
            this.context.router.push('/');
        } else {
            this.setState({ fieldState: false });
        }
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm
                    changeHandler={this.changeHandler.bind(this)}
                    submitHandler={this.submitHandler.bind(this)}
                    fieldState={this.state.fieldState}
                />
            </div>
        )
    }
}

LoginPage.contextTypes = {
    router: React.PropTypes.object
};