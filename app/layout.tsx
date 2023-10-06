import { Footer, Header } from 'components';
import './global.scss';

export const metadata = {
  title: 'Kamura',
  description: 'Venta de productos decorativos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Productos',
      url: '/products',
    },
  ];

  const helpfulLinks = [
    {
      title: 'Sobre Aiprint',
      url: '/',
    },
    {
      title: 'Cómo comprar en Aiprint',
      url: '/',
    },
    {
      title: 'Preguntas Frecuentes',
      url: '/',
    },
    {
      title: 'Contáctenos',
      url: '/',
    },
    {
      title: 'Productos',
      url: '/',
    },
    {
      title: 'Registrarse',
      url: '/',
    },
  ];

  const serviceLinks = [
    {
      title: 'Métodos de pago',
      url: '/',
    },
    {
      title: '¡Garantía de devolución del dinero!',
      url: '/',
    },
    {
      title: 'Devoluciones',
      url: '/',
    },
    {
      title: 'Envíos',
      url: '/',
    },
    {
      title: 'Términos y condiciones',
      url: '/',
    },
    {
      title: 'Política de privacidad',
      url: '/',
    },
  ];

  const accountLinks = [
    {
      title: 'Iniciar sesión',
      url: '/account',
    },
    {
      title: 'Ver carrito',
      url: '/',
    },
    {
      title: 'Ayuda',
      url: '/',
    },
  ];
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <Header links={links} />
          <main>{children}</main>
          <Footer
            helpfulLinks={helpfulLinks}
            serviceLinks={serviceLinks}
            accountLinks={accountLinks}
          />
        </div>
      </body>
    </html>
  );
}
