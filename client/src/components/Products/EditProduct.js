import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { getProductById, editProduct } from '../../actions/productActions';
import Loading from '../Common/Loading';

export class EditProduct extends Component {
    componentDidMount = () => {
       this.props.getProductById(this.props.match.params.id);
      
    }

    onSubmit = (e) => { 
        e.preventDefault();
        const productname = this.refs.productname.value;
        const productdescription = this.refs.productdescription.value;
        const productquantity = this.refs.productquantity.value;
        const productprice = this.refs.productprice.value
        const productimage = this.refs.productimage.files[0];
    
        const productData = {
            name: productname,
            description: productdescription,
            price: productprice,
            quantity: productquantity,
            productimage
        } 
        this.props.editProduct(this.props.match.params.id, productData);
    }

    render() {
        const { errors } = this.props;
        const { isProductEdited, product } = this.props.product;
        
        if (isProductEdited) {
            toast.success('Product edited successfully');
            this.props.history.push('/dashboard');
        }

        if (Object.keys(errors).length > 0) {
            if (errors.message) {
                toast.error(errors.message);
            }
        }

            if (product) {
                return (
                    <div id="main" className="topmargin">

                <div className="container">
                    <div id="create_sales_assistant">
                        <h1 className="text-center">Edit Product</h1>
                        <form onSubmit={this.onSubmit}>
                            <h2>Product Name</h2>
                            <input type="text" ref="productname" id="productname" defaultValue={product.name} name="productname" placeholder="Enter Name" onChange={this.onChange} required/>
                            <h2>Product Summary</h2>
                            <input type="text" ref="productdescription" id="productdescription" defaultValue={product.description} name="productdescription" placeholder="Enter Description" onChange={this.onChange} required/>
                            <h2>Product Price</h2>
                            <input type="number" ref="productprice" id="productprice" name="productprice" defaultValue={product.price} placeholder="Enter Price" onChange={this.onChange} required/>
                            <h2>Product Quantity</h2>
                            <input type="number" ref="productquantity" id="productquantity" defaultValue={product.quantity} name="productquantity" placeholder="Enter Quantity" onChange={this.onChange} required/>
                            <img src="" id="showimage" className="text-center" style={{ display: 'none', height: '100px', width: '100px' }} />
                            <h2>Product Image</h2>
                            <input type="file" ref="productimage" id="productimage" name="upload" onChange={this.onImageChange} />

                            <h2>Category</h2>
                            <select id="categoryoption">
                                <option value="">Select Category</option>
                            </select> <br /> <br />
                            <input type="submit" name="" className="button_1" id="createproductsubmit" value="Edit Product"  />

                        </form>
                    </div>

                </div>
            </div>
                )
            }
        
        

        return ( 
            <div id="main" className="topmargin">
                <Loading />
            </div>
        )
    }
}

EditProduct.propTypes = {
    getProductById: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }

const mapStateToProps = state => ({
    product: state.products,
    errors: state.errors
});

export default connect(mapStateToProps, { getProductById, editProduct })(EditProduct);