import { uiReducer } from "./uiReducer";

describe("uiReducer", () => {
    it("verifies default state returned by reducer", () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
        });
    });
    
    it("verifies LOGIN_SUCCESS returns correct state", () => {
        const state = uiReducer(undefined, { type: "LOGIN_SUCCESS" });
        expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: true,
        user: {}
        });
    });
    
    it("verifies LOGIN_FAILURE returns correct state", () => {
        const state = uiReducer(undefined, { type: "LOGIN_FAILURE" });
        expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
        });
    });
    
    it("verifies LOGOUT returns correct state", () => {
        const state = uiReducer(undefined, { type: "LOGOUT" });
        expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
        });
    });
    
    it("verifies DISPLAY_NOTIFICATION_DRAWER returns correct state", () => {
        const state = uiReducer(undefined, { type: "DISPLAY_NOTIFICATION_DRAWER" });
        expect(state).toEqual({
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: {}
        });
    });
    
    it("verifies HIDE_NOTIFICATION_DRAWER returns correct state", () => {
        const state = uiReducer(undefined, { type: "HIDE_NOTIFICATION_DRAWER" });
        expect(state).toEqual({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
        });
    });
});