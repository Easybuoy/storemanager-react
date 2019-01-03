import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signIn } from '../../actions/authActions';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(event){
        this.setState({[event.target.name] : event.target.value});
    }


    onSubmit(e) {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password 
        };

        this.props.signIn(userData);
    }

    render() { 
        const { errors } = this.props;

        if (this.props.auth.isSignedIn ) {
            this.props.history.push('/dashboard')
        }

        return (
            <div id="loginbody">
        <div className="loginbox">
            <img src="https://store--manager.herokuapp.com/assets/uploads/users/default-avatar.png" className="avatar"/>
            <h2 className="text-center">Login to access store manager</h2>
            <form>
                <p>Email</p>
                <input onChange={this.onChange} type="text" id="loginusername" name="email" placeholder="Enter Email" />
        <div className="login-error">{errors.email}</div>
                <p>Password</p>
                <input onChange= {this.onChange} type="password" id="loginpassword" name="password" placeholder="Enter Password" />
                <div className="login-error">{errors.password} <br /><br /></div>
                <input onClick={this.onSubmit} type="submit" name="submit" id="loginsubmit" value="Login" />
            </form>
        </div>

            </div>
        );
    }
}

Login.propTypes = {
    signIn: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { signIn })(Login);