import React from 'react';
import { shallow } from 'enzyme';

import PrivateRoute from '../src/components/Common/PrivateRoute';

describe('<PrivateRoute />', () => {
    it('renders the PrivateRoute component correctly', () => {
        const wrapper = shallow(<PrivateRoute />);
        expect(wrapper).toMatchSnapshot();
    });
});