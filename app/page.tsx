import { Suspense } from 'react';
import {
  ProductsSkeleton,
  GridBanners,
  ProductsLatest,
  IconBoxes,
  LinkButton,
  SliderHero
} from 'components';

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
      image: '/slider-2.jpeg',
      title: 'Dale vida a<br /> tus espacios',
      subtitle: 'Decoración & Print Art',
      position: 'right',
      dark: true,
      link: { url: '/products', text: 'Ver productos' },
    },
    {
      image: '/slider-1.jpeg',
      title: 'Crea tu propio arte <br /> en tus paredes',
      subtitle: 'Decoración',
      position: 'left',
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
      <SliderHero slides={slides} />
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
          <div className="text-center mt-2 mb-5">
            <LinkButton
              outline="dark"
              icon="icon-long-arrow-right"
              url='/products'
              text='Ver mas productos'
            />
          </div>
        </Suspense>
      </div>
    </>
  );
}
