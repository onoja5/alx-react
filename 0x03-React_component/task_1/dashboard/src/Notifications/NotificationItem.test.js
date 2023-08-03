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