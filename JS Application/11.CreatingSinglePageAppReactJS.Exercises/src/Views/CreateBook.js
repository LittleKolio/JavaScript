import React, { Component } from 'react';

export default class CreateBook extends Component {
    render() {
        return (
            <form id="create-book-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Create Book</h1>
                <label>
                    <div>Title:</div>
                    <input type="text" required
                           ref={e => this.titleField = e}/>
                </label>
                <label>
                    <div>Author:</div>
                    <input type="text" required
                           ref={e => this.authorField = e}/>
                </label>
                <label>
                    <div>Description:</div>
                    <textarea rows="10"
                              ref={e => this.description = e}>
                    </textarea>
                </label>
                <div><input type="submit" value="Create" /></div>
            </form>
        )
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmitFunc(
            this.titleField.value,
            this.authorField.value,
            this.description.value
        )
    }
}