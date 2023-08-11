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
});