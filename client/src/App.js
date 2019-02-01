import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import PrivateRoute from './components/Common/PrivateRoute';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from './components/Common/Navigation';
import Products from './components/Products/Products';
import CreateProduct from './components/Products/CreateProduct';
import CreateAttendant from './components/Attendant/CreateAttendant';
import ViewAttendant from './components/Attendant/ViewAttendant';
import Footer from './components/Common/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {
                        this.props.auth.isSignedIn === true ? (
                            <Navigation />
                            ): (
                                ''
                            )
                    }
                    <Switch>
                    <Route exact path='/' component={ Login } />
                    <PrivateRoute exact path='/dashboard' component={ Dashboard } />
                    <PrivateRoute exact path="/viewproducts" component={ Products } />
                    <PrivateRoute exact path="/createproduct" component={ CreateProduct } />
                    <PrivateRoute exact path="/createattendant" component={ CreateAttendant } />
                    <PrivateRoute exact path="/viewattendants" component={ ViewAttendant } />
                    <Route path='*' component={() => 'Not found'} />
                    </Switch>
                    <Footer />
                </div>
                    
                
            </Router>
            
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(App);