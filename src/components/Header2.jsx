import { AppBar, Link, Stack, Toolbar } from "@mui/material";

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
          <Link underline="none" href="/">
            Home
          </Link>
          <Link underline="none" href="/products">
            Our Products
          </Link>
          <Link underline="none" href="/about">
            About Us
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header2;
