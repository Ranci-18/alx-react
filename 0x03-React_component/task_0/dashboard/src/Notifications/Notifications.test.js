import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: getLatestNotification()},
  ];

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
        const notifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(notifications.find('ul').children()).toHaveLength(listNotifications.length);
        notifications.find('ul').forEach((node) => {
            expect(node.equals(<NotificationItem />));
        });
        expect(notifications.find('ul').childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
        expect(notifications.find('ul').childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
        expect(notifications.find('ul').childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
    });

    it("menu item is being displayed when displayDrawer is false", () => {
        const notifications = shallow(<Notifications />);
        expect(notifications.find('.menuItem')).toBeDefined();
    });
});
