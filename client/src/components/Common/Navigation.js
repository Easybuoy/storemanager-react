
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { signOut } from '../../actions/authActions';

class Navigation extends Component {
    openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
    }

    closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0';
    }

  render() { console.log(window.location.pathname)
    let userProfilePicture = this.props.auth.user.userImage;
    userProfilePicture = `http://store--manager.herokuapp.com/${userProfilePicture}`;
    let dashboardLinks = (
        <div id="side-menu" className="side-nav">
        <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
            <li className="current"><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/viewsales">View Sales Record</Link></li>
            <li><Link to="/profile">Profile</Link></li> 
            <li><a onClick={this.props.signOut}>Logout</a></li>
        </div>
    );
    if (this.props.auth.user.type === 1) {
        dashboardLinks = (
            <div id="side-menu" className="side-nav">
            <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
            <li className="current"><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/createproduct">Create Product</Link></li>
            <li><Link to="/viewproducts">View Products</Link></li>
            <li><Link to="/createattendant">Create Sales Attendant</Link></li>
            <li><Link to="/viewsales">View Sales</Link></li>
            <li><Link to="/viewattendants">View Attendants</Link></li>
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
                <li><Link to="profile" style={{ paddingTop : '10px' }}><div><img id="userimg" src={userProfilePicture} /> </div></Link></li>
                <li id="shoppingcart"><Link to="/cart"><label  id="shoppingcartlabel">0</label ><img id="cartimage" src="http://store--manager.herokuapp.com/img/cart.png" /></Link></li>
                    <li><a href="#"><div><input className="search" placeholder="Search Products" type="text" /> <i id="searchimg" className="fas fa-search fa-2x"></i> </div></a></li>
                    <li id="appnameli"><Link to="/dashboard"><h1 id="appname"><span className="highlight">Store</span> Manager</h1></Link></li>
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