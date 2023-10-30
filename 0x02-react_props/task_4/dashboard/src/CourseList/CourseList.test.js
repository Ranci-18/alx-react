import CourseList from "./CourseList";
import React from "react";
import { shallow } from "enzyme";

describe("<CourseList /> tests", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper).toBeDefined();
    });

    it("renders thead", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('thead').exists()).toBe(true);
    });

    it("renders thead children", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('thead').children()).toHaveLength(2);
        expect(wrapper.find('thead').childAt(0).html()).toEqual('<tr><th>Available courses</th><th></th></tr>');
        expect(wrapper.find('thead').childAt(1).html()).toEqual('<tr><th>Course name</th><th>Credit</th></tr>');
    });

    it("renders tbody and children", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('tbody').exists()).toBe(true);
        expect(wrapper.find('tbody').children()).toHaveLength(3);
        expect(wrapper.find('tbody').childAt(0).html()).toEqual('<tr><td>ES6</td><td>60</td></tr>');
        expect(wrapper.find('tbody').childAt(1).html()).toEqual('<tr><td>Webpack</td><td>20</td></tr>');
        expect(wrapper.find('tbody').childAt(2).html()).toEqual('<tr><td>React</td><td>40</td></tr>');
    });
});