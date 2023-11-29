import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("courseActionCreators", () => {
    it("selectCourse returns an action with type `SELECT_COURSE` and an index", () => {
        const index = 1;
        const action = selectCourse(index);
        expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
    })
    
    it("unSelectCourse returns an action with type `UNSELECT_COURSE` and an index", () => {
        const index = 1;
        const action = unSelectCourse(index);
        expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
    })
});