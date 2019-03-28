import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { viewAttendants, deleteAttendant } from '../../actions/attendantActions';
import Loading from '../Common/Loading';

export class ViewAttendant extends Component {
    componentDidMount() {
        this.props.viewAttendants();
    }

    deleteAttendant(id) {
        if (confirm('Are you sure you want to delete this Store Attendant?')){
          this.props.deleteAttendant(id);
        };
        
      }

    render() {
        const { errors } = this.props;
        const { attendants, attendantDeleted } = this.props.attendants;


        if (attendantDeleted) {
            toast.success('Store Attendant Deleted Successfully');
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
                              <button className="button_3">Promote</button>
                              <button className="button_2" onClick={() => {this.deleteAttendant(attendant.id)}}>Delete</button>
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
            <div>
                <Loading />
            </div>
        )
    }
}

ViewAttendant.propTypes = {
    viewAttendants: PropTypes.func.isRequired,
    deleteAttendant: PropTypes.func.isRequired,
    attendants: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    attendants: state.attendants,
    errors: state.errors
});

export default  connect(mapStateToProps, { viewAttendants, deleteAttendant })(ViewAttendant);