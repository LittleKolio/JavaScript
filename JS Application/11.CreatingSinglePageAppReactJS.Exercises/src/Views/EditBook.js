import React, { Component } from 'react';

export default class EditBook extends Component {
    render() {
        return (
            <form id="edit-book-form" onSubmit={this.submitForm.bind(this)}>
                <h1>Edit Book</h1>
                <label>
                    <div>Title:</div>
                    <input type="text" required
                           defaultValue={this.props.title}
                           ref={e => this.titleField = e}/>
                </label>
                <label>
                    <div>Author:</div>
                    <input type="text" required
                           defaultValue={this.props.author}
                           ref={e => this.authorField = e}/>
                </label>
                <label>
                    <div>Description:</div>
                    <textarea rows="10"
                              defaultValue={this.props.description}
                              ref={e => this.description = e}>
                    </textarea>
                </label>
                <div><input type="submit" value="Edit" /></div>
            </form>
        )
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmitFunc(
            this.props.bookId,
            this.titleField.value,
            this.authorField.value,
            this.description.value
        )
    }
}