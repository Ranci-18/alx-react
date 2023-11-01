/**
 *  @jest-environment jsdom
 */
import 'text-encoding';
import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
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

describe("when ctrl+h key are pressed", () => {
    const logOut = jest.fn();
    const app = mount(<App logOut={logOut} />);
    it("verify that the logOut function is called", () => {
        const spy = jest.spyOn(app.instance(), "logOut");
        app.instance().forceUpdate();
        const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
        document.dispatchEvent(event);
        expect(spy).toHaveBeenCalled();
        expect(logOut).toHaveBeenCalled();
        spy.mockRestore();
    });
});
