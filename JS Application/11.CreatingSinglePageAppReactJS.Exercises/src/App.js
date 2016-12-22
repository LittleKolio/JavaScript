import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import './App.css';

import NavBar from './Components/NavBar';
// import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Views/Home';
import Register from './Views/Register';
import Login from './Views/Login';
import Books from './Views/Books';
import CreateBook from './Views/CreateBook';
import EditBook from './Views/EditBook';

import KinveyRequest from './KinveyRequest';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            userId: null
        };
    }
    render() {
        return (
            <div className="App">
                <header>
                    <NavBar username={this.state.username}
                        homeClick={this.showHomeView.bind(this)}
                        loginClick={this.showLoginView.bind(this)}
                        registerClick={this.showRegisterView.bind(this)}
                        booksClick={this.showBooksView.bind(this)}
                        createBookClick={this.showCreateBookView.bind(this)}
                        logoutClick={this.logout.bind(this)}/>
                    <div id="loading-box">Loading ...</div>
                    <div id="info-box">Info msg</div>
                    <div id="error-box">Error msg</div>
                </header>
                <div id="main"></div>
                <Footer/>
            </div>
        );
    }

    handleError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = 'Cannot connect due to network error.';
        if (response.responseJSON &&
          response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }
        $('#error-box').text('Error: ' + errorMsg).show();
        setTimeout(function() {
            $('#error-box').fadeOut();
        },3000)
    }

    // componentDidMount незнам какво е туй
    // но се изпълнява безда се извика
    componentDidMount() {
        // Attach global AJAX 'loading' event handlers
        $(document).on({
            ajaxStart: function() {$('#loading-box').show()},
            ajaxStop: function() {$('#loading-box').hide()},
        });

        $(document).ajaxError(this.handleError.bind(this));

        this.setState({
            username: sessionStorage.getItem('username'),
            userId: sessionStorage.getItem('userId')
        });

        this.showHomeView()
    }

    showInfo(message) {
        $('#info-box').text(message).show();
        setTimeout(function() {
            $('#info-box').fadeOut();
        },3000)
    }

    showView(component) {
        ReactDOM.render(
          component,
          document.getElementById('main')
        );
        $('#error-box').hide();
    }

    showHomeView() {
        this.showView(<Home username={this.state.username}/>);
    }

    showLoginView() {
        this.showView(<Login onsubmitFunc={this.loginKinvey.bind(this)}/>);
    }

    loginKinvey(user, pass) {
        //alert(user + '\n' + pass);
        KinveyRequest
          .login(user, pass)
          .then(loginSuccess.bind(this));
        function loginSuccess(data) {
            this.showInfo('Login successful');
            this.saveInSessin(data);
            this.showBooksView();
        }
    }

    saveInSessin(data) {
        sessionStorage.setItem('authToken', data._kmd.authtoken);
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('user', data.username);
        this.setState({
            username: data.username,
            userId: data._id
        });
    }

    showRegisterView() {
        this.showView(<Register onsubmitFunc={this.registerKinvey.bind(this)}/>);
    }

    registerKinvey(user, pass) {
        KinveyRequest
            .register(user, pass)
            .then(registerSuccess.bind(this));
        function registerSuccess(data) {
            this.showInfo('Register successful');
            this.saveInSessin(data);
            this.showBooksView();
        }
    }

    showBooksView() {
        KinveyRequest
            .getBooks()
            .then(booksView.bind(this));
        function booksView(books) {
            this.showView(
                <Books books={books}
                       onEditFunc={this.showEditBook.bind(this)}
                       onDeleteFunc={this.deleteBook.bind(this)}/>)
        }
    }

    showCreateBookView() {
        this.showView(<CreateBook onsubmitFunc={this.postBook.bind(this)}/>)
    }

    postBook(title, author, description) {
        KinveyRequest
            .postBook(title, author, description)
            .then(booksView.bind(this));
        function booksView() {
            this.showInfo('Book created');
            this.showBooksView();
        }
    }

    showEditBook(bookId) {
        KinveyRequest
            .getBook(bookId)
            .then(bookView.bind(this));
        function bookView(book) {
            this.showView(<EditBook title={book.title}
                                    author={book.author}
                                    description={book.description}
                                    bookId={bookId}
                                    onsubmitFunc={this.putBook.bind(this)}/>);
        }
    }

    putBook(bookId, title, author, description) {
        KinveyRequest
            .putBook(bookId, title, author, description)
            .then(booksView.bind(this));
        function booksView() {
            this.showInfo('Book edited');
            this.showBooksView();
        }
    }

    deleteBook(bookId) {
        // alert(bookId);
    }

    logout() {
        sessionStorage.clear();
        this.setState({
            username: null,
            userId: null,
        });
        this.showHomeView();
    }
}
