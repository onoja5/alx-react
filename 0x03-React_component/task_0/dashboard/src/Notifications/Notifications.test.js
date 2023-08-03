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

    it("<Notifications /> renders NotificationItems", () => {
        wrapper.setProps({displayDrawer: true});
        expect(wrapper.find('NotificationItem')).not.toHaveLength(0);
      });
    
      it("<Notifications /> render the text 'Here is the list of notifications'", () => {
        wrapper.setProps({displayDrawer: true});
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
      });
    
      it("verify that the first NotificationItem element renders the right html", () => {
        wrapper.setProps({displayDrawer: true});
        expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
      });
    
      it("menu item is being displayed when displayDrawer is false", () => {
        expect(wrapper.find('.menuItem')).toHaveLength(1);
      });
    
      it("div.Notifications is not being displayed when displayDrawer is false", () => {
        expect(wrapper.find('.Notifications')).toHaveLength(0);
      });
});

describe('Testing <Notification /> ', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications displayDrawer={true}/>);
    });
    it ('menu item is being displayed when displayDrawer is true', () => {
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });
    it ('div.Notifications is being displayed when displayDrawer is true', () => {
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    })
});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
  let wrapper;
  const listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
  ];

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual('New course available');
  });
});