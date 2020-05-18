import React from "react";
import "./Button.css";
function Button(props) {
  const { onClick, className, disabled } = props;
  const onButtonClick = () => {
    onClick && onClick();
  };
  return (
    <button
      className={`button ${className}`}
      disabled={disabled}
      onClick={onButtonClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
