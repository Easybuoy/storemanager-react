import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../src/components/Common/Navigation';

describe('<Navigation />', () => {
    it('renders the Navigation component correctly', () => {
        const wrapper = shallow(<Navigation />);
        expect(wrapper).toMatchSnapshot();
    });
});