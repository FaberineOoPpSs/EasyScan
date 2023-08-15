import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
function CarouselFadeExample() {
  const slideData = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1682687220211-c471118c9e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      caption: 'First slide label',
      captionText: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      imageUrl: 'https://plus.unsplash.com/premium_photo-1691960547805-7143654bd06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      caption: 'Second slide label',
      captionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1691853533232-78d352cf6d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      caption: 'Third slide label',
      captionText: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
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
            <h3>{slide.caption}</h3>
            {/* <p>{slide.captionText}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
