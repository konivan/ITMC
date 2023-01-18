import * as React from "react";

import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const marks = [
  {
    value: 0,
  },
  {
    value: 25000,
  },
  {
    value: 50000,
  },
  {
    value: 73000,
  },
  {
    value: 99000,
  },
];

const PrettoSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid #7840B0",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },

  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#7840B0",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#f5f5f5",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 8,
    borderRadius: 100,
    "&.MuiSlider-markActive": {
      opacity: 1,
      height: 8,
      width: 8,
      backgroundColor: "#bfbfbf",
    },
  },
});

export default function MySlider({ onChange, value }) {
  return (
    <PrettoSlider
      style={{ margin: 0 }}
      onChange={onChange}
      aria-label="pretto slider"
      defaultValue={0}
      max={100000}
      marks={marks}
      value={value}
    />
  );
}
