import React from "react";
// import style from "./MySelect.module.scss";

export const MySelect = ({option, defaultValue, value ,setSelectedSort}) => {
  return (
    <select value={value} onChange={event => {
      setSelectedSort(event.target.value)
    }}>
      <option disabled value="">{defaultValue}</option>
     {option.map(option =>
        <option key={option.value} value={option.value}>
            {option.name}
        </option>
        )}
    </select>
  ); 
};
