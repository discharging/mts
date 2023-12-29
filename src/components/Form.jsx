import * as React from "react";
import { Grid, Button, TextField, Typography } from "@mui/material";
import Logo from "./Logo";

export default function Form() {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      sx={{
        textAlign: "center",
        marginTop: { xs: "10%", md: "" },
        marginLeft: "auto",
      }}
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Grid item>
          <Typography variant="h6">Connect With us</Typography>
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            We will connect you on this number
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: "2rem",
          }}
        >
          <Button variant="contained" style={{ background: "#FF5B22" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
