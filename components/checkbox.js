import React from "react";

const checkbox = props => {
  console.log(props.isSelected);
  console.log(typeof props.isSelected);
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
