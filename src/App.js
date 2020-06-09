import React from 'react';
import About from './components/About'
import Shop from './components/Shop'
import Nav from './components/Navigation'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About} />
        <Route path = '/shop' component = {Shop} />
      </div>
    </Router>
  );
}

export default App;
