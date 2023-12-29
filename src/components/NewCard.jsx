import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useState } from "react";

export default function NewCard({ name, img }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: "relative",
        maxWidth: 345,
        marginLeft: "0.5rem",
        overflow: "hidden",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="95%"
          height="250px"
          image={img}
          alt="green iguana"
          sx={{
            maxHeight: 250,
          }}
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
            variant="p"
            component="div"
            sx={{ color: "white" }}
          >
            {name}
          </Typography>
          <Button variant="contained">Get Best Quota</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
