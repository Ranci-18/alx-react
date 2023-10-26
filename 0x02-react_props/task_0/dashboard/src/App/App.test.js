import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App component tests", () => {
    it("Renders without crashing", () => {
        const app = shallow(<App />);
        expect(app.exists()).toBe(true);
    });
});
