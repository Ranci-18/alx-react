import Footer from './Footer';
import React from 'react';
import { shallow } from 'enzyme';
import { getFooterCopy, getFullYear } from '../utils/utils';

describe("Footer tests", () => {
    it("renders without crashing", () => {
        const footer = shallow(<Footer />);
        expect(footer.exists()).toEqual(true);
    });
    
    it("render the text 'Copyright'", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find("p").text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
});