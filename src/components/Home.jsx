import { Box, Stack, Typography } from "@mui/material";
import Header from "./Header";
import Header2 from "./Header2";
import MyCard from "./MyCard";
import Footer from "./Footer";
import Carousal from "./Carousal";

function Home() {
  return (
    <Box>
      <Header />
      <Header2 />
      <Carousal />
      <Box>
        <Typography
          variant="h3"
          margin={{ xs: 2, md: 5 }}
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Our Products
        </Typography>
      </Box>
      <Stack
        display="flex"
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2 }}
      >
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </Stack>
      <Footer />
    </Box>
  );
}
export default Home;
