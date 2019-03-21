import React from "react";
import { shallow } from "enzyme";
import LeftIconInput from '../LeftIconInput';

describe('<LeftIconInput />', () => {
  it("renders without errors", () => {
    const wrapper = shallow(<LeftIconInput />);

    expect(wrapper.find(".LeftIconInput")).toHaveLength(1);
    expect(wrapper.find(".LeftIconInput-Icon")).toHaveLength(1);
    expect(wrapper.find(".LeftIconInput-Input")).toHaveLength(1);
  });

  it("icon renders without errors", () => {
    const wrapper = shallow(<LeftIconInput icon='myIcon'/>);

    expect(wrapper.find(".LeftIconInput-Icon").text()).toEqual('myIcon');
  });
});
