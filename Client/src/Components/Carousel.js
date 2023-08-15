import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import i1 from '../Images/i1.jpg'
import i2 from '../Images/i2.jpg'
import i3 from '../Images/i3.jpg'
function CarouselFadeExample() {
  const slideData = [
    {
      imageUrl: i3, caption: 'First slide label',
      },
      {
        imageUrl: i2, caption: 'First slide label',
        } ,{
          imageUrl: i1, caption: 'First slide label',
          }
  ];

  return (
    <Carousel fade>
      {slideData.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-image-container">
            <img
              className="d-block w-100"
              src={slide.imageUrl}
              alt={`Slide ${index}`}
            />
          </div>
          <Carousel.Caption>
            {/* <h3>{slide.caption}</h3> */}
            {/* <p>{slide.captionText}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
