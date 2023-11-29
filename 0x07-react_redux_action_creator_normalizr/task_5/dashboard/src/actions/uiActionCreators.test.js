import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("uiActionCreators", () => {
    it("login returns an action with type `LOGIN` and a user", () => {
        const user = { email: "123@gmail.com", password: "123" };
        const action = login(user.email, user.password);
        expect(action).toEqual({ type: LOGIN, user: {
            email: "123@gmail.com",
            password: "123",
        } });
    })

    it("logout returns an action with type `LOGOUT`", () => {
        const action = logout();
        expect(action).toEqual({ type: LOGOUT });
    })

    it("displayNotificationDrawer returns an action with type `DISPLAY_NOTIFICATION_DRAWER`", () => {
        const action = displayNotificationDrawer();
        expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    })

    it("hideNotificationDrawer returns an action with type `HIDE_NOTIFICATION_DRAWER`", () => {
        const action = hideNotificationDrawer();
        expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    })
});