import React, { Component } from 'react';

export default class Register extends Component {
    render() {
        return (
          <form id="register-form" onSubmit={this.submitForm.bind(this)}>
              <h1>Registration</h1>
              <label>
                  <div>Username:</div>
                  <input type="text" name="username" required
                         ref={e => this.usernameField = e}/>
              </label>
              <label>
                  <div>Password:</div>
                  <input type="password" name="password" required
                         ref={e => this.passwordField = e}/>
              </label>
              <div><input type="submit" value="Register" /></div>
          </form>
        )
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmitFunc(
          this.usernameField.value,
          this.passwordField.value
        )
    }
}