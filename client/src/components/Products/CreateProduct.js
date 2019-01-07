import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { createProduct } from '../../actions/productActions';
import Loading from '../Common/Loading';

class CreateProduct extends Component {
    constructor() {
        super();
        this.state = {
            productname: '',
            productdescription: '',
            productprice: '',
            productquantity: '',
            productimage: '',
            categoryoption: ''
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
 
    onImageChange = (event) => {
        this.setState({ productimage: event.target.files[0] });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { productname, productdescription, productprice, productquantity, productimage } = this.state;
        console.log(this.state)
        const productData = {
            name: productname,
            description: productdescription,
            price: productprice,
            quantity: productquantity,
            productimage
        }
        this.props.createProduct(productData);
    }

    render() { console.log(this.props)
        const { errors } = this.props;
        const { loading, isProductCreated, } = this.props.product;
        
        if (loading) {
            return (
                <div>
                <Loading />
                </div>
            )
        }
        if (isProductCreated) {
            toast.success('Product created successfully');
        }

        if (Object.keys(errors).length > 0) {
            if (errors.data.name) {
                toast.error(errors.data.name);
            }

            if (errors.data.description) {
                toast.error(errors.data.description);
            }

            if (errors.data.price) {
                toast.error(errors.data.price);
            }

            if (errors.data.quantity) {
                toast.error(errors.data.quantity);
            }
        }

        

        return ( 
            <div id="main" className="topmargin">

                <div className="container">
                    <div id="create_sales_assistant">
                        <h1 className="text-center">Create New Product</h1>
                        <form method="POST">
                            <h2>Product Name</h2>
                            <input type="text" id="productname" name="productname" placeholder="Enter Name" onChange={this.onChange} />
                            <h2>Product Summary</h2>
                            <input type="text" id="productdescription" name="productdescription" placeholder="Enter Description" onChange={this.onChange}/>
                            <h2>Product Price</h2>
                            <input type="number" id="productprice" name="productprice" placeholder="Enter Price" onChange={this.onChange} />
                            <h2>Product Quantity</h2>
                            <input type="number" id="productquantity" name="productquantity" placeholder="Enter Quantity" onChange={this.onChange} />
                            <img src="" id="showimage" className="text-center" style={{ display: 'none', height: '100px', width: '100px' }} />
                            <h2>Product Image</h2>
                            <input type="file" id="productimage" name="upload" onChange={this.onImageChange} />

                            <h2>Category</h2>
                            <select id="categoryoption">
                                <option value="">Select Category</option>
                            </select> <br /> <br />
                            <input type="submit" name="" className="button_1" id="createproductsubmit" value="Create Product" onClick={this.onSubmit} />

                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.products,
    errors: state.errors
});

export default connect(mapStateToProps, { createProduct })(CreateProduct);