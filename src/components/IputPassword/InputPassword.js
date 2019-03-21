import React, { Component } from "react";
import Input from "../Input/index";
import { eye } from "../icons";

import "./InputPassword.css";

export default class InputPassword extends Component {
  constructor() {
    super();

    this.state = {
      inputType: "password"
    };

    this.changeType = () => {
      this.setState(({ inputType }) => {
        return inputType === "password"
          ? {inputType: "text"}
          : {inputType: "password"};
      });
    };
  }

  render() {
    const { ...otherProps } = this.props;

    const { inputType } = this.state;

    return (
      <div className="InputPassword"  >
        <Input type={inputType}  {...otherProps}/>
        <div className="InputPassword-Icon" onClick={this.changeType}>
          {eye}
        </div>
      </div>
    );
  }
}
