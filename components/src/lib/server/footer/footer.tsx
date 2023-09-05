import Link from 'next/link';

interface FooterProps {
  helpfulLinks: {
    title: string;
    url: string;
  }[];
  serviceLinks: {
    title: string;
    url: string;
  }[];
  accountLinks: {
    title: string;
    url: string;
  }[];
}
export async function Footer(props: FooterProps) {
  const { helpfulLinks, serviceLinks, accountLinks } = props;

  return (
    <footer className="footer footer-dark">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="widget widget-about">
                <div className="wrap-logo">
                  <h1 className="title-logo">AI PRINT</h1>
                </div>
                {/* <img
                  src="assets/images/logo-footer.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                /> */}
                <p className="description-footer">
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat.{' '}
                </p>
                <div className="social-icons">
                  <a
                    href="https://www.instagram.com/aiprintt/"
                    className="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Enlaces útiles</h4>
                <ul className="widget-list">
                  {helpfulLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="sf-with-ul">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Servicio al Cliente</h4>
                <ul className="widget-list">
                  {serviceLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="sf-with-ul">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Mi cuenta</h4>
                <ul className="widget-list">
                  {accountLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="sf-with-ul">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2019 Molla Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
