import React from 'react';
import { shallow } from 'enzyme';

import Cart from '../../src/components/Sales/Cart';

describe('<Cart />', () => {
    it('renders the Cart component correctly', () => {
        const wrapper = shallow(<Cart />);
        expect(wrapper).toMatchSnapshot();
    });
});