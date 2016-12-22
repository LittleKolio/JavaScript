import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Team extends Component {
    render() {
        return(
            <Link to={'/catalog/' + this.props.id}>
                <span className="spanner">Team name</span>
                <p className="title">{this.props.name}</p>
                <span className="spanner">Description</span>
                <p>{this.props.description || 'No description'}</p>
            </Link>
        )
    }
}