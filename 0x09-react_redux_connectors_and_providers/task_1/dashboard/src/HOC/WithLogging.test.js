import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging", () => {
    it("console.log called on mount", () => {
        const spy = jest.spyOn(console, "log");
        const Test = () => <p>test</p>;
        const WithLoggingTest = WithLogging(Test);
        const wrapper = shallow(<WithLoggingTest />);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
    it("console.log called on unmount", () => {
        const spy = jest.spyOn(console, "log");
        const Test = () => <p>test</p>;
        const WithLoggingTest = WithLogging(Test);
        const wrapper = shallow(<WithLoggingTest />);
        wrapper.unmount();
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    });
});