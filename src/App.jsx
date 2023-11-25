import { createRoot } from "react-dom/client";
import { Box, Stack, Typography } from "@mui/material";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";

const App = () => {
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
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
