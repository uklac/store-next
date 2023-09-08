'use client';
import { ImageAttribute } from 'interfaces';
import { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';

interface PickImageProductProps {
  productImages: ImageAttribute[];
}

export function PickImageProduct(props: PickImageProductProps) {
  const { productImages } = props;
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const handleImageChange = (newImage: ImageAttribute) => {
    setSelectedImage(newImage);
  };
  return (
    <div className="product-gallery product-gallery-vertical">
      <div className="row">
        <div className="product-main-image ml-5">
          <picture className="product-image">
            <div style={{ marginBottom: '30px' }}>
              <InnerImageZoom
                src={selectedImage.product_url}
                zoomSrc={selectedImage.large_url}
                fullscreenOnMobile={false}
              />
              {/* <img src={selectedImage.product_url} /> */}
            </div>
          </picture>
        </div>
        <div className="product-zoom-gallery">
          <ul className="product-thumbnails">
            {productImages.map((image: ImageAttribute, index: number) => (
              <li
                className="product-thumbnails__all"
                key={index}
                onClick={() => handleImageChange(image)}
              >
                <img src={image.mini_url} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
