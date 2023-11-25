import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useState } from "react";

export default function NewCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ position: "relative", maxWidth: 345, marginLeft: "0.5rem" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="95%"
          height="100%"
          image="https://5.imimg.com/data5/SELLER/Default/2022/11/CN/YQ/VC/7335890/acrylic-laser-cutting-machine-250x250.jpg"
          alt="green iguana"
        />
        <CardContent
          sx={{
            position: "absolute",
            bottom: -70,
            width: "100%",
            textAlign: "center",
            background: "rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            transition: "transform 0.3s ease", // Add transition to the transform property
            transform: `translateY(${isHovered ? "-60px" : "0"})`, // Translate Y when hovered
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            sx={{ color: "white" }}
          >
            Acrylic Laser Cutting Machine
          </Typography>
          <Button variant="contained">Get Best Quota</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
