import React, {Component} from 'react';
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        if (this.props.username == null) {
            return (
                <div className="nav-bar">
                    <a href="#" onClick={this.props.homeClick}>Home</a>
                    <a href="#" onClick={this.props.loginClick}>Login</a>
                    <a href="#" onClick={this.props.registerClick}>Register</a>
                    <span className="loggedInUser">
                        No user logged in
                    </span>
                </div>
            );
        } else {
            return (
                <div className="nav-bar">
                    <a href="#" onClick={this.props.homeClick}>Home</a>
                    <a href="#" onClick={this.props.booksClick}>Books</a>
                    <a href="#" onClick={this.props.createBookClick}>Create Book</a>
                    <a href="#" onClick={this.props.logoutClick}>Logout</a>
                    <span className="loggedInUser">
                        Welkome {this.props.username}
                    </span>
                </div>
            );
        }
    }
}
