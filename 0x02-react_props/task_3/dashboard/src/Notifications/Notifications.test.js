import React from "react";
import { shallow } from 'enzyme';
import Notifications from './Notifications';



describe('Notification Component', () => {

    beforeEach(() => {
        wrapper = shallow(<Notifications />)
    })

    it('renders without crashing', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it('renders three list items', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('NotificationItem')).to.have.lengthOf(3);
    });

    it('renders text', () => {
        const notifications = shallow(<Notifications />);
        expect(notifications). find('Here is the list of notifications').toBeDefined();
    });

    it('verifies the first NotificationItem element renders the correct html', () => {
        expect(wrapper.find("NotificationItem").first().html().toEqual('<li ata-notification-type="default">New course available</li>'))
    });
})