import React, { Component } from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Favourite from './components/Favourites.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(
  <MuiThemeProvider>
    <Router>
     <div className = "App">
       <Route exact path = '/' component = {Home}/>
       <Route path='/fav' component={Favourite}/>
     </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
