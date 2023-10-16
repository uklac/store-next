import { Footer, Header } from 'components';
import { links } from 'constant/links';
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
  
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <Header links={links.nav} />
          <main>{children}</main>
          <Footer
            helpfulLinks={links.helpfulLinks}
            serviceLinks={links.serviceLinks}
            accountLinks={links.accountLinks}
          />
        </div>
      </body>
    </html>
  );
}
