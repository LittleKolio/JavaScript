import React, { Component } from 'react';

export default class RegisterForm extends Component {
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
                <div>
                    <label>RepeatPass:</label>
                    <input
                        type="password"
                        name="repeatpass"
                        onChange={this.props.changeHandler}
                        disabled={this.props.fieldState}
                    />
                </div>
                <input
                    type="submit"
                    value="Register"
                    disabled={this.props.fieldState}
                />
            </form>
        )
    }
}