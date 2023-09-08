import { Classification } from 'app/interfaces/classification';
import Link from 'next/link';

interface ProductDetailsProps {
  name: string;
  price: string;
  description: string;
  classifications?: Classification[];
}

export function ProductDetails(props: ProductDetailsProps) {
  const { name, price, description, classifications } = props;

  const LinkToCategory = ({
    classifications,
  }: {
    classifications: Classification[];
  }) => {
    const classification =
      classifications.length > 1 ? classifications[1] : classifications[0]; //get main category
    const {
      taxon: { permalink },
    } = classification;
    const linkUrl = permalink.split('/').pop();

    return (
      <Link href={`/${linkUrl}`} className="product-category">
        Ver mas {classification.taxon.name}
      </Link>
    );
  };

  return (
    <div className="product-page__info product-details">
      <header className="product-header">
        <h1 className="product-title">{name}</h1>
        {classifications && classifications.length && (
          <LinkToCategory classifications={classifications} />
        )}
        <h2 className="product-price" id="product-price">
          {price}
        </h2>
      </header>
      <div className="product-content">
        <div className="product-page__description">
          <p className="product-content">{description}</p>
        </div>
      </div>
    </div>
  );
}
