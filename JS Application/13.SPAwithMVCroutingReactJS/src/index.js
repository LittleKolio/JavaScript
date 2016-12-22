import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AboutPage from './components/AboutPage';
import CatalogPage from './components/CatalogPage';
import LogoutPage from './components/LogoutPage';
import CreatePge from './components/CreatePage';
import Details from './components/Details';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
          <Route path="about" component={AboutPage}/>
          <Route path="catalog">
              <IndexRoute component={CatalogPage}/>
              <Route path=":teamId" component={Details}/>
          </Route>
          <Route path="logout" component={LogoutPage}/>
          <Route path="login" component={LoginPage}/>
          <Route path="register" component={RegisterPage}/>
          <Route path="create" component={CreatePge}/>
      </Route>
  </Router>,
  document.getElementById('root')
);
