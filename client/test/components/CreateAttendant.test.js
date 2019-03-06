import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { CreateAttendant } from '../../src/components/Attendant/CreateAttendant';


describe('<CreateAttendant />', () => {
    const props = {
        createAttendant: jest.fn(),
        attendants: jest.mock(),
        errors: jest.mock(),
      };

      it('renders the CreateAttendant component correctly', () => {
        const wrapper = shallow(<CreateAttendant {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

     it('should call the mock createAttendant function', () => {
       const wrapper = shallow(<CreateAttendant {...props} />)

        wrapper.find('form').simulate(
          'submit', 
          {preventDefault() {}}
        )
        expect(props.createAttendant).toBeCalled();
        expect(props.createAttendant).toHaveReturned();
       });

       it('should call the mock onChange function', () => {
        const wrapper = shallow(<CreateAttendant {...props} />)

        const event = {target: {name: "pollName", value: "spam"}};

         sinon.spy(wrapper.instance(), 'onChange');
         wrapper.instance().onChange(event);
         expect(wrapper.instance().onChange.calledOnce)
           .toEqual(true);
           expect(wrapper.instance().onChange.calledWith(event));

        });

        it('should call the mock onImageChange function', () => {
            const wrapper = shallow(<CreateAttendant {...props} />)
    
            const event = {target: {userImage: "pollName", files: "spam"}};
    
             sinon.spy(wrapper.instance(), 'onImageChange');
             wrapper.instance().onImageChange(event);
             expect(wrapper.instance().onImageChange.calledOnce)
               .toEqual(true);
               expect(wrapper.instance().onImageChange.calledWith(event));
    
            });

            it('should call the mock onSubmit function', () => {
                const wrapper = shallow(<CreateAttendant {...props} />)
        
                const event = Object.assign(jest.fn(), { preventDefault: () => {} });
        
                 sinon.spy(wrapper.instance(), 'onSubmit');
                 wrapper.instance().onSubmit(event);
                 expect(wrapper.instance().onSubmit.calledOnce)
                   .toEqual(true);
                   expect(wrapper.instance().onSubmit.calledWith(event));
                });
});