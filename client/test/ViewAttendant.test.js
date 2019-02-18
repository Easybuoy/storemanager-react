import React from 'react';
import { shallow } from 'enzyme';

import ViewAttendant from '../src/components/Attendant/ViewAttendant';

describe('<ViewAttendant />', () => {
    it('renders the ViewAttendant component correctly', () => {
        const wrapper = shallow(<ViewAttendant />);
        expect(wrapper).toMatchSnapshot();
    });
});