import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });

    it('renders a div with class name App-header', () => {
        const app = shallow(<App />);
        expect(app.find('.App-header')).toBeDefined();
    });

    it('renders a div with class name App-body', () => {
        const app = shallow(<App />);
        expect(app.find('.App-body')).toBeDefined();
    });

    it('renders a div with class name App-footer', () => {
        const app = shallow(<App />);
        expect(app.find('.App-footer')).toBeDefined();
    });
})