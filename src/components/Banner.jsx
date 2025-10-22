import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Banner.css';

const Banner = () => {
  const [validImages, setValidImages] = useState([]);

  // Image URLs
  const imageUrls = [
    'https://sadseditor-production.up.railway.app/uploads/banner1.jpg',
    'https://sadseditor-production.up.railway.app/uploads/banner2.jpg',
    'https://sadseditor-production.up.railway.app/uploads/banner3.jpg',
  ];

  useEffect(() => {
    const checkImages = async () => {
      const results = await Promise.all(
        imageUrls.map(
          (url) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = url;
              img.onload = () => resolve(url); // valid
              img.onerror = () => resolve(null); // broken
            })
        )
      );
      setValidImages(results.filter(Boolean)); // remove nulls
    };

    checkImages();
  }, []);

  if (validImages.length === 0) return null; // no valid banners

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
      {validImages.map((url, i) => (
        <SplideSlide key={i}>
          <a>
            <img src={url} alt={`Banner ${i + 1}`} />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Banner;
