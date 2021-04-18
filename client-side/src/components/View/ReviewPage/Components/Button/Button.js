import React from "react";
import PropTypes from "prop-types";

export const Button = ({ text = "", clickPage }) => {
  return <button onClick={clickPage}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  clickPage: PropTypes.func
};
