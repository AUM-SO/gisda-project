import React, { useState } from 'react';
import '../styles/ImageSlider.css';

const ImageSlider = () => {
  const images = [
    {
        id: 1,
        src: '../img/mountain2.jpg'
    },
    {
        id: 2,
        src: '../img/mountain2.jpg'
    },
    
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="slider">
      <img src={images[currentImage]} alt="Slider" />
      <button onClick={prevImage} className='Previous'>Previous</button>
      <button onClick={nextImage} className='Next'>Next</button>
    </div>
  );
};

export default ImageSlider;
