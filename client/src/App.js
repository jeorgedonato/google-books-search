import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Saved from './Components/Saved';
import Jumbotron from './Components/Jumbotron';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import {Provider}  from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import {createStore, combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
const reducers = {
  // ... other reducers ...
  toastr: toastrReducer // <- Mounted at toastr.
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)
function App() {

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:title" content="Jeorge Donato" />
        <meta name="author" content="Jeorge Donato" />
        <meta property="og:locale" content="en_US" />
        <title>Google Books Search</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
      </Helmet>
      <Provider store={store}>
        <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/>
        <Navbar />
        <Container>
          <Jumbotron />
          <Router>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    </>
  );
}

export default App;
