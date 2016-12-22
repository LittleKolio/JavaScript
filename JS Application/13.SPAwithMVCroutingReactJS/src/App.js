import React, { Component } from 'react';
import {Link} from 'react-router';
import Header from './components/Header';
import checkUser from './module/userState';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: ''
        };
        checkUser.userState = this.onStartUser.bind(this);
    }

    componentDidMount() {
        this.onStartUser();
    }

    onStartUser() {
        if (sessionStorage.getItem('username')) {
            this.setState({
                loggedIn: true,
                username: sessionStorage.getItem('username')
            });
        } else {
            this.setState({
                loggedIn: false,
                username: ''
            });
        }
    }

    render() {
        let nav = {};
        if (sessionStorage.getItem('username')) {
            nav = (
                <div>
                    <Link to="/">[Home]</Link>
                    <Link to="/about">[About]</Link>
                    <Link to="/create">[Create]</Link>
                    <Link to="/catalog">[Catalog]</Link>
                    <Link to="/logout">[Logout]</Link>
                </div>
            );
        } else {
            nav = (
                <div>
                    <Link to="/">[Home]</Link>
                    <Link to="/login">[Login]</Link>
                    <Link to="/register">[Register]</Link>
                    <Link to="/about">[About]</Link>
                </div>
            );
        }

        return (
            <Header>
                {nav}
                {this.props.children}
            </Header>
        );
    }
}
