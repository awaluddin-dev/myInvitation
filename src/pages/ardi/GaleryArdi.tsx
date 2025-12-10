import "./ArdiGalery.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import image1 from "./../../assets/ardiindriFoto1.jpg";
import image2 from "./../../assets/ardiindriFoto3.jpeg";
import image3 from "./../../assets/ardiindriFoto4.jpeg";
import image4 from "./../../assets/ardiindriFoto6.jpeg";
import image5 from "./../../assets/ardiindriFoto8.jpeg";
import useIntersectionObserver from "../../module/IntersectionObserver";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="sliderAllArdi">
      <div className="sliderArdi">
        <div
          onClick={prevSlide}
          className="sliderArrowArdi sliderArrowArdiLeft"
        ></div>
        <div className="wrapperSliderArdi">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="sliderardiFoto"
          />
        </div>

        <div
          onClick={nextSlide}
          className="sliderArrowArdi sliderArrowArdiRight"
        ></div>
      </div>
      <div
        className="thumbnailListWrapper"
        style={{
          transform: `translateX(${
            currentIndex <= 2 ? currentIndex * -180 + 230 : 3 * -152 + 230
          }px)`,
        }}
        // style={{ transform: `translateX(${currentIndex * 0 - 2}30px)` }}
      >
        {images.map((image, index) => (
          <div
            className={
              currentIndex === index
                ? "thumbArdifotos active"
                : "thumbArdifotos"
            }
            key={index}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={"thumbArdifoto"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function GaleryArdi() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,

    // Add more image URLs as needed
  ];
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <div className="sectionGalery" id="galeryArdi">
      <div className="secPositionHome">
        <div
          className={
            isVisible ? "secAbsolute fadeIn visible" : "secAbsolute fadeIn"
          }
        >
          <h3 className="titleGalery" ref={sectionRef}>
            Our Gallery
          </h3>
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.object,
};
