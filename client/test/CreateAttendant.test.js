import React from 'react';
import { shallow } from 'enzyme';

import CreateAttendant from '../src/components/Attendant/CreateAttendant';
import ViewAttendant from '../src/components/Attendant/ViewAttendant';

describe('<CreateAttendant />', () => {
    it('renders the CreateAttendant component correctly', () => {
        const wrapper = shallow(<CreateAttendant />);
        expect(wrapper).toMatchSnapshot();
    });
});