import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import one from '../assets/images/one.png';
import two from '../assets/images/two.png';

import '@splidejs/react-splide/css';
import './Banner.css';

const Banner = () => {
  return (
    <Splide
      aria-label="Featured"
      options={{
        type: 'loop',
        autoplay: true,
        interval: 5000,
        pauseOnHover: true,
        pauseOnFocus: true,
        resetProgress: true,
        height: '400px',
      }}
      className="banner-carousel"
    >
      <SplideSlide>
        <a>
          <img src={one} />
        </a>
      </SplideSlide>
      <SplideSlide>
        <a>
          <img src={two} />
        </a>
      </SplideSlide>
    </Splide>
  );
};

export default Banner;
