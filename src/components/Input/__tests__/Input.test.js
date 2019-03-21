import React from "react";
import { shallow } from "enzyme";
import Input from "../Input";

describe("<Input />", function() {
  it("renders without errors", function() {
    const wrapper = shallow(<Input />);

    expect(wrapper.find(".Input")).toHaveLength(1);
  });
});
