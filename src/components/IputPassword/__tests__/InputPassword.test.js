import React from 'react';
import {shallow} from 'enzyme';
import InputPassword from '../InputPassword';

describe("<InputPassword />", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<InputPassword />);

    expect(wrapper.find('.InputPassword')).toHaveLength(1);
    expect(wrapper.find('.InputPassword-Icon')).toHaveLength(1);
  });

  it("state changing is correct", () => {
    const wrapper = shallow(<InputPassword />);

    expect(wrapper.state('inputType')).toBe('password');
    wrapper.find('.InputPassword-Icon').simulate('click');
    expect(wrapper.state('inputType')).toBe('text');
    wrapper.find('.InputPassword-Icon').simulate('click');
    expect(wrapper.state('inputType')).toBe('password');
  });
});