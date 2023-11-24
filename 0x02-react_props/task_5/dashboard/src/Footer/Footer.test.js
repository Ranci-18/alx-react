import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("<Footer />", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    })

    it("renders the correct text", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find("p").text()).toEqual("Copyright 2023 - Holberton School main dashboard");
    })
});