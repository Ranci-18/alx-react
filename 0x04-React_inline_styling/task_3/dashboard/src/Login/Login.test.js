import Login from "./Login";
import React from "react";
import { shallow } from "enzyme";

describe("Login component tests", () => {
    it("Renders without crashing", () => {
        const login = shallow(<Login />);
        expect(login.exists()).toBe(true);
    });

    it("Renders two input tags", () => {
        const login = shallow(<Login />);
        expect(login.find("input")).toHaveLength(2);
    });

    it("Renders two label tags", () => {
        const login = shallow(<Login />);
        expect(login.find("label")).toHaveLength(2);
    });
});