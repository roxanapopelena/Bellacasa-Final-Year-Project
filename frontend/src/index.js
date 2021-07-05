import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {fetchAuthenticated}  from './actions/account';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ServicesPage from './components/pages/ServicesPage';
import CataloguePage from './components/pages/CataloguePage';
import DownloadPage from './components/pages/DownloadPage';
import Footer from './components/Footer';
import SignInPage from './components/pages/SignIn';
import SignUpPage from './components/pages/SignUp';
import NotFound404 from './components/NotFound404';
import IndividualProductPage from './components/IndividualProductPage';
import {render} from 'react-dom';

import './App.css';

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    rootReducer,
    composeEnhancer(  
    applyMiddleware(thunk)
    ));

  store.dispatch(fetchAuthenticated())
  .then (() => {
    render(
    <Provider store={store}>
      <Router basename={'/'}>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/download' component={DownloadPage} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/catalogue' component={CataloguePage} />
            <Route path={`/Products/:id`} component={IndividualProductPage} />
            <Route path='/sign-in' component={SignInPage} />
            <Route path='/sign-up' component={SignUpPage} />
            <Route path="*">
              <NotFound404 />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </Provider>,
      document.getElementById('root')
  );
});
