import React from "react";
import getClassName from "../../services/getClassName";
import PropTypes from 'prop-types';
import "./Button.css";

/**
 * Pretty modified button
 * */

const Button = React.forwardRef(({className, size, customType, icon, children, ...otherProps}, ref) => (
    <button
      className={getClassName(
        "Button",
        size && `Button_size_${size}`,
        customType && `Button_customType_${customType}`
      )}
      ref={ref}
      {...otherProps}
    >
      {icon && (
        <span className="Button-Icon" >
          {icon}
        </span>
      )}

      {children}
    </button>

));

Button.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  type: PropTypes.oneOf(["ghost"])
};

export default Button;




