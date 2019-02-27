import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Loading from '../../src/components/Common/Loading';

describe('<Loading />', () => {
    it('should have 1 div', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders the loading component correctly', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
    });
})