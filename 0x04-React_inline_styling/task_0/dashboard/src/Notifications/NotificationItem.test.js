import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NotificationItem />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).toBeDefined();
    });

    it("<NotificationItem />  renders correct html by passing dummy type and value", () => {
        wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find("li").text()).toBe("test");
        expect(wrapper.find("li").prop("data-notification-type")).toBe("default");
      });
    
      it("<NotificationItem />  renders the correct html by passing a dummy html", () => {
        wrapper = shallow(<NotificationItem html="<u>test</u>" />);
        expect(wrapper.find("li").html()).toBe("<li><u>test</u></li>");
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
  });
});

describe('onclick event behaves well', () => {
  it('should call console.log', () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({value: 'test item', markAsRead: spy, id:1});
    wrapper.find('li').props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
    spy.mockRestore();

  });
});