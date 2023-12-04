import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom", () => {
    it("renders a BodySection component", () => {
        const wrapper = shallow(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
        );
        expect(wrapper.find(BodySection)).toHaveLength(1);
    });
    it("renders a BodySection component with correct props", () => {
        const wrapper = shallow(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
        );
        expect(wrapper.find(BodySection).props()).toEqual({
        title: "test title",
        children: <p>test children node</p>,
        });
    });
    });