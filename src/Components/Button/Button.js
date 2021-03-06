import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
function Button(props) {
  const { onClick, className, disabled, testId } = props;

  const onButtonClick = () => {
    onClick && onClick();
  };

  return (
    <button
      className={`button ${className}`}
      disabled={disabled}
      onClick={onButtonClick}
      data-testid={testId}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  testId: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: "",
  testId: "",
};

export default Button;
