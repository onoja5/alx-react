import React from "react";
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).toBeDefined();
    });

    it("Renders 2 input tags", ()=> {
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it("Renders an 2 label tags", ()=> {
        expect(wrapper.find('label')).toHaveLength(2);
    });

    it('verifies that the submit button is disabled by default', () => {
        expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
    });

    it('verifies that after changing the value of two inputs, the button is enabled', () =>{
        wrapper.find('#email').simulate('change', {target: {value: 'e'}});
        wrapper.find('#password').simulate('change', {target: {value: 'p'}});
        expect(wrapper.find("input[type-'submit']").props().disabled).toEqual(false);

    } )
});