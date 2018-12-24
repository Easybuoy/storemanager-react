import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login/Login';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ Login } />
                    <Route path='*' component={() => 'Not found'} />
                </Switch>
                
            </Router>
            
        );
    }
}

export default App;