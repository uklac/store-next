import { Variant } from 'interfaces';
import React from 'react';

interface Props {
  onClick: (variants: any) => void;
  presentation: string;
  variants: Variant[];
  className: string;
}

export function ItemOptionValue(props: Props) {
  const { presentation, onClick, variants, className } = props;
  return (
    <div className={className} onClick={() => onClick(variants)}>
      {presentation}
    </div>
  );
}
