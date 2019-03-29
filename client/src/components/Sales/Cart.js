import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../Common/Loading';
import { createSale } from '../../actions/saleActions';
export class Cart extends Component {
    onCheckout = () => {
        if (confirm('Are you sure you want to checkout now?')){
            const totalcartitems = JSON.parse(localStorage.getItem('products'));

            const order = [];
            totalcartitems.map((product) => {
                let quantity = document.getElementById(`quantity-${product.productId}`).value;
                quantity = Number(quantity);
                const productRequested = {
                    product_id: product.productId,
                    quantity,
                };
            order.push(productRequested);
            });
            this.props.createSale({order});
            // console.log(order)

        }
    }

    removeProductFromCart = (productId) => {
        let cartItems = JSON.parse(localStorage.getItem('products'));
        cartItems.map((item, i) => {
            if (item.productId === productId) {
            cartItems.splice(i, 1);

            localStorage.setItem('products', JSON.stringify(cartItems));      
        }
        });
        window.location.reload();
    }

  render() {
    if (Object.keys(this.props.errors).length > 0) {

        toast.error(this.props.errors.message);
      }

    const { isSaleCreated } = this.props.sales;

      if (isSaleCreated) {
        toast.success('Sale Created Successfully');
        localStorage.removeItem('products');
        return (
            <div>
            {this.props.history.push('/dashboard')}
            </div>
        );
      }

    let cartItems = JSON.parse(localStorage.getItem('products'));
    if (cartItems === null || cartItems.length === 0) {
        return(
            <div>
        {toast.warn('Cart Is Empty, Please Add Item')}
        {this.props.history.push('/dashboard')}
            </div>
        )
     }
    return (
      <div>
        <section id="productsection" className="topmargin">
                    <div className="container">
                    <table className="table" id="carttable">
                            <caption>Cart</caption>
                            <thead>
                              <tr>
                                <th scope="col">Item(s)</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody id="carttablebody">
                            {
                                cartItems.map((item, key) => {
                                    const quantityId=`quantity-${item.productId}`;
                                    return (
                                        <tr key={key}>
                                            <td data-label="Item(s)"><img src={item.productImage} className="cardimg"/></td>
                                            <td data-label="Quantity"> <input type="number" id={quantityId} name="quantity" defaultValue="1" placeholder="Quantity" /> </td>
                                            <td data-label="Price">{item.productPrice}</td>
                                            <td><button id="removeproduct" onClick={() => {this.removeProductFromCart(item.productId)}} className="button_2">Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                          </table>

                        <div className="container">
                            <div className="text-center">
                                    {/* <h2 id="totalcartamount">Total: $0</h2> */}
                              <button className="button_1"><Link to="/dashboard">Continue Shopping</Link></button>
                              <button className="button_3" onClick={this.onCheckout}>Checkout</button>
                            </div>
                        </div>
                </div>
                </section>
      </div>
    )
  }
}

Cart.propTypes = {
    sales: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    createSale: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    sales: state.sales,
    errors: state.errors
});

export default connect(mapStateToProps, { createSale })(Cart);