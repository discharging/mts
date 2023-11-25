import { Box, Typography } from "@mui/material";

import logo from "./mtslogo.png";

function Logo() {
  return (
    <Box display="flex" alignItems="center">
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          height: { xs: 40, md: 50 },
          width: { xs: 40, md: 50 },
        }}
      />

      <Typography
        variant="h6"
        sx={{
          marginLeft: { xs: 1, md: 2 },
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: "blue",
        }}
      >
        Machine Tech Solution
      </Typography>
    </Box>
  );
}

export default Logo;
