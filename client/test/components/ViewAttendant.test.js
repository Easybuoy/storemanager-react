import React from 'react';
import { shallow } from 'enzyme';

import { ViewAttendant } from '../../src/components/Attendant/ViewAttendant';

describe('<ViewAttendant />', () => {
    const props = {
        viewAttendants: jest.fn(),
        attendants: jest.mock(),
      };

    it('renders the ViewAttendant component correctly', () => {
        const wrapper = shallow(<ViewAttendant {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call the mock viewAttendant function', () => {
        const wrapper = shallow(<ViewAttendant {...props} />)
 
         expect(props.viewAttendants).toBeCalled();
         expect(props.viewAttendants).toHaveReturned();
        });
});