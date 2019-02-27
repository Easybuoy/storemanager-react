import React from 'react';
import { shallow } from 'enzyme';

import Login from '../../src/components/Login/Login';

describe('<Login />', () => {
    it('renders the Login component correctly', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
});