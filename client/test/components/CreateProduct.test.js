import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { CreateProduct } from '../../src/components/Products/CreateProduct';

describe('<CreateProduct />', () => {
    const props = {
        createProduct: jest.fn(),
        product: jest.mock(),
        errors: jest.mock(),
      };

      it('renders the CreateProduct component correctly', () => {
        const wrapper = shallow(<CreateProduct {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

      it('should call the mock createProduct function', () => {
        const wrapper = shallow(<CreateProduct {...props} />)
 
         wrapper.find('form').simulate(
           'submit', 
           {preventDefault() {}}
         )
         expect(props.createProduct).toBeCalled();
         expect(props.createProduct).toHaveReturned();
        });

    it('should call the mock onImageChange function', () => {
        const wrapper = shallow(<CreateProduct {...props} />)

        const event = {target: {productimage: "pollName", files: "spam"}};

         sinon.spy(wrapper.instance(), 'onImageChange');
         wrapper.instance().onImageChange(event);
         expect(wrapper.instance().onImageChange.calledOnce)
           .toEqual(true);
           expect(wrapper.instance().onImageChange.calledWith(event));

        });

        it('should call the mock onChange function', () => {
            const wrapper = shallow(<CreateProduct {...props} />)
    
            const event = {target: {name: "pollName", value: "spam"}};
    
             sinon.spy(wrapper.instance(), 'onChange');
             wrapper.instance().onChange(event);
             expect(wrapper.instance().onChange.calledOnce)
               .toEqual(true);
               expect(wrapper.instance().onChange.calledWith(event));
    
            });

            it('should call the mock onSubmit function', () => {
                const wrapper = shallow(<CreateProduct {...props} />)
        
                const event = Object.assign(jest.fn(), { preventDefault: () => {} });
        
                 sinon.spy(wrapper.instance(), 'onSubmit');
                 wrapper.instance().onSubmit(event);
                 expect(wrapper.instance().onSubmit.calledOnce)
                   .toEqual(true);
                   expect(wrapper.instance().onSubmit.calledWith(event));
                });
});