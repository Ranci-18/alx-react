const initialState = {
    notifications: [],
    filteredNotifications: [],
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTIFICATIONS':
            return {
                ...state,
                notifications: action.payload,
                filteredNotifications: action.payload,
            }
        case 'FILTER_NOTIFICATIONS':
            return {
                ...state,
                filteredNotifications: action.payload,
            }
        default:
            return state
    }
}