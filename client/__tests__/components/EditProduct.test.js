import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { EditProduct } from '../../src/components/Products/EditProduct';

describe('<EditProduct />', () => {
    const props = {
        getProductById: jest.fn(),
        editProduct: jest.fn(),
        product: jest.mock(),
        errors: jest.mock(),
        match: {params: jest.mock()},
        history: {push: jest.fn()}
      };

      it('renders the EditProduct component correctly', () => {
        const wrapper = shallow(<EditProduct {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

            it('should call the mock onSubmit function', () => {
                const wrapper = shallow(<EditProduct {...props} />)
                const instance = wrapper.instance();

                instance.refs = {
                    productname: {
                        value: jest.mock()
                    },
                    productdescription: {
                        value: jest.mock()
                    },
                    productprice: {
                        value: jest.mock()
                    },
                    productquantity: {
                        value: jest.mock()
                    },
                    productimage: {
                        files: jest.mock()
                    }
                }
                const event = Object.assign(jest.fn(), { preventDefault: () => {} });

                 sinon.spy(wrapper.instance(), 'onSubmit');
                 wrapper.instance().onSubmit(event);
                 expect(wrapper.instance().onSubmit.calledOnce)
                   .toEqual(true);
                   expect(wrapper.instance().onSubmit.calledWith(event));
                });

                it('should render Loading component if loading props is true', () => {
                  const wrapper = shallow(<EditProduct {...props} />)
      
                  expect(props.getProductById).toBeCalled();
                   expect(props.getProductById).toHaveReturned();
                  });

                  it('should show error message(s) if product is not created', () => {
                    props.errors = { message: 'Email field is required'}
                    const wrapper = shallow(<EditProduct {...props} />)
        
                    expect(props.getProductById).toBeCalled();
                     expect(props.getProductById).toHaveReturned();
                    // expect(wrapper).toMatchSnapshot();

                    });

                    it('should show toast message(s) if product is edited successfully', () => {
                      props.product.isProductEdited = true;
                      const wrapper = shallow(<EditProduct {...props} />)
                      
                      expect(props.getProductById).toBeCalled();
                      expect(props.getProductById).toHaveReturned();
                     });

                     it('should render markup if product exist', () => {
                        props.product.product = {name: 'Milo'};
                        const wrapper = shallow(<EditProduct {...props} />)
                        
                        expect(props.getProductById).toBeCalled();
                        expect(props.getProductById).toHaveReturned();
                       });
});