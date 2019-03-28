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
import EditProduct from './components/Products/EditProduct';
import CreateAttendant from './components/Attendant/CreateAttendant';
import ViewAttendant from './components/Attendant/ViewAttendant';
import Cart from './components/Sales/Cart';
import ViewSales from './components/Sales/ViewSales';
import Footer from './components/Common/Footer';
import NotFound from './components/Common/NotFound';
import Profile from './components/Profile/Profile';

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
                    <PrivateRoute exact path="/editproduct/:id" component={ EditProduct } />
                    <PrivateRoute exact path="/createattendant" component={ CreateAttendant } />
                    <PrivateRoute exact path="/viewattendants" component={ ViewAttendant } />
                    <PrivateRoute exact path="/cart" component={ Cart } />
                    <PrivateRoute exact path="/viewsales" component={ ViewSales } />
                    <PrivateRoute exact path="/profile" component = { Profile } />
                    <Route path='*' component={ NotFound } />
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