import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Cart } from '../../src/components/Sales/Cart';

describe('<Cart />', () => {
    const props = {
        createSale: jest.fn(),
        sales: jest.mock(),
        errors: jest.mock(),
        history: { push: jest.fn() },
      };

    

    it('should call the mock removeProductFromCart function', () => {
        const wrapper = shallow(<Cart {...props} />)
 
        Object.defineProperty(window.location, 'reload', {
            configurable: true,
          });
          window.location.reload = jest.fn();

          
        localStorage.setItem('products', JSON.stringify([{id: 1, name: 'Phone'}]));
         const id = 1;
         sinon.spy(wrapper.instance(), 'removeProductFromCart');
         wrapper.instance().removeProductFromCart(id);
         expect(window.location.reload).toHaveBeenCalled();
         expect(wrapper.instance().removeProductFromCart.calledOnce)
           .toEqual(true);
        });

        it('should render salesRecord if sales is created', () => {
          props.sales.isSaleCreated = [{id: 1, name: 'iphone'}];
          const wrapper = shallow(<Cart {...props} />)

          expect(wrapper).toMatchSnapshot();

          });

          it('should render salesRecord if sales is created', () => {
            props.sales.loading = true;
            const wrapper = shallow(<Cart {...props} />)
  
            expect(wrapper).toMatchSnapshot();
  
            });

        it('renders the Cart component correctly', () => {
            const wrapper = shallow(<Cart {...props} />);
            expect(wrapper).toMatchSnapshot();
        });
});