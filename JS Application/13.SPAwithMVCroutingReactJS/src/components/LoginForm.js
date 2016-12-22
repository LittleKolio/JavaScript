import React, { Component } from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        onChange={this.props.changeHandler}
                        disabled={this.props.fieldState}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.props.changeHandler}
                        disabled={this.props.fieldState}
                    />
                </div>
                <input
                    type="submit"
                    value="Login"
                    disabled={this.props.fieldState}
                />
            </form>
        )
    }
}