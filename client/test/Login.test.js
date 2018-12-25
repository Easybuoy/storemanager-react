import React from 'react';
import { shallow } from 'enzyme';

import Login from '../src/components/Login/Login';


describe('<Login />', () => {
    it('renders the login page', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toEqual(3);
        expect(wrapper.find('img').length).toEqual(1);
    })
})