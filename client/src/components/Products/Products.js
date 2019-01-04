import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from '../Common/Loading';

import { getProducts } from '../../actions/productActions';
import { toast } from 'react-toastify';

class Products extends Component {

    componentDidMount(){
        this.props.getProducts()
    }

  render() {
    const { products, loading } = this.props.products;
    
    if (Object.keys(this.props.errors).length > 0) {

      toast.error(this.props.errors.message)
      return (
        <div>
          <h1 className="text-center">
            {this.props.errors.message}
          </h1>
        </div>
      );
    }

    if (loading) { 
      return (
        <div>
        <Loading />
        </div>
      )
    }
   

    if (products) {
      
      return (
        <div className="container">
          <div className="cardgroup">
          {
            products.map((product, key) => {
              const productName = product.name;
              const productDescription = `${product.description.substring(0, 70)}...`;
              const productPrice = product.price;
              const productQuantity = product.quantity;
              const productImage = `https://store--manager.herokuapp.com/${product.product_image}`
              return (
              <div key={key} className="card">
                <a href="view_product_details.html"><img src={productImage} alt={productName} className="cardimg" /></a>
        
                <div className="text-center cardbody" >
                  <h3 id="productname">{productName}</h3>
                  <p>{productDescription} </p>
                  <p>Quantity: {productQuantity}</p>
                  <p  id="productamount">Price: {`$${productPrice}`}</p>
                  <input type="number" id="number" name="amount" placeholder="Quantity" />
                  <button className="button_1">Add To Cart</button>
              </div>
            </div>
              );
            })
          }
            
          </div>
        </div>
      )
    }

    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
    products: state.products,
    errors: state.errors
});

export default connect(mapStateToProps, { getProducts })(Products);