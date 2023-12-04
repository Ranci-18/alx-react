import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("test for CourseListRow", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<CourseListRow textFirstCell="some text" />);
        expect(wrapper.exists()).toBe(true);
    });

    it("renders one <th> with colspan=2 when isHeader is true textSecondCell is null", () => {
        const wrapper = shallow(<CourseListRow
                                isHeader={true}
                                textFirstCell="text"
                                textSecondCell={null} />
                                );
        expect(wrapper.find("tr").children()).toHaveLength(1);
        expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2">text</th>');
    });

    it("renders two <th> when isHeader is true and textSecondCell is not null", () => {
        const wrapper = shallow(<CourseListRow
                                isHeader={true}
                                textFirstCell="some text"
                                textSecondCell="some other text" />
                                );
        expect(wrapper.find("tr").children()).toHaveLength(2);
        expect(wrapper.find("tr").childAt(0).html()).toEqual('<th>some text</th>');
        expect(wrapper.find("tr").childAt(1).html()).toEqual('<th>some other text</th>');
    });

    it("renders two <td> when isHeader is false", () => {
        const wrapper = shallow(<CourseListRow 
                                isHeader={false}
                                textFirstCell="some text"
                                textSecondCell="some other text" />
                                );
        expect(wrapper.find("tr").children()).toHaveLength(2);
        expect(wrapper.find("tr").childAt(0).html()).toEqual('<td>some text</td>');
        expect(wrapper.find("tr").childAt(1).html()).toEqual('<td>some other text</td>');
    });
});