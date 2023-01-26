import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProgressTracker = ({ contractStatus }) => {
  let progress = contractStatus === undefined ? 0 : contractStatus;

  let color = progress > 80 ? "#5BC044" : progress > 20 ? "#EAC600" : "red";

  return (
    <div style={{ marginLeft: 140 }}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: "#E8E8E8",
          }}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          sx={{
            color: color,
            animationDuration: "2s",
            position: "absolute",
          }}
          variant="determinate"
          value={progress}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {progress > 99 ? (
              <img src="img/Lk/succes.svg" alt="succes" />
            ) : (
              `${progress}%`
            )}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ProgressTracker;
