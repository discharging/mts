import { AppBar, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <AppBar sx={{ background: "black", position: "static" }}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={5}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/about">About Us</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header2;
