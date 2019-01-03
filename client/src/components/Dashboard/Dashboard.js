import React, { Component } from "react";

class Dashboard extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         loginType: '',
    //     }

    // }

    // componentDidMount(){
    //     console.log(this.props.location)
    //     const loginType = this.props.location.state.loginType;
    //     this.setState({ loginType: loginType });
    // }

    render() {
        // console.log(this.state)
        return (
            // <h1>Dashboard</h1>
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
<div className="container">
                        <div className="cardgroup">

                                <div className="card">
                                        <a href="view_product_details.html"><img src="img/gpixel2.png" className="cardimg" /></a>
        
                                <div className="text-center cardbody" >
                                        <h3 id="productname" data-name="Google Pixel 2">Google Pixel 2</h3>
                                        <p>The Google Pixel 2 is powered by 1.9GHz octa-core </p>
                                        <p>Quantity: 3</p>
                                        <p  id="productamount">Price: $649</p>
                                        <input type="number" id="number" name="amount" placeholder="Quantity" />
                                        <button className="button_1">Add To Cart</button>
                                </div>
        
                                </div>

                                </div>
                                </div>
            </div>
            
        );
    }
}

export default Dashboard;