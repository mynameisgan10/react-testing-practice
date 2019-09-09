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
    beforeEach(() => {
      const props = {
        buttonText: "example button text",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render a button", () => {
        const button = findByTestAttr(wrapper, 'buttonComponent');
        expect(button.length).toBe(1)
    });
  });
});
