import React from "react";
// import style from "./MySelect.module.scss";

export const MySelect = ({option, defaultValue, value ,setSelectedSort, setChecks, checks, reserveChecks}) => {
  return (
    <select value={value} onChange={event => {
      setSelectedSort(event.target.value);
      if (event.target.value === "Оплаченные") {
        checks = reserveChecks;
        setChecks(checks.filter((checks) =>
        checks = checks.status === 'paid'
      ))} else if (event.target.value === "Выставленные") {
        checks = reserveChecks;
        setChecks(checks.filter((checks) =>
        checks = checks.status === 'processing'
      ))
      } else if (event.target.value === "Отмененные") {
        checks = reserveChecks;
        setChecks(checks.filter((checks) =>
        checks = checks.status === 'rejected'
      ))
      } else if (event.target.value === "Сначала новые") {
        setChecks(checks = checks.sort((a, b) => {
         return a.created - b.created
        })
  )}
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
