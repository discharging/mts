import Slider from "react-slick";
import "./crousal.css";
import CarouselCard from "./CarouselCard";
import products from "../../slider.json";
import { useMediaQuery } from "@mui/material";

export default function Carousal() {
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(max-width:960px)");
  const isMd = useMediaQuery("(max-width:1280px)");
  const isLg = useMediaQuery("(max-width:1920px)");
  const settings = {
    infinite: true,
    slidesToShow: isXs ? 1 : isSm ? 2.5 : isMd ? 2.5 : isLg ? 3.5 : 3.5, // Adjust values based on your design
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 6000,
    cssEase: "ease",
    pauseOnHover: true,
  };
  return (
    <div className="bg-blue-500 p-7 ">
      <Slider {...settings}>
        {products.map((product) => (
          <CarouselCard
            key={product.id}
            name={product.name}
            img={product.image}
          />
        ))}
      </Slider>
    </div>
  );
}
