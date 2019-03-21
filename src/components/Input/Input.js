import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.css";

export default class Input extends Component {
  render() {

    const { className, ...otherProps } = this.props;

    return (
      <input
        className="Input"
        {...otherProps}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string
};
