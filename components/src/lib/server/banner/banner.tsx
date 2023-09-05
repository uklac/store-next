import Link from "next/link";

export interface BannerProps {
  image: string;
  title: string;
  subtitle?: string;
  text?: string;
  link: {
    url: string;
    text: string;
  };
}

export default function Banner(props: BannerProps) {
  const { image, title, subtitle, text, link } = props;
  return (
    <div className="banner banner-big">
      <img src={image} alt="Banner" />
      <div className="banner-content">
        <h4 className="banner-subtitle text-primary">{subtitle}</h4>
        <h3 className="banner-title text-white">
          {title}
        </h3>
        <p className="d-none d-lg-block">
          {text}
        </p>

        <Link href={link.url} className="btn btn-primary btn-rounded">
          <span>{link.text}</span>
          <i className="icon-long-arrow-right" />
        </Link>
      </div>
    </div>
  );
}
