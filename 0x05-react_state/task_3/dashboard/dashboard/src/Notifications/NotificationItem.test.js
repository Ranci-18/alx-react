import React from "react";
import NotificationItem from "./NotificationItem";
import { shallow } from "enzyme";

describe("<NotificationItem />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toEqual(true);
    })

    it("renders the correct type and value", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.html()).toContain('data-notification-type="default"');
        expect(wrapper.text()).toEqual("test");
    })

    it("renders the correct html", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
        expect(wrapper.html()).toContain("<u>test</u>");
    })
})