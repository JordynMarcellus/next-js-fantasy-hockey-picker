import React from "react";

const checkbox = props => {
  return (
    <input
      onChange={event => {
        props.onChange(event.target.checked);
      }}
      checked={props.isSelected}
      type="checkbox"
    />
  );
};

checkbox.defaultProps = {
  isSelected: false,
};

export default checkbox;
