import React from 'react';
import { shallow } from 'enzyme';

import ViewSales from '../../src/components/Sales/ViewSales';

describe('<ViewSales />', () => {
    it('renders the ViewSales component correctly', () => {
        const wrapper = shallow(<ViewSales />);
        expect(wrapper).toMatchSnapshot();
    });
});