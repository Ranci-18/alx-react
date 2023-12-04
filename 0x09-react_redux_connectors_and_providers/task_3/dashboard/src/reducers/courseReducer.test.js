import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('courseReducer', () => {
    it('returns the initial state', () => {
        expect(courseReducer(undefined, {})).toEqual(Map({
            courses: []
        }));
    });

    it('handles FETCH_COURSE_SUCCESS', () => {
        const courses = [{ id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }];
        expect(courseReducer(undefined, {
            type: FETCH_COURSE_SUCCESS,
            data: courses
        })).toEqual(Map({
            courses: courses
        }));
    });

    it('handles SELECT_COURSE', () => {
        const index = 1;
        expect(courseReducer(undefined, {
            type: SELECT_COURSE,
            index: index
        })).toEqual(Map({
            selectedCourseId: index
        }));
    });

    it('handles UNSELECT_COURSE', () => {
        expect(courseReducer(undefined, {
            type: UNSELECT_COURSE
        })).toEqual(Map({}));
    });
});