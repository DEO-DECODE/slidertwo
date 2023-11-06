import React, { useState } from "react";
import TrainWithUsData from "./TrainWithUsData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './App.css'
const App = () => {
  const [slide, setSlide] = useState(0);
  const prevSlide = () => {
    slide === 0 ? setSlide(TrainWithUsData.length - 1) : setSlide(slide - 1);
  };
  const nextSlide = () => {
    slide === TrainWithUsData.length - 1 ? setSlide(0) : setSlide(slide + 1);
  };
  return (
    <div className="gallery">
      <div className="gallerycarousel">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {TrainWithUsData.map((curElem) => {
          return (
            <img
              key={curElem.id}
              src={curElem.image}
              className={slide === curElem.id ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
      </div>
    </div>
  );
};

export default App;
