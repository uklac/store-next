import { Suspense } from 'react';
import {
  ProductsSkeleton,
  GridBanners,
  ProductsLatest,
  IconBoxes,
} from 'components/server';
import { Slider } from 'components';
import { LinkButton } from 'components/src/lib/server/link-button/link-button';

export default function Index() {
  const options = [
    {
      title: 'Envió Gratis',
      text: 'En ordenes de $50 o mas',
      icon: 'icon-rocket',
    },
    {
      title: '10% descuento',
      text: 'En tu primera compra',
      icon: 'icon-info-circle',
    },
    {
      title: 'Servicio al cliente',
      text: '24/7 por medio de WhatsApp',
      icon: 'icon-life-ring',
    },
  ];

  const slides = [
    {
      image: '/slider-1.jpeg',
      title: 'Dale vida a tus espacios',
      subtitle: 'Decoración',
      link: { url: '/products', text: 'Ver productos' },
    },
    {
      image: '/slider-1.jpeg',
      title: 'Dale vida a tus espacios',
      subtitle: 'Decoración',
      link: { url: '/products', text: 'Ver cuadros' },
    },
  ];

  const banners = [
    {
      image: '/slider-1.jpeg',
      title: 'Dale vida a tus espacios',
      subtitle: 'Decoración',
      link: { url: '/products', text: 'Ver productos' },
    },
    {
      image: '/slider-1.jpeg',
      title: 'Dale vida a tus espacios',
      subtitle: 'Decoración',
      link: { url: '/products', text: 'Ver cuadros' },
    },
    {
      image: '/slider-1.jpeg',
      title: 'Dale vida a tus espacios',
      subtitle: 'Decoración',
      link: { url: '/products', text: 'Ver cuadros' },
    },
  ];

  return (
    <>
      <Slider slides={slides} />
      <div className="icon-boxes-container">
        <div className="container">
          <IconBoxes options={options} position="left" />
        </div>
      </div>
      <div className="container">
        <GridBanners banners={banners} />
      </div>
      <div className="container">
        <h3 className="text-center mb-3 mt-3">Últimos Productos</h3>
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsLatest />
        </Suspense>
        <div className="more-container text-center mt-2">
          <LinkButton
            outline="primary"
            url='/products'
            text='Ver mas productos'
          />
        </div>
      </div>
    </>
  );
}
