import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Products } from '../../src/components/Products/Products';

describe('<Products />', () => {
    const props = {
        getProducts: jest.fn(),
        deleteProduct: jest.fn(),
        auth: {user: {type: jest.mock()}},
        products: jest.mock(),
        errors: jest.mock(),
      };

    it('renders the Products component correctly', () => {
        const wrapper = shallow(<Products {...props}/>);
        // const instance = wrapper.instance();

       
        //         instance.refs = {
        //             shoppingcartlabel: {
        //                 innerHTML: jest.mock()
        //             },
        //         }
        expect(wrapper).toMatchSnapshot();
    });

    // it('should call the mock getProducts function', () => {
    //     const wrapper = shallow(<Products {...props} />)
 
    //     //  wrapper.find('form').simulate(
    //     //    'submit', 
    //     //    {preventDefault() {}}
    //     //  )
    //      expect(props.getProducts).toBeCalled();
    //      expect(props.getProducts).toHaveReturned();
    //     });

    // it('should call the mock addToCart function', () => {
    //     const wrapper = shallow(<Products {...props} />)

    //     const event = {target: {name: "pollName", value: "spam"}};

    //      sinon.spy(wrapper.instance(), 'addToCart');
    //      wrapper.instance().addToCart('','','');
    //      expect(wrapper.instance().addToCart.calledOnce)
    //        .toEqual(true);
    //     });

    it('should render productRecord if sales array is not empty', () => {
        props.products.products = [{id: 1, name: 'iphone'}];
        const wrapper = shallow(<Products {...props} />)

        expect(wrapper).toMatchSnapshot();
        });

        it('should render productRecord for admin if props.auth = 1', () => {
            props.products.productDeleted = [{id: 1, name: 'iphone'}, {id: 1, name: 'iphone'}];
            // props.auth.user.type = 2;
            const wrapper = shallow(<Products {...props} />)
    
            expect(props.getProducts).toBeCalled();
            expect(props.getProducts).toHaveReturned();
        });
        it('should call the mock deleteProduct function', () => {
            const wrapper = shallow(<Products {...props} />)
           
            Object.defineProperty(window.confirm, 'confirm', {
                configurable: true,
              });
              window.confirm = jest.fn();
             sinon.spy(wrapper.instance(), 'deleteProduct');
             wrapper.instance().deleteProduct(1);
             expect(window.confirm).toHaveBeenCalled();
             expect(wrapper.instance().deleteProduct.calledOnce).toEqual(true);
            });

        it('should render productRecord for admin if props.auth = 1', () => {
            props.products.products = [{id: 1, name: 'iphone'}, {id: 1, name: 'iphone'}];
            // props.auth.user.type = 2;
            const wrapper = shallow(<Products {...props} />)
            localStorage.setItem('products', JSON.stringify([{id: 1, name: 'Phone'}]));

            expect(props.getProducts).toBeCalled();
            expect(props.getProducts).toHaveReturned();
        });

        it('should render productRecord for admin if props.auth = 1', () => {
            props.products.products = [];
            props.products.productDeleted = false
            // props.auth.user.type = 2;
            const wrapper = shallow(<Products {...props} />)
            // localStorage.setItem('products', JSON.stringify([{id: 1, name: 'Phone'}]));

            expect(props.getProducts).toBeCalled();
            expect(props.getProducts).toHaveReturned();
        });

        // it('should call the mock createProduct function', () => {
        //     const wrapper = shallow(<Products {...props} />)
        //     const addToCart = jest.fn();
        //      wrapper.find('addToCartButton').simulate(
        //        'click', 
        //        {preventDefault() {}}
        //      )
        //      expect(addToCart).toBeCalled();
        //     //  expect(props.createProduct).toHaveReturned();
        //     });

});