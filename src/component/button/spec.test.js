import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../Utils";
import SharedButton from "./index";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "example button text",
        emitEvent: () => {}
      };

      const propsErrors = checkProps(SharedButton, expectedProps);
      expect(propsErrors).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunc; // simulate a function
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "example button text",
        emitEvent: mockFunc
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render a button", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event", () => {
      const button = findByTestAttr(wrapper, "buttonComponent");
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
