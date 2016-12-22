import React, { Component } from 'react';
import {Link} from 'react-router';
import {
    load,
    join,
    leave,
    usersDetails
} from '../module/callDB';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            members: [],
            onTeamBoole: (
                sessionStorage.getItem('teamId') ==
                this.props.params.teamId
            ),
            editBoole: false
        };
    }

    componentDidMount() {
        load(this.loadSuccess.bind(this), this.props.params.teamId);
        usersDetails(this.props.params.teamId, this.usersSuccess.bind(this));
    }

    usersSuccess(res) {
        this.setState({
            members: res
        })
    }

    loadSuccess(res) {
        let newState = {
            name: res.name,
            description: res.description
        };
        if (res._acl.creator == sessionStorage.getItem('userId'))
            newState.editBoole = true;

        this.setState(newState);
    }

    leaveTeam(event) {
        event.preventDefault();
        leave(this.onSuccess.bind(this));
    }

    joinTeam(event) {
        event.preventDefault();
        join(this.props.params.teamId, this.onSuccess.bind(this));
    }

    onSuccess(res) {
        this.context.router.push('/');
    }

    render() {
        let members = <p>No members</p>;
        if (this.state.members.length > 0) {
            members = <div>{this.state.members.map((e, i) => {
                return <span key={i}>{e.username}</span>
            })}</div>;
        }
        return (
            <div>
                <span>Details Page</span>
                <span>Team members</span>
                {members}
                <span>Description</span>
                <p>{this.state.description || 'No description'}</p>
                <span>Team management</span>
                <div>
                    {
                        this.state.editBoole
                            ? <Link to={"/edit/" + this.props.params.teamId}>[Edith]</Link>
                            : null
                    }
                    {
                        this.state.onTeamBoole
                            ? <a href="#" onClick={this.leaveTeam.bind(this)}>[Leave]</a>
                            : <a href="#" onClick={this.joinTeam.bind(this)}>[Join]</a>
                    }
                </div>
            </div>
        );
    }
}

Details.contextType = {
    router: React.PropTypes.object
};