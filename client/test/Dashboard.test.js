import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../src/components/Dashboard/Dashboard';

describe('<Dashboard />', () => {
    it('renders the Dashboard component correctly', () => {
        const wrapper = shallow(<Dashboard />);
        expect(wrapper).toMatchSnapshot();
    });
});