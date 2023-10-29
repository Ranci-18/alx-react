import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import './App.css';

describe("App component tests", () => {
    it("Renders without crashing", () => {
        const app = shallow(<App />);
        expect(app.exists()).toBe(true);
    });

    it("Renders the Login component", () => {
        const app = shallow(<App />);
        expect(app.find("Login")).toBeDefined();
    });

    it("renders the Footer component", () => {
        const app = shallow(<App />);
        expect(app.find("Footer")).toBeDefined();
    });

    it("renders the Header component", () => {
        const app = shallow(<App />);
        expect(app.find("Header")).toBeDefined();
    });

    it("renders the Notifications component", () => {
        const app = shallow(<App />);
        expect(app.find("Notifications")).toBeDefined();
    });
});
