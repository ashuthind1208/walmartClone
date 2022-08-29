//import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import {useState, useEffect} from 'react'

import SimpleImageSlider from "react-simple-image-slider";


export const WalmartCarousel = () => {
  

  const [images, setImages] = useState([])


  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async() =>{
    const data = await fetch('http://localhost:5000/carouselImages');
    const fetchImages = await data.json();
    setImages(fetchImages);
  }

  return (
      <div>

        {images.length > 0 && (
        <SimpleImageSlider
          width={1400}
          height={400}
          images={images}
          showBullets={false}
          showNavs={false}  
          autoPlay = {true} 
        />
        )}
      </div>    
  );
};
