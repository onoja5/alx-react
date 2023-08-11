import React from "react";
import { shallow, mount } from 'enzyme';
import {StyleSheetTestUtils} from 'aphrodite';
import Footer from './Footer';
import { AppContext } from "../App/AppContext";

describe('Footer Component', () => {

    let wrapper;
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        wrapper = shallow(<Footer />);
    });

    it("Renders without crashing", ()=> {
        expect(wrapper).exists();
    });

    it("Renders text Copyright", ()=> {
        expect(wrapper.find('Copyright')).at(0).toBeDefined();
    });
});

describe('Testing Footer context and state', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Tests that there is no link rendered when user is logged out within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			}
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Footer />
			</AppContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(0);
		expect(wrapper.find('a').exists()).toBe(false);
		expect(wrapper.text()).not.toContain('Contact us');

		wrapper.unmount();
	})

	it('Tests that there is a link rendered when user is logged in within context', () => {
		const context = {
			user: {
				email: '',
				password: '',
				isLoggedIn: true
			}
		}

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Footer />
			</AppContext.Provider>
		)

		expect(wrapper.find('a').length).toBe(1);
		expect(wrapper.find('a').exists()).toBe(true);
		expect(wrapper.text()).toContain('Contact us');

		wrapper.unmount();
	})
});