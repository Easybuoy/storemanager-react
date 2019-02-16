import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Products from '../Products/Products';

class Dashboard extends Component {
    
    render() {
        let adminboards = ''; 
        const { type } = this.props.auth.user;
        if (type === 1) {
            adminboards = 
            <section>
                            <div className="container topcardsgroup">
                            <div className="topcardsbox">
                                <div className="showcasecard c1">
                                    <h3 style={{ marginBottom: '50px' }}>Top Selling Product</h3>
                                <div style={{ marginBottom: '50px' }}>
                                    <i className="fas fa-fire fa-4x"></i>
                                    <h2 style={{ marginBottom: '50px' }}>iPhone Xs</h2>
                                </div>
                                </div>
                            </div>
                
                            <div className="topcardsbox">
                                <div className="showcasecard c1" >
                                    <h3 style={{ marginBottom: '50px' }}>Total Products Sold </h3>
                                        <div style={{ marginBottom: '50px' }}>
                                            <i className="fas fa-chart-line fa-4x"></i>
                                            <h2 style={{ marginBottom: '50px' }}>850</h2>
                                        </div>
                            </div>
                            </div>
                            <div className="topcardsbox">
                                <div className="showcasecard c1">
                                        <h3 style={{ marginBottom: '50px' }}>Total Goods Sold Worth</h3>
                                        <div style={{ marginBottom: '50px' }}>
                                            <i className="fas fa-chart-bar fa-4x"></i>
                                            <h2 style={{ marginBottom: '50px' }}>$30,322.53</h2>
                                        </div>
                                </div>
                            </div>
                        </div>
                        </section>;
        }
        return (
            <div id="topcards">
            { adminboards }
            

            <Products />

            </div>
            
        );
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);