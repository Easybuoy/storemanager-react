import React from 'react';
import { shallow } from 'enzyme';

import CreateProduct from '../../src/components/Products/CreateProduct';

describe('<CreateProduct />', () => {
    it('renders the CreateProduct component correctly', () => {
        const wrapper = shallow(<CreateProduct />);
        expect(wrapper).toMatchSnapshot();
    });
});