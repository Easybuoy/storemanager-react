import React from 'react';
import { shallow } from 'enzyme';

import Products from '../../src/components/Products/Products';

describe('<Products />', () => {
    it('renders the Products component correctly', () => {
        const wrapper = shallow(<Products />);
        expect(wrapper).toMatchSnapshot();
    });
});