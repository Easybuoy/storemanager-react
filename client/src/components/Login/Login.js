import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoggedIn: 0,
            redirect: false,
            loginType: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    setToken(token){
        localStorage.setItem('token', token);
    }

    onSubmit(e) {
        e.preventDefault();
        let status = 0;
        let loginType = 'admin';

        fetch('https://store--manager.herokuapp.com/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
        })
        .then((res) => {
            status = res.status;
            return res.json()
        })
        .then(data => {
            const response = data.data;
            const token = data.data.token; console.log(response)
            switch (status) {
                case 200:
                this.setToken(token);
                if (response.type !== 1) {
                    loginType = 'subscriber';
                }
                this.setState({ redirect: true, loginType })
                    break;
                case 400:
                  if (response.email && response.password) {
                    return alert('Email & Password fields are required');
                  }
                  alert(response.email || response.password);
                  break;
                case 404:
                  alert(response.email);
                  break;
                case 401:
                   alert(response.password);
                    break;
                default:
                  return alert('Error loggin in');
                }
        })
        .catch(err => alert('Error Loggin In...Please Try Again'));
    }

    render() {
        if (this.state.redirect) {
            const { loginType } = this.state;
        return (
            <Redirect to={{
                pathname: '/dashboard',
                state: { loginType }
            }} />
        );
        }

        return (
            <div id="loginbody">
        <div className="loginbox">
            <img src="https://store--manager.herokuapp.com/assets/uploads/users/default-avatar.png" className="avatar"/>
            <h2 className="text-center">Login to access store manager</h2>
            <form method="GET" action="./dashboard.html">
                <p>Username</p>
                <input onChange={this.onChange} type="text" id="loginusername" name="email" placeholder="Enter Email" />
                <p>Password</p>
                <input onChange= {this.onChange} type="password" id="loginpassword" name="password" placeholder="Enter Password" />
                <input onClick={this.onSubmit} type="submit" name="submit" id="loginsubmit" value="Login" />
            </form>
        </div>

        <footer id="footer" className="footerstickbottom">
            <p>Store Manager Copyright &copy; 2018</p>
        </footer>
            </div>
        );
    }
}

export default Login;