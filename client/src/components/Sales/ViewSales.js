import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { viewSales } from '../../actions/saleActions';
import Loading from '../Common/Loading';
import axios from 'axios'
 export class ViewSales extends Component {
    componentDidMount(){
         this.props.viewSales();
     }

     convertAttendantIdToName = () => {
      setTimeout(() => {
        const sales = JSON.parse(localStorage.getItem('sales'));
        
        sales.map((sale, i) => {
          const storeattendantuserid = sale.store_attendant_user_id;
          const storeattendantname = `storeattendantname-${storeattendantuserid}-${i}`;
          if (storeattendantuserid=== undefined) {
           return document.getElementById(storeattendantname).innerHTML = 'You';
          } 

          axios.get(`https://store--manager.herokuapp.com/api/v1/auth/${storeattendantuserid}`)
          .then(res => {
            document.getElementById(storeattendantname).innerHTML = res.data.data.name;
            })
            .catch(() => {
              document.getElementById(storeattendantname).innerHTML = '-';
            })  
        });
      }, 5)

     }

    render() {
        if (Object.keys(this.props.errors).length > 0) {

            toast.error(this.props.errors.message);
            this.props.history.push('/dashboard')

          }

          const { sales, loading } = this.props.sales;

       if (loading) { 
        return (
          <div>
          <Loading />
          </div>
        )
      }

        if (sales.length === 0) {
            // return no sale found.
            return(
                <div id="main">
                    <div className="topmargin">
                        <h1 className="text-center">No Sales Have Been Made.</h1>
                    </div>
                </div>  
            )
        }
        // save sales to localstorage so it can be used to get who made the sale
        localStorage.setItem('sales', JSON.stringify(this.props.sales.sales))

    return (
      <div id="main">
      <section className="topmargin" onLoadedData={this.convertAttendantIdToName()}>
                <div className="container text-center">
                        <table className="table">
                                <caption>Sales</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Sold By</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                        sales.map((sale, key) => {
                                          const storeattendantname = `storeattendantname-${sale.store_attendant_user_id}-${key}`;
                                            return (
                                <tr key={key}>
                                    <td data-label="Date">{sale.created_at}</td>
                                    <td data-label="Product">{sale.name}</td>
                                    <td data-label="Amount">${sale.price}</td>
                                    <td data-label="Quantity" ref="me">{sale.quantity}</td>
                                    <td data-label="Sold By" id={storeattendantname} ref={storeattendantname}></td>
                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                              </table>
                </div>
            </section>    

      </div>
    )
  }
}

ViewSales.propTypes = {
    sales: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    viewSales: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    sales: state.sales,
    errors: state.errors
});

export default connect(mapStateToProps, { viewSales })(ViewSales);