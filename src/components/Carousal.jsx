import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  // Sample carousel data
  const carouselItems = [
    {
      id: 1,
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075636/2.webp",
      caption: "Acidity Problems? 14 Home Remedies That Can Help",
    },
    {
      id: 2,
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075733/6.webp",
      caption: "Simple Home Remedies For Swoll...",
    },
    {
      id: 3,
      image:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/04/17075702/3-2.webp",
      caption: "Best Home Remedies For Thick E...",
    },
  ];

  return (
    <Box mt={8}>
      <Heading as="h2" size="lg" mb={4}>
        Featured Products
      </Heading>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        swipeable
        emulateTouch
      >
        {carouselItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.caption} />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
