import React from "react";
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).toBeDefined();
    });

    it("Renders an H1 tag", ()=> {
        expect(wrapper.find('h1')).toBeDefined();
    });

    it("Renders an img tag", ()=> {
        expect(wrapper.find('img')).toBeDefined();
    });
});