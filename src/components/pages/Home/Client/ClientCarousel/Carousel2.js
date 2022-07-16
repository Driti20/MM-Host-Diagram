import React from "react";
import { useState } from "react";
import CarouselItem2 from "./CarouselItem2";
import CarouselControls2 from "./CarouselControls2";
import "./Carousel2.scss";
import useWindowDimensions from "./UseWindowDimensions2";
import CarouselIndicators2 from "./CarouselIndicators2";

const Carousel2 = ({ ClientData }) => {
  const { width, height } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : ClientData.length - 1;
    setCurrentSlide(index);
  };
  const next = () => {
    const index = currentSlide < ClientData.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
  const switchIndex = (index) => {
    setCurrentSlide(index)
  }

  return (
    <>
      <div className="carousel2">
        <div
          className="carousel-inner2"
          style={
            width > 1700
              ? { transform: `translateX(${-currentSlide * 1}%)` }
              : width < 1700 && width >=1350
              ? { transform: `translateX(${-currentSlide * 10}%)` }
              :width<1350 && width>1010
              ? { transform: `translateX(${-currentSlide * 30}%)` }
              :width<1010 && width>815
              ? { transform: `translateX(${-currentSlide * 45}%)` }
              :width<815 && width>690
              ? { transform: `translateX(${-currentSlide * 60}%)` }
              :width<690 && width>520
              ? { transform: `translateX(${-currentSlide * 95}%)` }
              :width<520 && width>480
              ? { transform: `translateX(${-currentSlide * 110}%)` }
              :width<480 && width>320
              ? { transform: `translateX(${-currentSlide * 127}%)` }
              : { transform: `translateX(${-currentSlide * 80}%)` }
          }
        >
          <div className="carousel-item2">
            {ClientData.map((item, i) => {
              return <CarouselItem2 item={item} key={i} />;
            })}
          </div>
        </div>
      </div>
      <CarouselControls2 prev={prev} next={next} />
      <CarouselIndicators2 ClientData={ClientData} currentIndex={currentSlide} switchIndex={switchIndex}/>
    </>
  );
};

export default Carousel2;
