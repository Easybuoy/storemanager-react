import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'; 
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import Login from '../src/components/Login/Login';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Login />', () => {
    it('renders the login page', () => {
        // const wrapper = shallow(<Login />);
        // console.log(wrapper.find('img').length)
        // const image = wrapper.find('img').length;
        // expect(wrapper.find('section').length).toEqual(1);
        
        // expect(image).toEqual(1);
        // expect(1).toEqual(1);
        // const tree = renderer.create(<Login />)
        // .toJSON();
        // expect(tree).toMatchSnapshot();

        // const wrapper = shallow(<Provider store={store}>
        //     <Login /></Provider>);
        // // expect(wrapper.find('img').length).toEqual(1);
        // expect(wrapper.exists(<p>Email</p>)).toBe(true);
    })
})