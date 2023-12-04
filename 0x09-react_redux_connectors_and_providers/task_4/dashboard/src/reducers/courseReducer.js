import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

const initialState = Map({
    courses: []
});

export function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return state.set('courses', action.data);
        case SELECT_COURSE:
            return state.set('selectedCourseId', action.index);
        case UNSELECT_COURSE:
            return state.delete('selectedCourseId');
        default:
            return state;
    }
}
