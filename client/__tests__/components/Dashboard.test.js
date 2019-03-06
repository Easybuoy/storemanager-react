import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from '../../src/components/Dashboard/Dashboard';

describe('<Dashboard />', () => {
    const props = {
        auth: { user: {type: 1}},
      };

    it('renders the Dashboard component correctly', () => {
        const wrapper = shallow(<Dashboard {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});