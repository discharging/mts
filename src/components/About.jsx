import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";

function About() {
  return (
    <>
      <Header />
      <Header2 />
      <Box
        sx={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Coming Soon</h3>
      </Box>
      <Footer />
    </>
  );
}

export default About;
