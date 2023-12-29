import Slider from "react-slick";
import "./crousal.css";
import NewCard from "./NewCard";
import products from "../../slider.json";
import { useMediaQuery } from "@mui/material";

export default function Carousal() {
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(max-width:960px)");
  const isMd = useMediaQuery("(max-width:1280px)");
  const isLg = useMediaQuery("(max-width:1920px)");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isXs ? 1 : isSm ? 2 : isMd ? 3 : isLg ? 4 : 5, // Adjust values based on your design
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {products.map((product, idx) => (
          <NewCard key={idx} name={product.name} img={product.image} />
        ))}
      </Slider>
    </div>
  );
}
