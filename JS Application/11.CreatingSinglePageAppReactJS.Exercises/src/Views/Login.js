import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <form id="login-form" onSubmit={this.submitForm.bind(this)}>
              <h1>Login</h1>
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
                <div><input type="submit" value="Login" /></div>
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


// <form id="login-form" onSubmit={this.submitForm.bind(this)}>
//     <label>
//         <div>Username:</div>
//         <input type="text" name="username" required
//                ref={e => this.usernameField = e}/>
//     </label>
//     <label>
//         <div>Password:</div>
//         <input type="password" name="password" required
//                ref={e => this.passwordField = e}/>
//     </label>
//     <div><input type="submit" value="Login" /></div>
// </form>

// ако сложим onClick в input няма дасе изпълни валидацията
// ref={e => this.passwordField = e} казва когато се зареди input в DOM запиши element в this.passwordField