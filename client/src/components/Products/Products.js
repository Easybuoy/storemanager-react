import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loading from '../Common/Loading';;

import { getProducts, deleteProduct } from '../../actions/productActions';
import { toast } from 'react-toastify';

export class Products extends Component {

    componentDidMount(){
        this.showCartCount();
        this.props.getProducts();
    }

    deleteProduct(id) {
      if (confirm('Are you sure you want to delete this product?')){
        this.props.deleteProduct(id);
      };
      
    }

    addToCart(productId, productImage, productPrice) {
      const products = {
      productId,
      productImage,
      productPrice
    };

    const totalcartitems = JSON.parse(localStorage.getItem('products'));
    // If nothing is in cart add new item
    if (totalcartitems === null) {
      const data = [];
  
      data.push(products);
      localStorage.setItem('products', JSON.stringify(data));
      return this.showCartCount();
    }
    // Else push to what is existing in cart.
    totalcartitems.push(products);
    localStorage.setItem('products', JSON.stringify(totalcartitems));      
      this.showCartCount();
    }

    showCartCount() {
      let length = 0;
      const totalcartitem = JSON.parse(localStorage.getItem('products'));
      if (totalcartitem) {
      length = totalcartitem.length;
      }
      document.getElementById('shoppingcartlabel').innerHTML = length;
    }

  render() {
    const { products, loading, productDeleted } = this.props.products;
    
    if (Object.keys(this.props.errors).length > 0) {

      toast.error(this.props.errors.message || this.props.errors)
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
      // If type == 1, its an admin
      if (this.props.auth.user.type === 1) {
        return (
          <div className="container">
          <section id="categoryfiltersection">
            <div className="container">
                    <div className="categoryfiltercontent">
                        <select>
                            <option value="Phones & Tablets">Phones & Tablets</option>
                            <option value="Computing">Computing</option>
                            <option value="Gaming">Gaming</option>
                        </select>
                        <button className="button_1">Filter</button>
                       
                    </div>
            </div>
            </section>
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
                    <button className="button_1"><Link to={`editproduct/${product.id}`}>EDIT</Link></button>
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
        <section id="categoryfiltersection">
            <div className="container">
                    <div className="categoryfiltercontent">
                        <select>
                            <option value="Phones & Tablets">Phones & Tablets</option>
                            <option value="Computing">Computing</option>
                            <option value="Gaming">Gaming</option>
                        </select>
                        <button className="button_1">Filter</button>
                       
                    </div>
            </div>
            </section>
          <div className="cardgroup">
          {
            products.map((product, key) => {
              const productId = product.id;
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
                  <button className="button_1" onClick={() => {this.addToCart(productId, productImage, productPrice)}}>Add To Cart</button>
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

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    products: state.products,
    errors: state.errors
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(Products);