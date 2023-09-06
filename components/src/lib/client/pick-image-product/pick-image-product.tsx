'use client';
import { ImageAttribute } from 'app/interfaces/image';
import { useState } from 'react';

interface PickImageProductProps {
  productImages: ImageAttribute[];
}

export default function PickImageProduct(props: PickImageProductProps) {
  const { productImages } = props;
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const handleImageChange = (newImage: ImageAttribute) => {
    setSelectedImage(newImage);
  };
  return (
    <div className="product-page-row col-md-6">
      <div className="product-page__images product-gallery product-gallery-vertical">
        <div className="row">
          <div className="product-main-image ml-5">
            <picture className="product-image">
              <img src={selectedImage.product_url} />
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
    </div>
  );
}
