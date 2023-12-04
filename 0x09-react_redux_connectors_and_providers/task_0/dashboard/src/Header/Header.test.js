import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';
import logo from '../assets/holberton-logo.jpg';


describe("Header tests", () => {
    it("renders without crashing", () => {
        const header = shallow(<Header />);
        expect(header.exists()).toEqual(true);
    });
    
    it("renders img tag", () => {
        const wrapper = shallow(<Header />);
        const img = wrapper.find("img");
        expect(img).toHaveLength(1);
        expect(wrapper.exists("img")).toEqual(true);
    });
    
    it("has correct h1 and text", () => {
        const wrapper = shallow(<Header />);
        const h1 = wrapper.find("h1");
        expect(h1).toHaveLength(1);
        expect(h1.text()).toEqual("School dashboard");
    });
});