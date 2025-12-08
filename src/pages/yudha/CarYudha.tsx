// src/CarouselComponent.jsx
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import yud1 from "./../../assets/yud1.jpeg";
import yud3 from "./../../assets/yud3.jpeg";
import yud7 from "./../../assets/yud7.jpeg";
import styled from "styled-components";

// Define the styled component outside the functional component
const CarouselContainer = styled.div`
  width: 80%; /* Adjust width as needed */
  height: 60%; /* Adjust height as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Center the container */
  overflow: hidden; /* Hide overflow */
  border-radius: 0px 50% 0px 0px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 200%; /* 200% zoom */
  height: 200%; /* 200% zoom */
  object-fit: cover;
`;

const CarYudha = () => {
  return (
    <CarouselContainer>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        interval={3000}
        transitionTime={500}
      >
        <ImageWrapper>
          <StyledImage src={yud1} alt="First Slide" />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage
            src={yud3}
            alt="Second Slide"
            style={{
              transform: "translateY(-15%)",
            }}
          />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage
            src={yud7}
            alt="Third Slide"
            style={{
              transform: "translateY(10%)",
            }}
          />
        </ImageWrapper>
      </Carousel>
    </CarouselContainer>
  );
};

export default CarYudha;
