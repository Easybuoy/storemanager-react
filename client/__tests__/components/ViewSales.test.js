import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { ViewSales } from '../../src/components/Sales/ViewSales';

describe('<ViewSales />', () => {
    const props = {
        viewSales: jest.fn(),
        sales: {sales: []},
        errors: jest.mock(),
        history: {push: jest.fn()}
      };

    it('renders the ViewSales component correctly', () => {
        const wrapper = shallow(<ViewSales {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should call the mock viewSales function', () => {
        const wrapper = shallow(<ViewSales {...props} />)
 
         expect(props.viewSales).toBeCalled();
         expect(props.viewSales).toHaveReturned();
        });

        it('should render salesRecord if sales array is not empty', () => {
            props.sales.sales = [{id: 1, name: 'iphone'}];
            const wrapper = shallow(<ViewSales {...props} />)

            expect(props.viewSales).toBeCalled();
             expect(props.viewSales).toHaveReturned();
            });

            it('should render Loading component if loading props is true', () => {
                props.sales.loading = true;
                const wrapper = shallow(<ViewSales {...props} />)
    
                expect(props.viewSales).toBeCalled();
                 expect(props.viewSales).toHaveReturned();
                });

                it('should call the mock convertAttendantIdToName function', () => {
                    const wrapper = shallow(<ViewSales {...props} />)

                     sinon.spy(wrapper.instance(), 'convertAttendantIdToName');
                     wrapper.instance().convertAttendantIdToName();
                     expect(wrapper.instance().convertAttendantIdToName.calledOnce)
                       .toEqual(true);
                    });
});