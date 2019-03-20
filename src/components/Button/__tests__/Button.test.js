import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<Button>Default</Button>);

    expect(wrapper.find(".Button")).toHaveLength(1);
    expect(wrapper.text('Default')).toBeTruthy();
  });

  it("renders with icon", () => {
    const icon = <svg className="icon" />;
    const wrapper = shallow(<Button icon={icon} />);

    expect(wrapper.contains(<span className="Button-Icon">
      {icon}
      </span>)).toBeTruthy();
  });

  it("renders with dependencies", () => {
    const wrapper = shallow(<Button size="small" customType="ghost" />);

    expect(
      wrapper.hasClass("Button_customType_ghost")
    ).toBeTruthy();

    expect(
      wrapper.hasClass("Button_size_small")
    ).toBeTruthy();
  });

});
