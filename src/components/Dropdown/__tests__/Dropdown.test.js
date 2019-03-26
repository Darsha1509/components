import React from "react";
import { shallow, mount } from "enzyme";
import Dropdown from "../Dropdown";

describe("<Dropdown />", function() {
  it("renders without errorrs", function() {
    const wrapper = shallow(<Dropdown />);

    expect(wrapper.find("div.Dropdown.Dropdown_shadow")).toHaveLength(1);
    expect(wrapper.find(".Dropdown-SelectImage")).toHaveLength(1);
    expect(wrapper.find(".Dropdown-Select")).toHaveLength(1);
    expect(wrapper.find(".Dropdown-Icon")).toHaveLength(1);
    expect(
      wrapper.find(".Dropdown.Dropdown-Options.Dropdown_shadow")
    ).toHaveLength(1);
  });

  it("renders with data", function() {
    const wrapper = shallow(<Dropdown data={[1, 2, 3]} />);

    expect(wrapper.find(".Dropdown-Options-Item")).toHaveLength(3);
    expect(
      wrapper.find(".Dropdown-Options-Item.Dropdown-Options-Item_selected")
    ).toHaveLength(1);
    expect(
      wrapper
        .find(".Dropdown-Options-Item.Dropdown-Options-Item_selected")
        .text()
    ).toBe("1");
  });

  it("render and disappear list by click", function() {
    const wrapper = shallow(<Dropdown data={[1, 2, 3]} />);

    wrapper.find("div.Dropdown.Dropdown_shadow").simulate("click");
    expect(wrapper.find(".Dropdown-Options_show")).toHaveLength(1);
    wrapper.find("div.Dropdown.Dropdown_shadow").simulate("click");
    expect(wrapper.find(".Dropdown-Options_hide")).toHaveLength(1);
  });


  it("render and disappear list by key press", function() {
    const wrapper = shallow(<Dropdown data={[1, 2, 3]} />);

    wrapper
      .find("div.Dropdown-Select.Dropdown-Select_withoutIcon")
      .simulate("keyDown", { keyCode: 13 });
    expect(wrapper.find(".Dropdown-Options_show")).toHaveLength(1);
    wrapper
      .find("div.Dropdown-Select.Dropdown-Select_withoutIcon")
      .simulate("keyDown", { keyCode: 27 });
    expect(wrapper.find(".Dropdown-Options_hide")).toHaveLength(1);
  });


  it("renders without icon", function() {
    const wrapper = shallow(<Dropdown data={[1, 2, 3]} />);
    expect(wrapper.find(".Dropdown-Select_withoutIcon")).toBeTruthy();
  });

  it("renders with icon", function() {
    const wrapper = shallow(<Dropdown data={[1, 2, 3]} />);
    expect(wrapper.find(".Dropdown-Select_withIcon")).toBeTruthy();
  });


  it("change item style by pressing key down", function() {
    const wrapper = mount (<Dropdown data={["BMW", "LangeRover", "Mustang"]} />);

    wrapper.find("div.Dropdown-Select").simulate('click');
    expect(wrapper.find(".Dropdown-Options_show")).toHaveLength(1);
    expect(wrapper.find(".Dropdown-Options-Item_selected").text()).toBe("BMW");
    wrapper.find(".Dropdown-Options_show").simulate('keyDown', {keyCode: 40});
    expect(wrapper.find(".Dropdown-Options-Item_selected").text()).toBe("LangeRover");
  });


  it("change item style by pressing key up", function() {
    const wrapper = mount (<Dropdown data={["BMW", "LangeRover", "Mustang"]}/>);

    wrapper.find("div.Dropdown-Select").simulate('click');
    wrapper.find(".Dropdown-Options_show").simulate('keyDown', {keyCode: 40});
    wrapper.find(".Dropdown-Options_show").simulate('keyDown', {keyCode: 40});
    wrapper.find(".Dropdown-Options_show").simulate('keyDown', {keyCode: 38});
    expect(wrapper.find(".Dropdown-Options-Item_selected").text()).toBe("LangeRover");
  });

  it('choose item by click', function(){
    const wrapper = mount (<Dropdown data={["BMW", "LangeRover", "Mustang"]}/>);

    wrapper.find("div.Dropdown-Select").simulate('click');
    wrapper.find('#id_2').simulate('click');
    expect(wrapper.find("div.Dropdown-Select").text()).toBe("Mustang");
  });

  it('choose item by press Enter key', function(){
    const wrapper = mount (<Dropdown data={["BMW", "LangeRover", "Mustang"]}/>);

    wrapper.find("div.Dropdown-Select").simulate('click');
    wrapper.find(".Dropdown-Options_show").simulate('keyDown', {keyCode: 40});
    wrapper.find(".Dropdown-Options_show").simulate('keyDown', {keyCode: 13});
    expect(wrapper.find("div.Dropdown-Select").text()).toBe("LangeRover");
  });

  it('close itemsTab by press Esc key', function(){
    const wrapper = mount (<Dropdown data={["BMW", "LangeRover", "Mustang"]}/>);

    wrapper.find("div.Dropdown-Select").simulate('click');
    expect(wrapper.find(".Dropdown-Options_show")).toHaveLength(1);
    wrapper.find(".Dropdown-Options_show").simulate('keyDown', {keyCode: 27});
    expect(wrapper.find(".Dropdown-Options_hide")).toBeTruthy();
  });
});
