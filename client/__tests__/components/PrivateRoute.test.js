import React from 'react';
import { shallow } from 'enzyme';

import { PrivateRoute } from '../../src/components/Common/PrivateRoute';

describe('<PrivateRoute />', () => {
    const props = {
        auth: jest.mock(),
      };

    it('renders the PrivateRoute component correctly', () => {
        const wrapper = shallow(<PrivateRoute {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render component if auth.isSignedIn = true', () => {
        props.auth.isSignedIn = true;
        const wrapper = shallow(<PrivateRoute {...props} />)

        expect(wrapper).toMatchSnapshot();
        });
});