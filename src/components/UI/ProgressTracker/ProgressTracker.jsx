import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ProgressTracker = () => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#EAC600",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div style={{marginLeft: 140}}>
      <ThemeProvider theme={theme}>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            color={theme.palette.main}
            variant="determinate"
            value={100}
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
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              <img src="img/Lk/succes.svg" alt="" />
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default ProgressTracker;
