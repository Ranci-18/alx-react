import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe("notificationActionCreators", () => {
    it("markAsRead", () => {
        const result = markAsRead(1);
        expect(result).toEqual({ type: MARK_AS_READ, index: 1 });
    });
    
    it("setNotificationFilter", () => {
        const result = setNotificationFilter("DEFAULT");
        expect(result).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
    });
});