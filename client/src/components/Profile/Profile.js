import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { viewProfile } from '../../actions/profileActions';
import Loading from '../Common/Loading';

export class Profile extends Component {
    componentDidMount() {
        this.props.viewProfile();
    }

  render() {
    const { errors } = this.props;
    const { profile } = this.props.profile;

    if (Object.keys(errors).length > 0) {
        if (errors.message) {
            toast.error(errors.message);
        }
    }
    
    if (profile) {
        const { name, email, type, userImage, status } = profile;
        let role = 'Store Attendant';
        let stats = 'Not Active';

        if (type === 1) {
            role = 'Admin';  
        }
        if (status === 1) {
            stats = 'Active'
        }

       const userProfilePicture = `http://store--manager.herokuapp.com/${userImage}`;

        return (
            <div id="main">
            <section id="prof" className="topmargin">
                      <div className="container topmargin">
                          <div id="profiledetails">
                              
                              <img src={userProfilePicture} id="profileimg" />
      
                          <ul className="list-group" id="profilecontent">
                                  <li className="list-group-item text-center"><strong>Name:</strong> {name}</li>
                                  <li className="list-group-item text-center"><strong>Email:</strong> {email}</li>
                                  <li className="list-group-item text-center"><strong>Role:</strong> {role}</li>
                                  <li className="list-group-item text-center"><strong>Status:</strong> {stats}</li>
                                  </ul>
                              </div>
                      </div>
              </section>
          </div>
        )
    }

    return (
                <div>
                    <Loading />
                </div>
            );
    
  }
}

Profile.propTypes = {
    viewProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});



export default connect(mapStateToProps, { viewProfile })(Profile);