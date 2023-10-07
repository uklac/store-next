import React from 'react'

interface Props {
  amount?: number;
}

function Skeleton(props: Props) {
  const { amount } = props
  const amountProducts = amount || 4;
  const arrayValues = Array.from(Array(amount).keys());

  return (
    <div className="products row">
      {arrayValues.map((product, index) => (
        <div className={`product-item col-lg-12`} key={index}>
          <figure className="product-media h-25 w-100">
            <img alt={''} className="product-image" src={''} />
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Skeleton
