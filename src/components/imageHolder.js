import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const ImageHolder = ({ src, width, height, style }) => {
  const [image, setImage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(() => {});

  function asyncImageLoader(url) {
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.src = url;
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('could not load image'));
    });
  }

  useEffect(() => {
    async function loadImage() {
      try {
        const res = await asyncImageLoader(src);
        width && (res.style.width = width);
        height && (res.style.height = height);
        setImage(res);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    loadImage();
  }, [setIsLoading, setImage, setError]);

  if (isLoading) {
    return (
      <ContentLoader>
        <rect x="14" y="20" rx="5" ry="5" width="173" height="150" />
      </ContentLoader>
    );
  }

  if (error) {
    return <img style={style} alt={'something'} src={`https://via.placeholder.com/${width || 70}x${height || 70}`} />;
  }

  return (
    <div
      style={{ ...style, display: 'flex', justifyContent: 'center' }}
      ref={nodeElement => {
        nodeElement && nodeElement.appendChild(image);
      }}
    />
  );
};

export default ImageHolder;
