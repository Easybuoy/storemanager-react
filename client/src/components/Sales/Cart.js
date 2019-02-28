import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

class Cart extends Component {
    checkout() {

    }

    removeProductFromCart(productId) {
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
    let cartItems = JSON.parse(localStorage.getItem('products')); console.log(cartItems)
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

                                    return (
                                        <tr key={key}>
                                            <td data-label="Item(s)"><img src={item.productImage} className="cardimg"/></td>
                                            <td data-label="Quantity"> <input type="number" id="number" name="amount" defaultValue="1" placeholder="Quantity" /> </td>
                                            <td data-label="Price">{item.productPrice}</td>
                                            <td><button onClick={() => {this.removeProductFromCart(item.productId)}} className="button_2">Remove</button></td>
                                        </tr>
                                    )
                                })
                            }
                              {/* <tr>
                                <td data-label="Item(s)"><img src="img/gpixel2.png" className="cardimg"/></td>
                                <td data-label="Quantity"> <input type="number" id="number" name="amount" defaultValue="1" placeholder="Quantity" /> </td>
                                <td data-label="Price">$999</td>
                                <td><button className="button_2">Remove</button></td>
                              </tr>

                              <tr>
                                    <td data-label="Item(s)"><img src="img/imac.png" className="cardimg"/></td>
                                    <td data-label="Quantity"> <input type="number" id="number" name="amount" defaultValue="1" placeholder="Quantity" /> </td>
                                    <td data-label="Price">$999</td>
                                    <td><button className="button_2">Remove</button></td>
                            </tr> */}
                            </tbody>
                          </table>

                        <div className="container">
                            <div className="text-center">
                                    <h2 id="totalcartamount">Total: $0</h2>
                              <button className="button_1">Continue Shopping</button>
                              <button className="button_3" onClick={this.checkout()}>Checkout</button>
                            </div>
                        </div>
                </div>
                </section>
      </div>
    )
  }
}

Cart.propTypes = {

}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Cart);