import React from "react";
import { shallow } from "enzyme";
import Input from "../Input";

describe("<Input />", function() {
  it("renders without errors", function() {
    const wrapper = shallow(<Input />);

    expect(wrapper.find(".Input")).toHaveLength(1);
    expect(wrapper.find(".Input-Form.Input-Form_withoutIcon")).toHaveLength(1);
  });

  it("renders with icon", function() {
    const wrapper = shallow(<Input icon='myIcon'/>);

    expect(wrapper.find(".Input-Form_withIcon")).toHaveLength(1);
    expect(wrapper.find(".Input-Icon").text()).toBe('myIcon');
  });
});
