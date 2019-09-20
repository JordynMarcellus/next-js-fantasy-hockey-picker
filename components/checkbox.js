import React from "react";

const checkbox = props => (
  <input
    onChange={event => props.onChange(!event.target.value)}
    value={props.isSelected}
    type="checkbox"
  />
);

export default checkbox;
