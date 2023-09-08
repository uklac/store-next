'use client';
import { OptionType } from 'app/interfaces/product';
import styles from "./variant-selection.module.scss";

interface VariantSelectionProps {
  title: string;
  optionTypes: OptionType[];
}

const optionTypeNameToStyleClass: Record<string, string> = {
  defaultStyle: 'default-styles',
};

export function VariantSelection(props: VariantSelectionProps) {
  const { title, optionTypes } = props;
  const optionTypeName = optionTypes[0]?.option_type_name || 'defaultStyle';
  const styleClass = optionTypeNameToStyleClass[optionTypeName] || 'default-styles';

  return (
    <div className={`${styles['variant-selection']}`}>
      <h4 className="s">
        {title}
      </h4>
      <div className={`${styles['option-types']}`}>
        {optionTypes.map((optionType, index) => (
          <div className={`${styles[styleClass]}`} key={index}>
            {optionType.presentation}
          </div>
        ))}
      </div>
    </div>
  );
}
