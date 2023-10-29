import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

describe("Notificatioins component test", () => {
    it("renders without crashing", () => {
        const notifications = shallow(<Notifications />);
        expect(notifications).toBeDefined();
    });

    it("renders ul", () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find("ul")).toBeDefined();
    });

    it("renders <NotificationItem /> with the right html", () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('ul').children()).toHaveLength(3);
        expect(notifications.find('ul').childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
        expect(notifications.find('ul').childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
        expect(notifications.find('ul').childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
    })

    it("renders three list items", () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find(NotificationItem)).toHaveLength(3);
    });

    it ("renders the text 'Here is the list of notifications'", () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find("p").text()).toBe("Here is the list of notifications");
    });
});
