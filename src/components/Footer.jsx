import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          py: 4, // Padding on the y-axis
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" color="blue" textAlign="center">
            Machine Tech Solution
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6">About Us</Typography>
            <Typography>Aim</Typography>
            <Typography>Vision</Typography>
            <Typography>Testimonials</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6">Services</Typography>
            <Typography>Writing</Typography>
            <Typography>Internship</Typography>
            <Typography>Coding</Typography>
            <Typography>Teaching</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>Mumbai</Typography>
            <Typography>Uttar Pradesh</Typography>
            <Typography>Ahemdabad</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Typography variant="h6">Social Media</Typography>
            <Typography>Facebook</Typography>
            <Typography>Instagram</Typography>
            <Typography>YouTube</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="caption"
            color="white"
            textAlign="center"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ©Machine Tech Solution. All Rights Reserved (Terms of Use)
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
