import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousell() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      // Increment the active slide or reset to 0 if it reaches the last slide
      setActiveSlide((prevSlide) =>
        prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Change the interval value as needed (in milliseconds)

    // Cleanup the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  const slideData = [
    {
      image:
        "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 2",
    },
    {
      image:
        "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFydHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Slide 3",
    },
  ];
  return (
    <Carousel
      selectedItem={activeSlide}
      onChange={handleSlideChange}
      showThumbs={false}
      className="lg:mt-[-500px] "
    >
      {slideData.map((slide, index) => (
        <div key={index}>
          <img className="w-full h-full" src={slide.image} alt={slide.alt} />
        </div>
      ))}
    </Carousel>
  );
}

export default Carousell;
