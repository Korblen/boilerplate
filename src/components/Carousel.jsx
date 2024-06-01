import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.scss';

const CarouselComponent = () => {
  return (
    <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="path/to/your/image1.jpg" alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="path/to/your/image2.jpg" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="path/to/your/image3.jpg" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
