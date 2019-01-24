import React, { Component } from "react";
import Products from '../Products/Products';

class Dashboard extends Component {
    
    render() {
        return (
            <div id="main">
            {/* <section id="categoryfiltersection">
            <div className="container">
            <h1 className="text-center">Filter By Category</h1> <br />

                    <div className="categoryfiltercontent">
                        <select>
                            <option value="Phones & Tablets">Phones & Tablets</option>
                            <option value="Computing">Computing</option>
                            <option value="Gaming">Gaming</option>
                        </select>
                        <button className="button_1">Filter</button>
                       
                    </div>
            </div>
            </section> */}

                <section id="topcards">
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
                        </section>

            <Products />

            </div>
            
        );
    }
}

export default Dashboard;