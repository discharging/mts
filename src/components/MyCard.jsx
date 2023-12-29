import lcm from "./lcm.webp";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function MyCard() {
  return (
    <Link to="/products/1">
      <Card
        sx={{
          width: { xs: "100%", sm: 300 },
          p: { xs: 1, sm: 2 },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height={{ xs: 180, sm: 250 }} // Adjust the height based on your design
            image={lcm}
            alt="green iguana"
            sx={{ objectFit: "cover", width: "100%" }}
          />
          <Stack direction={{ xs: "column", sm: "row" }}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Laser Cutting Machine
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Laser Cutting Machine
                <br />
                Fiber Laser Cutting Machine
                <br />
                Metal Fiber Laser Cutting Machine
                <br />
              </Typography>
            </CardContent>
          </Stack>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button size="small" sx={{ color: "black" }}>
            Share
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
