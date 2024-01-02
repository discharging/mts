import { Box, Typography } from "@mui/material";

import logo from "../assets/mtslogo.png";

function Logo() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
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
          marginLeft: { xs: 0.5, md: 2 },
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
