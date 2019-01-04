
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '../../actions/authActions';

class Navigation extends Component {
    openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
    }

    closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0';
    }

  render() {
    let userProfilePicture = this.props.auth.user.userImage;
    userProfilePicture = `http://store--manager.herokuapp.com/${userProfilePicture}`;
    let dashboardLinks = (
        <div id="side-menu" className="side-nav">
        <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
            <li className="current"><a href="dashboard.html">Dashboard</a></li>
            <li><a href="sales_view.html">View Sales Record</a></li>
            <li><a href="store_attendant_profile.html">Profile</a></li> 
            <li><a onClick={this.props.signOut}>Logout</a></li>
        </div>
    );
    if (this.props.auth.user.type === 1) {
        dashboardLinks = (
            <div id="side-menu" className="side-nav">
            <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
            <li className="current"><a href="admin_dashboard.html">Dashboard</a></li>
            <li><a href="admin_create_product.html">Create Product</a></li>
            <li><a href="admin_view_products.html">View Products</a></li>
            <li><a href="admin_create_sales_attendant.html">Create Sales Attendant</a></li>
            <li><a href="admin_view_sales.html">View Sales</a></li>
            <li><a href="admin_view_attendants.html">View Attendants</a></li>
            <li><a onClick={this.props.signOut}>Logout</a></li>
        </div>
        );
    }
    return (
      <div>
         <nav className="navbar">
            <span className="open-slide">
                <a href="#" id="openslidemenu" onClick={this.openSlideMenu}>
                <svg width="30" height="30">
                        <path d="M0,5 30,5" stroke="#ffffff"
                        strokeWidth="5"/>
                        <path d="M0,14 30,14" stroke="#ffffff"
                        strokeWidth="5"/>
                        <path d="M0,23 30,23" stroke="#ffffff"
                        strokeWidth="5"/>
                </svg>
            </a></span>

            <ul>
                <li><a href="store_attendant_profile.html" style={{ paddingTop : '10px' }}><div><img id="userimg" src={userProfilePicture} /> </div></a></li>
                <li id="shoppingcart"><a href="#"><label  id="shoppingcartlabel">0</label ><img id="cartimage" src="http://store--manager.herokuapp.com/img/cart.png" /></a></li>
                    <li><a href="#"><div><input className="search" placeholder="Search Products" type="text" /> <i id="searchimg" className="fas fa-search fa-2x"></i> </div></a></li>
                    <li id="appnameli"><a href="dashboard.html"><h1 id="appname"><span className="highlight">Store</span> Manager</h1></a></li>
            </ul>
        </nav>

        
        {dashboardLinks}
      </div>
    )
  }
}

Navigation.propTypes = {
    signOut: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { signOut })(Navigation);