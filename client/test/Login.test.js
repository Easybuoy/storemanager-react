import React from 'react';
import { shallow } from 'enzyme';

import Login from '../src/components/Login/Login';
import Dashboard from '../src/components/Dashboard/Dashboard';

describe('<Login />', () => {
    it('renders the login page', () => {
        const wrapper = shallow(<Dashboard />);
        console.log(wrapper.find('img').length)
        const image = wrapper.find('img').length;
        expect(wrapper.find('section').length).toEqual(1);
        
        // expect(image).toEqual(1);
    })
})