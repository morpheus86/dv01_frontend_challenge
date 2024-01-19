import React, { forwardRef } from "react";

// ForwardRef hook let me access the ref passed to the dropDown component in DropDownFilter
const DropDown = forwardRef(({ title, options, option }, ref) => {
  return (
    <select name={title} ref={ref} onChange={option}>
      <option defaultValue={title}>{title}</option>
      {options &&
        options.map((val) => {
          return (
            <option value={val} key={val}>
              {val}
            </option>
          );
        })}
    </select>
  );
});

export default DropDown;
