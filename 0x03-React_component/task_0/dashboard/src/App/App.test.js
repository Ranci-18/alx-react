import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import './App.css';
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";

describe("App component tests", () => {
    it("Renders without crashing", () => {
        const app = shallow(<App />);
        expect(app.exists()).toBe(true);
    });

    it("Renders the CourseList component when isLoggedIn is true", () => {
        const app = shallow(<App isLoggedIn={true} />);
        expect(app.contains(<Login />)).toBe(false);
        expect(app.contains(<CourseList />)).toBe(false);
    });

    it("Renders the Login component when isLoggedIn is false", () => {
        const app = shallow(<App isLoggedIn={false} />);
        expect(app.contains(<Login />)).toBe(true);
        expect(app.contains(<CourseList />)).toBe(false);
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
