interface ProductSkeletonProps {
  columns?: 2 | 3 | 4;
  amountProducts?: number;
}

export async function ProductsSkeleton(props: ProductSkeletonProps) {
  const { columns, amountProducts } = props;

  const amount = amountProducts || 4;

  const arrayValues = Array.from(Array(amount).keys());

  const grid = {
    2: 'col-6 col-md-4 col-lg-6',
    3: 'col-6 col-md-4 col-lg-4',
    4: 'col-6 col-md-4 col-lg-3',
  };
  const gridClass = columns ? grid[columns] : grid[4];

  return (
    <div className="products row">
      {arrayValues.map((product, index) => (
        <div className={`product-item ${gridClass}`} key={index}>
          <figure className="product-media">
            <img alt={''} className="product-image" src={''} />
          </figure>
        </div>
      ))}
    </div>
  );
}
