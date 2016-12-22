import React, { Component } from 'react';

export default class Books extends Component {
    render() {
        let bookRow = this.props.books.map(book => {
            return <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                {this.bookActions(book)}
            </tr>
        });
        return (
            <div className="books-view">
                <h1>Books</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {bookRow}
                    </tbody>
                </table>
            </div>
        )
    }

    bookActions(book) {
        if (book._acl.creator == sessionStorage.getItem('username') ) {
            return <td>
                <button onClick={this.props.onEditFunc.bind(this, book._id)}>[Edit]</button>
                <button onClick={this.props.onDeleteFunc.bind(this, book._id)}>[Delete]</button>
            </td>
        } else {
            return <td></td>
        }
    }
}