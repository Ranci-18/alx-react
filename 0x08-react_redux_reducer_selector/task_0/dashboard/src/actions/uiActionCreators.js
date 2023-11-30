import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import fetch from 'node-fetch';


export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password },
    };
}

export const boundLogin = (email, password) => dispatch(login(email, password));

export function logout() {
    return {
        type: LOGOUT,
    };
}

export const boundLogout = () => dispatch(logout());

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
}

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({ type: HIDE_NOTIFICATION_DRAWER });

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

// simulating login
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch('./login-success.json');

            if (response.ok) {
                dispatch(loginSuccess())
            } else {
                dispatch(loginFailure())
            }
        } catch (error) {
            console.log(error)
            dispatch(loginFailure())
        }
    };
};