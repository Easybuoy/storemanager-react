import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from '../Common/Loading';

import { getProducts, deleteProduct } from '../../actions/productActions';
import { toast } from 'react-toastify';

class Products extends Component {

    componentDidMount(){
        this.props.getProducts();
    }

    deleteProduct(id) {
      console.log(id)
      this.props.deleteProduct(id);
    }

  render() {
    const { products, loading, productDeleted } = this.props.products;
    
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
   
    if (productDeleted) {
      toast.success('Product Deleted Successfully');
    }

    if (products) {
      console.log(this.props.auth.user.type)
      // If type == 1, its an admin
      if (this.props.auth.user.type === 1) {
        return (
          <div className="container topmargin">
            <div className="cardgroup">
            {
              products.map((product, key) => {
                const productid = product.id;
                const productName = product.name;
                const productDescription = `${product.description.substring(0, 70)}...`;
                const productPrice = product.price;
                const productQuantity = product.quantity;
                const productImage = `https://store--manager.herokuapp.com/${product.product_image}`;
                return (
                <div key={key} className="card">
                  <a href="view_product_details.html"><img src={productImage} className="cardimg" /></a>
          
                  <div className="text-center cardbody" >
                    <h3 id="productname">{productName}</h3>
                    <p>{productDescription} </p>
                    <p>Quantity: {productQuantity}</p>
                    <p  id="productamount">Price: {`$${productPrice}`}</p>
                    <button className="button_1"><a href="admin_edit_product.html?id=${product.id}">EDIT</a></button>
                    <button className="button_2" onClick={() => {this.deleteProduct(productid)}}>DELETE</button>
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
    auth: state.auth,
    products: state.products,
    errors: state.errors
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(Products);