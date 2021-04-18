import React from "react";
import PropTypes from "prop-types";

export const Input = ({ placeHolderMsg = "", inputRef }) => {
  return (
    <input
      ref={inputRef}
      placeholder={placeHolderMsg}
      aria-label="search-input"
    />
  );
};

Input.propTypes = {
  placeHolderMsg: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
};
