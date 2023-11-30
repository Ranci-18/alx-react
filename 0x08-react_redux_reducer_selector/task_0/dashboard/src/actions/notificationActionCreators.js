import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => ({ type: MARK_AS_READ, index: index });

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));

export const setNotificationFilter = (filter) => ({ type: SET_TYPE_FILTER, filter: filter });

export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));