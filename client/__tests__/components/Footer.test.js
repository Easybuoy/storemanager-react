import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Footer from '../../src/components/Common/Footer';

describe('<Footer />', () => {
    it('should have 1 div', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should have 1 footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer').length).toEqual(1);
    });

    it('renders the footer component correctly', () => {
        const tree = renderer.create(<Footer />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})