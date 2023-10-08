import { Cart } from 'components/client/cart';
import Link from 'next/link';
import { Suspense } from 'react';
import { AccountIcon } from 'components/client/account-icon';
interface HeaderProps {
  links: {
    title: string;
    url: string;
  }[];
}

export async function Header(props: HeaderProps) {
  const { links } = props;
  return (
    <header className="header  header-intro-clearance">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <p>Special collection already available.</p>
            <a href="#">&nbsp;Read more ...</a>
          </div>
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="#">Links</a>
                <ul>
                  <li>
                    <div className="header-dropdown">
                      <a href="#">USD</a>
                      <div className="header-menu">
                        <ul>
                          <li>
                            <a href="#">Eur</a>
                          </li>
                          <li>
                            <a href="#">Usd</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header-dropdown">
                      <a href="#">English</a>
                      <div className="header-menu">
                        <ul>
                          <li>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <a href="#">French</a>
                          </li>
                          <li>
                            <a href="#">Spanish</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>

            <a href="/" className="logo">
              <img
                src="/images/logo-app.png"
                alt="Aiprint Logo"
                width="105"
                height="25"
              />
            </a>
          </div>

          <div className="header-center">
            <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
              <a href="#" className="search-toggle" role="button">
                <i className="icon-search"></i>
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper search-wrapper-wide">
                  <label className="sr-only">Search</label>
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search product ..."
                    required
                  />
                  <button className="btn btn-primary" type="submit">
                    <i className="icon-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="header-right">
            <Suspense>
              <AccountIcon />
            </Suspense>
            <Cart />
          </div>
        </div>
      </div>

      <div className="sticky-wrapper">
        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-left">
              <div className="dropdown category-dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                  title="Browse Categories"
                >
                  Browse Categories
                </a>

                <div className="dropdown-menu">
                  <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows sf-js-enabled">
                      <li className="item-lead">
                        <a href="#">Daily offers</a>
                      </li>
                      <li className="item-lead">
                        <a href="#">Gift Ideas</a>
                      </li>
                      <li>
                        <a href="#">Beds</a>
                      </li>
                      <li>
                        <a href="#">Lighting</a>
                      </li>
                      <li>
                        <a href="#">Sofas &amp; Sleeper sofas</a>
                      </li>
                      <li>
                        <a href="#">Storage</a>
                      </li>
                      <li>
                        <a href="#">Armchairs &amp; Chaises</a>
                      </li>
                      <li>
                        <a href="#">Decoration </a>
                      </li>
                      <li>
                        <a href="#">Kitchen Cabinets</a>
                      </li>
                      <li>
                        <a href="#">Coffee &amp; Tables</a>
                      </li>
                      <li>
                        <a href="#">Outdoor Furniture </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows sf-js-enabled">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="sf-with-ul">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <i className="la la-lightbulb-o"></i>
              <p>
                <span className="highlight">10% descuento</span> nuevos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
