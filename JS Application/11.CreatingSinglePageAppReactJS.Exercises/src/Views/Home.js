import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="home-view">
                <h1>Welkome to Home</h1>
                <p>Book Library</p>
                {
                    this.props.username
                        ? <p>Welkome, {this.props.username}</p>
                        : <p>No user logged in</p>
                }
            </div>
        )
    }
}
