import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
    it("renders one cell with colspan=2", () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test" isHeader={true} textSecondCell={null} />);
        expect(wrapper.find("tr").childAt(0).prop("colSpan")).toEqual(2);
    })

    it("renders two cells when textSecondCell is present", () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell="test2" isHeader={true} />);
        expect(wrapper.find("th")).toHaveLength(2);
        expect(wrapper.find("th").at(0).text()).toEqual("test");
        expect(wrapper.find("th").at(1).text()).toEqual("test2");
    })

    it("renders two td elements within tr when isHeader is false", () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell="test2" isHeader={false} />);
        expect(wrapper.find("td")).toHaveLength(2);
        expect(wrapper.find("td").at(0).text()).toEqual("test");
        expect(wrapper.find("td").at(1).text()).toEqual("test2");
    })
})