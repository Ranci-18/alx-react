/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("<App />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    })

    it("renders App-header", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".App").exists()).toEqual(true);
    })

    it("renders App-body", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".App-body").exists()).toEqual(true);
    })

    it("renders App-footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(".App-footer").exists()).toEqual(true);
    })

    it("renders <Notification />", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists()).toEqual(true);
    })

    it("renders <Header />", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).exists()).toEqual(true);
    })

    it("renders <Login />", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).exists()).toEqual(true);
    })

    it("renders <Footer />", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).exists()).toEqual(true);
    })

    it("does not render <CourseList />", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).exists()).toEqual(false);
    })
});

describe("<App /> with isLoggedIn true", () => {
    it("renders <CourseList />", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList).exists()).toEqual(true);
    })

    it("does not render <Login />", () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(Login).exists()).toEqual(false);
    })
});