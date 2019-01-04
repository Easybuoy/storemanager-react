import React, { Component } from "react";
import Products from '../Products/Products';

class Dashboard extends Component {
    
    render() {
        return (
            <div id="main">
            <section id="categoryfiltersection">
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
            </section>

            <Products />

            </div>
            
        );
    }
}

export default Dashboard;