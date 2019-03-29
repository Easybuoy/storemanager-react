import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Login } from '../../src/components/Login/Login';

describe('<Login />', () => {
    const props = {
        signIn: jest.fn(),
        auth: jest.mock(),
        errors: jest.mock(),
        history: {push: jest.fn()}
      };

    it('renders the Login component correctly', () => {
        const wrapper = shallow(<Login {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call the mock signIn function', () => {
        const wrapper = shallow(<Login {...props} />)
 
         wrapper.find('form').simulate(
           'submit', 
           {preventDefault() {}}
         )
         expect(props.signIn).toBeCalled();
         expect(props.signIn).toHaveReturned();
        });

    it('should call the mock onChange function', () => {
        const wrapper = shallow(<Login {...props} />)

        const event = {target: {name: "pollName", value: "spam"}};

         sinon.spy(wrapper.instance(), 'onChange');
         wrapper.instance().onChange(event);
         expect(wrapper.instance().onChange.calledOnce)
           .toEqual(true);
           expect(wrapper.instance().onChange.calledWith(event));

        });

        it('should call the mock onSubmit function', () => {
            const wrapper = shallow(<Login {...props} />)
    
            const event = Object.assign(jest.fn(), { preventDefault: () => {} });
    
             sinon.spy(wrapper.instance(), 'onSubmit');
             wrapper.instance().onSubmit(event);
             expect(wrapper.instance().onSubmit.calledOnce)
               .toEqual(true);
               expect(wrapper.instance().onSubmit.calledWith(event));
            });

            it('should show error message(s) if login error occurs', () => {
              props.errors = { message: 'Network Error', email: 'Email field is required', password: 'Password field is required'}
              const wrapper = shallow(<Login {...props} />)
  
              expect(props.signIn).toBeCalled();
               expect(props.signIn).toHaveReturned();

              });

              it('should redirrect if user is signed in', () => {
                props.auth.isSignedIn = true;
                const wrapper = shallow(<Login {...props} />)
    
                expect(props.signIn).toBeCalled();
                 expect(props.signIn).toHaveReturned();
  
                });
});