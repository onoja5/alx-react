import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {

    it('renders a div with class name App-header', () => {
        const app = shallow(<App />);
        expect(app.find('.App-header')).toBeDefined();
    });
})