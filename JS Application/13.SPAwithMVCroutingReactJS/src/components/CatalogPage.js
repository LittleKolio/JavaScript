import React, { Component } from 'react';
import {Link} from 'react-router';
import {load} from '../module/callDB';
import Team from './Team';

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: []
        };
    }

    componentDidMount() {
        this.loadTeam();
    }

    loadTeam() {
        load(this.loadSuccess.bind(this))
    }

    loadSuccess(result) {
        this.setState({
            team: result
        })
    }

    render() {
        let link = null;
        if (!sessionStorage.getItem('teamId')) {
            link = <Link to="/create">[Create]</Link>
        }
        return (
            <div>
                <h1>Catalog Page</h1>
                {link}
                <div>
                    {this.state.team.map((e, i) => {
                        return (
                            <Team
                                key={i}
                                name={e.name}
                                id={e._id}
                                description={e.description}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}