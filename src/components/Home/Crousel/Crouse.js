"use client";
// import React from "react";
import React, { useState, useEffect } from 'react';

import Carousel from "react-material-ui-carousel";
// import Item from "./Item";
// import slider from "../../../Contain/slider.json";
import { WidthFull } from '@mui/icons-material';

export default function Crouse() {
  const [images, setImages] = useState([]);
  // const as='w3XiOeuE-UqP8fk0slhUKWE1lsWyZobk1TQ9Ay67VWs'

  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await(
          
        fetch('https://api.unsplash.com/photos/random?count=10&query=fashion&client_id=w3XiOeuE-UqP8fk0slhUKWE1lsWyZobk1TQ9Ay67VWs')
        );
        const data = await response.json(); // Convert response to JSON
        setImages(data); // Set images state with the fetched data
        // setImages(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    WidthFull:1
  };

  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          // marginTop: "30px", // 5
          // textAlign: "cemntr", // 4
          position:"relative",
          zIndex:"50",
          marginTop:"0px"
        },
      }}
    >
      {/* {slider.map((item) => (
        <Item key={item.id} item={item} />
      ))} */}
        {images.map(image => (
          <div className='h-[500px]  mt-[30px] flex items-center justify-center  '>
            {console.log(image.urls.regular)}
            <img src={image.urls.full} alt={image.alt_description} style={{ width: '83%' }}/>
          </div>
        ))}

    </Carousel>
  );
}
