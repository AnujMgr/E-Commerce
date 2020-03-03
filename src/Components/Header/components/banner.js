import React from "react";
import { Fade } from "react-slideshow-image";

const Banner = () => {
  const fadeImages = [
    "/images/shoe.jpeg",
    "/images/shoe2.jpeg",
    "/images/shoe3.jpeg"
  ];

  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false
    // onChange: (oldIndex, newIndex) => {
    //   console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    // }
  };
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="sdf" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="sdf" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="sdf" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
