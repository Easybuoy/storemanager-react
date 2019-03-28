import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { ViewAttendant } from '../../src/components/Attendant/ViewAttendant';

describe('<ViewAttendant />', () => {
    const props = {
        viewAttendants: jest.fn(),
        deleteAttendant: jest.fn(),
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

        it('should render salesRecord if sales array is not empty', () => {
            props.attendants.attendants = [{id: 1, name: 'iphone'}];
            const wrapper = shallow(<ViewAttendant {...props} />)

            expect(props.viewAttendants).toBeCalled();
             expect(props.viewAttendants).toHaveReturned();
            });

            it('should render Loading component if loading props is true', () => {
                props.attendants.loading = true;
                const wrapper = shallow(<ViewAttendant {...props} />)
    
                expect(props.viewAttendants).toBeCalled();
                 expect(props.viewAttendants).toHaveReturned();
                });
                
            it('should render toast if attendantDeleted props is true', () => {
                    props.attendants.attendantDeleted = true;
                    const wrapper = shallow(<ViewAttendant {...props} />)
        
                    expect(props.viewAttendants).toBeCalled();
                     expect(props.viewAttendants).toHaveReturned();
                    });
            
                    it('should call the mock deleteAttendant function', () => {
                        const wrapper = shallow(<ViewAttendant {...props} />)
                 
                        Object.defineProperty(window.confirm, 'confirm', {
                            configurable: true,
                          });
                          window.confirm = jest.fn();
                
                          
                         const id = 1;
                         sinon.spy(wrapper.instance(), 'deleteAttendant');
                         wrapper.instance().deleteAttendant(id);
                         expect(wrapper.instance().deleteAttendant.calledOnce)
                           .toEqual(true);
                        });
});