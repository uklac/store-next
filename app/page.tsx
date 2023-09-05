import IconBoxes from 'components/src/lib/server/icon-boxes/icon-boxes';
import Slider from 'components/src/lib/client/slider/slider';
import ProductsLatest from 'components/src/lib/server/products-latest/products-latest';
import GridBanners from 'components/src/lib/server/grid-banners/grid-banners';

export default async function Index() {
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
      <Slider slides={slides}/>
      <div className="icon-boxes-container">
        <div className="container">
          <IconBoxes options={options} position="left" />
        </div>
      </div>
      <div className="container">
        <GridBanners banners={banners}/>
      </div>
      <div className="container">
        <ProductsLatest />
      </div>
    </>
  );
}
