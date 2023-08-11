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

describe("Testing markAsRead method in the notification class Component", () => {
  it("Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = mount(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const mock = jest.spyOn(console, 'log');
    const noti = wrapper.find('li').first();
    noti.simulate('click');
    expect(mock).toBeCalledWith("Notification 1 has been marked as read");
    mock.mockRestore();
    jest.restoreAllMocks();
  });
});

describe("Testing the notification class Component re-rendering", () => {
  it("verify that when updating the props of the component with the same list, the component doesnt rerender", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    const listNotifications2 = [
      {id: 1, value: "New course available changed", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    wrapper.setProps({listNotifications: listNotifications});
    expect(wrapper.find('NotificationItem').length).toBe(3);
    expect(wrapper.find('NotificationItem').first().props().value).toEqual("New course available");
  });

  it("verify that when updating the props of the component with a longer list, the component does rerender", () => {
    const listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    const listNotifications2 = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New course available2", type: "default"},
      {id: 3, value: "New resume available", type: "urgent"},
      {id: 4, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
    console.log = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    wrapper.setProps({listNotifications: listNotifications2});
    expect(wrapper.find("NotificationItem").at(1).props().value).toEqual("New course available2");
    expect(wrapper.find("NotificationItem").length).toBe(4);
  });
});

describe("Testing Notification display of notifications ", () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(<Notifications handleDisplayDrawer={jest.fn()} handleHideDrawer={jest.fn()}/>);
  });

  it("verify that clicking on the menu item calls handleDisplayDrawer", () => {
    (wrapper.find('div').at(0)).simulate('click');
    expect(wrapper.props().handleDisplayDrawer).toBeCalled();
  });

  it("verify that clicking on the button calls handleHideDrawer", () => {
    wrapper.setProps({displayDrawer: true});
    (wrapper.find('button').at(0)).simulate('click');
    expect(wrapper.props().handleHideDrawer).toBeCalled();
  });
});