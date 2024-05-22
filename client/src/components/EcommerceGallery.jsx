import React, { useState, useEffect } from 'react';

const EcommerceGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleThumbnailClick = index => {
    setCurrentImageIndex(index);
    setIsZoomed(false); // Reset zoom when changing images
  };

  const handlePreviewClick = () => {
    setIsZoomed(!isZoomed); // Toggle zoom state
  };

  const handleCloseButtonClick = () => {
    setIsZoomed(false); // Close zoomed image
  };

  useEffect(() => {
    let intervalId;
    if (!isZoomed) {
      intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds (adjust as needed)
    }
    return () => clearInterval(intervalId);
  }, [isZoomed, images.length]);

  return (
    <div className="gallery-container">
      <div className="preview-image-container">
        {isZoomed && <div className="background-mask" onClick={handleCloseButtonClick}></div>}
        {isZoomed && (
          <div className="close-button" onClick={handleCloseButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
        <img
          src={images[currentImageIndex]}
          alt={`Preview ${currentImageIndex}`}
          className={`preview-image ${isZoomed ? 'zoomed' : ''}`}
          onClick={handlePreviewClick}
        />
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`thumbnail-image ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EcommerceGallery;
