import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
    it('renders without crashing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });

    it('renders a div with class name App-body', () => {
        const app = shallow(<App />);
        expect(app.find('.App-body')).toBeDefined();
    });

})