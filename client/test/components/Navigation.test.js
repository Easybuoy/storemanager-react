import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Navigation } from '../../src/components/Common/Navigation';

describe('<Navigation />', () => {
    const props = {
        signOut: jest.fn(),
        auth: {user: {
            userImage: 'assets/uploads/users/default-avatar.png'
        }}
      };

    it('renders the Navigation component correctly', () => {
        const wrapper = shallow(<Navigation {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call the mock signOut function', () => {
        const wrapper = shallow(<Navigation {...props} />)
 
         wrapper.find('#signout').simulate('click');
         expect(props.signOut).toBeCalled();
         expect(props.signOut).toHaveReturned();
        });
});