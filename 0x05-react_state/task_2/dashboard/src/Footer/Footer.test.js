import React from "react";
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).toBeDefined();
    });

    it("Renders text Copyright", ()=> {
        expect(wrapper.find('Copyright')).at(0).toBeDefined();
    });
});