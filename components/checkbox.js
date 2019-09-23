import React from "react";

const checkbox = props => {
  return (
    <input
      onChange={event => {
        const value = event.target.value === "on" ? true : false;
        props.onChange(value);
      }}
      checked={props.isSelected}
      type="checkbox"
    />
  );
};

export default checkbox;
