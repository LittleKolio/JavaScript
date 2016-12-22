import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <a href="#">Home</a>
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>
        );
    }
}

export default Header;
