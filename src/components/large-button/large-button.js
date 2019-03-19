import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./large-button.css";

export default class LargeButton extends Component {
  render() {
    const { className } = this.props;

    return (
      <button className={`large-button ${className || ""}`}>
        <span>{this.props.children}</span>
      </button>
    );
  }
}

LargeButton.propTypes = {
  children: PropTypes.node.isRequired
};
