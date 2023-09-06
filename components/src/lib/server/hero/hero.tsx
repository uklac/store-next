import Link from 'next/link';

export interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  text?: string;
  position?: string;
  dark?: boolean;
  link: {
    url: string;
    text: string;
  };
}

export function Hero(props: HeroProps) {
  const { image, title, subtitle, text, link, position, dark } = props;
  const positionTextClass = position === 'left' ? 'text-left' : 'text-right';
  const colorTextClass = dark ? '' : 'text-white';
  
  return (
    <div
      className="intro-slide"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={`container intro-content ${positionTextClass}`}>
        <div>
          <div className="d-inline-block text-left">
            <h3 className={`intro-subtitle ${colorTextClass}`}>{subtitle}</h3>
            <h1 className={`intro-title ${colorTextClass}`} dangerouslySetInnerHTML={{ __html: title }}>
            </h1>
            <Link href={link.url} className="btn btn-dark btn-outline-darker">
              <span>{link.text}</span>
              <i className="icon-long-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
