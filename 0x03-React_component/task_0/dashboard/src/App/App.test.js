import React from "react";
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).toBeDefined();
    });

    it("Renders an Notifications", ()=> {
        expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it("Renders an Header", ()=> {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it("Renders an Login", ()=> {
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it("Renders an Login", ()=> {
        expect(wrapper.find('Login')).toHaveLength(1);
    });


  it('test to check that CourseList is not displayed inside App', () => {
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("Testing <App isLoggedIn={true} />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true}/>);
  });

  it("the Login component is not included", () => {
    expect(wrapper.find('Login')).toHaveLength(0);
  });

  it("the CourseList component is included", () => {
    expect(wrapper.find('CourseList').exists());
  });

});