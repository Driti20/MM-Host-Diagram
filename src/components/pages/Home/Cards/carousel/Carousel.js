import React from "react";
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import "./Carousel.scss";
import useWindowDimensions from "./UseWindowDimensions";

const Carousel = ({ cardData }) => {
  const { width, height } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : cardData.length - 1;
    setCurrentSlide(index);
  };
  const next = () => {
    const index = currentSlide < cardData.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={
            width > 1068
              ? { transform: `translateX(${-currentSlide * 20}%)` }
              : width < 1068 && width >= 520
              ? { transform: `translateX(${-currentSlide * 30}%)` }
              :width<520 && width>460
              ? { transform: `translateX(${-currentSlide * 50}%)` }
              :width<460 && width>350
              ? { transform: `translateX(${-currentSlide * 60}%)` }
              : { transform: `translateX(${-currentSlide * 80}%)` }
          }
        >
          <div className="carousel-item">
            {cardData.map((item, i) => {
              return <CarouselItem item={item} key={i} />;
            })}
          </div>
        </div>
      </div>
      <CarouselControls prev={prev} next={next} />
    </>
  );
};

export default Carousel;
