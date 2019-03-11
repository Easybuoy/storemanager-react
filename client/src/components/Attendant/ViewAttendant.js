import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { viewAttendants } from '../../actions/attendantActions';
import Loading from '../Common/Loading';

export class ViewAttendant extends Component {
    componentDidMount() {
        this.props.viewAttendants();
    }

    render() {
        const { errors } = this.props;
        const { loading, attendants } = this.props.attendants;

        if (loading) {
            return (
                <div>
                    <Loading />
                </div>
            )
        }

        if (attendants) {
            return (
            <div id="main" className="topmargin">
            <h1 className="text-center">Sale Attendants</h1>
                <div className="container topmargin">
                <div className="cardgroup">
                {
                    attendants.map((attendant, key) => {
                        const { name, email, userimage } = attendant; 
                        const attendantimage = `https://store--manager.herokuapp.com/${userimage}`;
                        return (
                            <div key={key} className="card"> 
                                <a><img src={attendantimage} className="cardimg" /></a>
                            
                            <div className="text-center cardbody" >
                              <h3 id="productname">Name: {name}</h3>
                              <p>Email: {email} </p>
                              <p>Attendance: -</p>
                              <p>Product Sold: -</p>
                              <button className="button_3" >Promote</button>
                              <button className="button_2" >Delete</button>
                            </div>
                            </div>
                        )
                    })
                }
                    </div>
                </div>
            </div>
            )
        }
        return (
            <div id="main" className="topmargin">
            <h1 className="text-center">Sale Attendants</h1>
              <div className="card">
                <a><img src="${attendant_image}" className="cardimg" /></a>
                            
              <div className="text-center cardbody" >
                <h3 id="productname">Name: }</h3>
                <p>Email: </p>
                <p>Attendance: -</p>
                <p>Product Sold: -</p>
                <button className="button_3" >Promote</button>
                <button className="button_2" >Delete</button>
              </div>
                            
              </div>
            </div>
          )
    }
}

ViewAttendant.propTypes = {
    viewAttendants: PropTypes.func.isRequired,
    attendants: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    attendants: state.attendants,
    errors: state.errors
});

export default  connect(mapStateToProps, { viewAttendants })(ViewAttendant);