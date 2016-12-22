import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../module/callDB';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatpass: '',
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
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    submitHandler(event) {
        event.preventDefault();
        if (this.state.password !== this.state.repeatpass) {
            alert('грешна парола');
            return;
        }
        this.setState({ fieldState: true });
        register(this.state.username, this.state.password, this.registerSuccess.bind(this));
    }

    registerSuccess(res) {
        if (res) {
            this.context.router.push('/');
        } else {
            this.setState({ fieldState: false });
            alert('НЕЕЕЕЕЕЕЕ');
        }
    }

    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <RegisterForm
                    changeHandler={this.changeHandler.bind(this)}
                    submitHandler={this.submitHandler.bind(this)}
                    fieldState={this.state.fieldState}
                />
            </div>
        )
    }
}

RegisterPage.contextTypes = {
    router: React.PropTypes.object
};