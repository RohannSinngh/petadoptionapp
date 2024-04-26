import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../HomeCarousel/ImageSlider.css"; // Optional: Custom styles for the slider

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto play speed in milliseconds (3 seconds in this case)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Sample image URLs
  const images = [
    "https://lotus-pet-foods.s3.us-west-1.amazonaws.com/Landing+Page/keep-it-raw.jpg",
    "https://lotus-pet-foods.s3.us-west-1.amazonaws.com/Landing+Page/oct-banner/treats-banner.jpg",
    "https://i.insider.com/65f325fa3037f8e817506b61?width=1000&format=jpeg&auto=webp",
  ];

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt={"Slide ${index + 1}"}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
