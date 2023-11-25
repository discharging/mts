import {
  AppBar,
  Box,
  Button,
  Grid,
  Modal,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Logo from "./Logo";
import Form from "./Form";
import { useState } from "react";
import { Call, Email } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",
  spacing: "2",
  background: "#F6F4EB",
  height: { xs: 56, sm: 64, md: 80 },
});
const StyledButtton = styled(Button)({
  background: "#FF5B22",
  color: "#F6F4EB",
  padding: "5px 10px",
  borderRadius: "30",
  fontSize: { xs: "0.8rem", sm: "1rem" },
  width: { xs: "100%", sm: "auto" },
  height: { xs: 36, sm: 40 },
  display: "flex",
  justifyContent: "space-around",
  "&:hover": {
    background: "#FF5B22", // Change this to the desired hover color
  },
});
const style = {
  position: "absolute",
  top: { xs: "40%", sm: "50%", md: "50%" },
  left: { xs: "50%", sm: "50%", md: "50%" },
  transform: "translate(-50%, -50%)",
  width: { xs: "350px", sm: "600px", md: "700px" },
  height: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: { xs: 1, sm: 4 },
};
function Layout() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar>
      <StyledToolbar>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Logo />
          </Grid>
          <Grid item xs={4}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2 }}
            >
              <StyledButtton onClick={handleOpen} startIcon={<Call />}>
                <Typography variant="body2">CALL 9821356229</Typography>
              </StyledButtton>
              <StyledButtton onClick={handleOpen} startIcon={<Email />}>
                <Typography>SEND EMAIL</Typography>
              </StyledButtton>
            </Stack>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Form />
              </Box>
            </Modal>
          </Grid>
        </Grid>
      </StyledToolbar>
    </AppBar>
  );
}
export default Layout;
