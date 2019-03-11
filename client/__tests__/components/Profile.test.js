import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Profile } from '../../src/components/Profile/Profile';

describe('<Profile />', () => {
    const props = {
        viewProfile: jest.fn(),
        profile: jest.mock(),
        errors: jest.mock(),
      };

      it('renders the Profile component correctly', () => {
        const wrapper = shallow(<Profile {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

                it('should render Loading component if loading props is false and profile props is false', () => {
                  props.profile.loading = false;
                  props.profile.profile = {};
                  const wrapper = shallow(<Profile {...props} />)
      
                  expect(props.viewProfile).toBeCalled();
                   expect(props.viewProfile).toHaveReturned();
                  });

                  it('should render profile details ', () => {
                    props.profile.profile = { name: 'Ezekiel Ekunola', userimage: '', email: 'ezekiel@gmail.com', type: 1, status: 1};
                    const wrapper = shallow(<Profile {...props} />)
        
                    expect(props.viewProfile).toBeCalled();
                     expect(props.viewProfile).toHaveReturned();
                    });

                  it('should show error message(s) if error is encountered', () => {
                    props.errors = { message: 'Unable to get profile'}
                    const wrapper = shallow(<Profile {...props} />)
        
                    expect(props.viewProfile).toBeCalled();
                     expect(props.viewProfile).toHaveReturned();

                    });

                    // it('should show error message(s) if product is not created', () => {
                    //   props.product.isProductCreated = true;
                    //   const wrapper = shallow(<CreateProduct {...props} />)
                      
                    //   expect(props.createProduct).toBeCalled();
                    //   expect(props.createProduct).toHaveReturned();
                    //  });

                    
});