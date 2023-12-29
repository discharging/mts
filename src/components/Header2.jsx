import { AppBar, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
const style = {
  textDecoration: "none",
  color: "white",
};
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
          <Link to="/" style={style}>
            Home
          </Link>
          <Link to="/products" style={style}>
            Our Products
          </Link>
          <Link to="/about" style={style}>
            About Us
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header2;
