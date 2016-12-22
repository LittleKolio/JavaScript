import React, { Component } from 'react';
import CreateForm from './CreateForm';
import {create} from '../module/callDB';

export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            fieldState: false
        };
        // this.bindThis();
    }

    // bindThis() {
    //     this.changeHandler = this.changeHandler.bind(this);
    //     this.submitHandler = this.submitHandler.bind(this);
    //     this.createSuccess = this.createSuccess.bind(this);
    // }

    changeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);

    }

    submitHandler(event) {
        event.preventDefault();
        console.log(this.state);
        this.setState({ fieldState: true });
        create(
            this.state.name,
            this.state.description,
            this.createSuccess.bind(this)
        );
    }

    createSuccess(res) {
        if (res) {
            this.context.router.push('/');
        } else {
            this.setState({ fieldState: false });
            alert('НЕЕЕЕЕЕЕЕ');
        }
    }

    render() {
        return (
            <div>
                <h1>Create Page</h1>
                <CreateForm
                    changeHandler={this.changeHandler.bind(this)}
                    submitHandler={this.submitHandler.bind(this)}
                    fieldState={this.state.fieldState}
                />
            </div>
        )
    }
}

CreatePage.contextTypes = {
    router: React.PropTypes.object
};