import React from "react";
import { shallow } from 'enzyme';
import Notifications from './Notifications';



describe('Notification Component', () => {
    it('renders without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('renders three list items', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('li')).to.have.lengthOf(3);
    });

    it('renders text', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications). find('Here is the list of notifications').toBeDefined();
    });
})