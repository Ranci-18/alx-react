import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("loginRequest", () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it("loginRequest returns an action with type `LOGIN_SUCCESS`", () => {
        const store = mockStore({});

        fetchMock.postOnce('/login-success.json', {
            body: { email: '123@gmail.com', password: '123' },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: LOGIN_SUCCESS }
        ];

        return store.dispatch(loginRequest('example.com', '123'));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("loginRequest returns an action with type `LOGIN_FAILURE`", () => {
        const store = mockStore({});
        fetchMock.postOnce('/login-success.json', {
            body: { email: 'example.com', password: '123' },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: LOGIN_FAILURE }
        ];

        return store.dispatch(loginRequest('example.com', '123'));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
        
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