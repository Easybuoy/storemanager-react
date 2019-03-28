import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Products from '../../src/components/Products/Products';

describe('<Products />', () => {
    const props = {
        getProducts: jest.fn(),
        deleteProduct: jest.fn(),
        auth: jest.mock(),
        products: jest.mock(),
        errors: jest.mock(),
      };

    it('renders the Products component correctly', () => {
        const wrapper = shallow(<Products {...props}/>);
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

    //      sinon.spy(wrapper.instance(), 'getProducts');
    //      wrapper.instance().getProducts();
    //      expect(wrapper.instance().getProducts.calledOnce)
    //        .toEqual(true);
    //     //    expect(wrapper.instance().onChange.calledWith(event));

    //     });

    it('should render productRecord if sales array is not empty', () => {
        props.products.products = [{id: 1, name: 'iphone'}];
        const wrapper = shallow(<Products {...props} />)

        expect(wrapper).toMatchSnapshot();
        });
});