import React from "react";
// import style from "./MySelect.module.scss";

export const MySelect = ({option, defaultValue, value ,onChange}) => {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value="">{defaultValue}</option>
     {option.map(option =>
        <option key={option.value} value={option.value}>
            {option.name}
        </option>
        )}
    </select>
  ); 
};
