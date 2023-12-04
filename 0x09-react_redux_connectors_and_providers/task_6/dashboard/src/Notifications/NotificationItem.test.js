import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem /> renders without crashing", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toBeDefined();
    });

    it("renders dummy type and value props, type='default' and value='test'", () => {
        const wrapper = shallow(<NotificationItem type='default' value='test' />);
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it("renders a dummy html prop as expected", () => {
        const wrapper = shallow(<NotificationItem html='<u>test</u>' />);
        expect(wrapper.find('li').html()).toEqual('<li data-urgent="true"><u>test</u></li>');
    });
});