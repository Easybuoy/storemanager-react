import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import PrivateRoute from './components/Common/PrivateRoute';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                    <Route exact path='/' component={ Login } />
                    <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                    <Route path='*' component={() => 'Not found'} />
                    </Switch>
                </div>
                    
                
            </Router>
            
        );
    }
}

export default App;