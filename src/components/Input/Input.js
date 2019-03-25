import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.css";

export default class Input extends Component {
  render() {
    const { icon, className, ...otherProps } = this.props;

    let classValue = "Input-Form_withoutIcon";

    if(icon){
      classValue = "Input-Form_withIcon";
    }

    return (
      <div className="Input" >
        <div className="Input-Icon">{icon}</div>
        <input className={`Input-Form ${classValue} || ${className}`} {...otherProps}/>
      </div>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string
};
