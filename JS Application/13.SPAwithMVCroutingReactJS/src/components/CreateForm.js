import React, { Component } from 'react';

export default class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.props.changeHandler}
                        disabled={this.props.fieldState}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        onChange={this.props.changeHandler}
                        disabled={this.props.fieldState}
                    />
                </div>
                <input
                    type="submit"
                    value="Create"
                    disabled={this.props.fieldState}
                />
            </form>
        )
    }
}