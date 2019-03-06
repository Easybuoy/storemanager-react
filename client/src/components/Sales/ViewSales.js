import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { viewSales } from '../../actions/saleActions';
import Loading from '../Common/Loading';

 export class ViewSales extends Component {
    componentDidMount(){
         this.props.viewSales();
     }

    render() {
        if (Object.keys(this.props.errors).length > 0) {

            toast.error(this.props.errors.message);
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
    return (
        
      <div id="main">
      <section className="topmargin">
                <div className="container text-center">
                        <table className="table">
                                <caption>Sales</caption>
                                <thead>
                                  <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Quantity</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {
                                        sales.map((sale, key) => {
                                            return (
                                <tr key={key}>
                                    <td data-label="Date">{sale.created_at}</td>
                                    <td data-label="Product">{sale.name}</td>
                                    <td data-label="Amount">${sale.price}</td>
                                    <td data-label="Quantity">{sale.quantity}</td>
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