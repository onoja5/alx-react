import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).toBeDefined();
    });

    it("Renders an Notifications", ()=> {
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it("Renders an Header", ()=> {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it("Renders an Login", ()=> {
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it("Renders an Login", ()=> {
        expect(wrapper.find('Login')).toHaveLength(1);
    });
});