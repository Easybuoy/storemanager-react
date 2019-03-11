import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../src/components/Common/NotFound';

describe('<NotFound />', () => {
    it('should have 1 img', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('renders the NotFound component correctly', () => {
        const wrapper = shallow(<NotFound />);
        expect(wrapper).toMatchSnapshot();
    });
})