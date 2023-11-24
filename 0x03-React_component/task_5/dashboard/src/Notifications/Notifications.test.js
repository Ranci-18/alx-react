import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ]

describe("<Notifications />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    })

    it("renders three list items", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    })

    it("renders the right NotificationItem html", () => {
        const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
        const notificationItemWrapper = wrapper.find(NotificationItem).last();
        expect(notificationItemWrapper.prop('type')).toEqual('urgent');
        expect(notificationItemWrapper.html()).toEqual('<li data-notification-type="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>');
    })

    it("renders the correct text", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find("div p").at(1).text()).toEqual("Here is the list of notifications");
    })

    it("renders menu item when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find("div.menuItem")).toHaveLength(1);
        expect(wrapper.find("div.Notifications")).toHaveLength(0);
    })

    it("renders menu item when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find("div.menuItem")).toHaveLength(1);
        expect(wrapper.find("div.Notifications")).toHaveLength(1);
    })

    it("renders No new notifications when the list is empty", () => {
        const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(1);
    })
});