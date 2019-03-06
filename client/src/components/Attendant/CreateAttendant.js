import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { createAttendant } from '../../actions/attendantActions';
import Loading from '../Common/Loading';

export class CreateAttendant extends Component {
constructor(){
  super();
  this.state = {
    name: '',
    email: '',
    password: '',
    userimage: '',
    type: ''
  };
}

onChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}

onImageChange = (event) => {
  this.setState({ userimage: event.target.files[0] });
}

onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, userimage, type } = this.state;

  const userData = {
    name,
    email,
    password,
    userimage,
    type
  };

  this.props.createAttendant(userData);
}


  render() {
    const { errors} = this.props;
    const { isAttendantCreated, loading } = this.props.attendants;

    if (Object.keys(errors).length > 0) {
      if (errors.email) {
        toast.error(errors.email);
      }

      if (errors.password) {
        toast.error(errors.password);
      }
    }
    if (loading) {
      return (
          <div>
          <Loading />
          </div>
      )
  }

    if (isAttendantCreated) {
      toast.success(isAttendantCreated);
    }

    return (
      <div id="main">
        <div className="container">
            <section className="topmargin">
                <div className="container">
                        <div id="create_sales_assistant">
                                <h1 className="text-center">Create Sales Attendant</h1>
                        <form onSubmit={this.onSubmit}>
                                <h2>Name</h2>
                                <input type="text" name="name" id="name" placeholder="Enter Name" onChange={this.onChange} required/>
                                <h2>Email</h2>
                                <input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.onChange} required/>
                                <h2>Password</h2>
                                <input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.onChange} required/> <br />
                                <h2>User Image</h2>
                                <input type="file" id="userimage" name="upload" onChange={this.onImageChange}/>
                                <h2>Type</h2>
                                <select id="type" name="type" onChange={this.onChange} required>
                                    <option value="">Select Role</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Attendant</option>
                                </select> <br /> <br />
                                <input type="submit" name="" id="createattendant" className="button_1" value="Create Sales Assistant" />
                                
                            </form>   
                    </div>
                </div>
            </section>
      </div>
    </div>
    )
  }
}

CreateAttendant.propTypes = {
  createAttendant: PropTypes.func.isRequired,
  attendants: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  attendants: state.attendants,
  errors: state.errors
});

export default connect(mapStateToProps, { createAttendant })(CreateAttendant);