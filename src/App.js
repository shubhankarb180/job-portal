import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import HomeComponent from './components/pages/HomeComponent';
import PostComponent from './components/pages/PostComponent'

class App extends React.Component {

  render() { 
    return (
      <Router>
        <Route path='/' exact component={HomeComponent} />
        <Route path='/company/:id' component={PostComponent} />
      </Router>
    );
  }
}

export default App;

