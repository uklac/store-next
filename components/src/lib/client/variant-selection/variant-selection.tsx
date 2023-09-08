'use client';
import { OptionType } from 'app/interfaces/product';
interface VariantSelectionProps {
  title: string;
  optionTypes: OptionType[];
}

export function VariantSelection(props: VariantSelectionProps) {
  const { title, optionTypes } = props;
  return (
    <div className="variant-selection">
      <h4 className="s">
        {title}
      </h4>
      <div className="option-types">
        {optionTypes.map((optionType, index) => (
          <div className="option-type" key={index}>
            {optionType.presentation}
          </div>
        ))}
      </div>
    </div>
  );
}
