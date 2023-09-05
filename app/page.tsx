import { ProductList } from 'components/server';
import { getProducts } from './apis/products-api';
import IconBoxes from 'components/src/lib/server/icon-boxes/icon-boxes';
import Slider from 'components/src/lib/client/slider/slider';

export default async function Index() {
  const { products } = await getProducts();
  const productsList = products.map((product) => {
    return {
      name: product.name,
      id: product.id,
      price: product.display_price,
      image: product.master.images[0],
    };
  });

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

  return (
    <>
      <Slider slides={slides}/>
      <div className="icon-boxes-container">
        <div className="container">
          <IconBoxes options={options} position="left" />
        </div>
      </div>
      <div className="container">
        <ProductList products={productsList} />
      </div>
    </>
  );
}
