'use client';
import { Variant } from 'interfaces';
import styles from './variant-selection.module.scss';
import { ItemOptionValue } from '../item-option-value/item-option-value';

interface VariantSelectionProps {
  title: string;
  optionTypes: {
    name: string;
    presentation: string;
  }[];
  combinations: any[];
  onClick: (variant: any) => void;
}

const optionTypeNameToStyleClass: Record<string, string> = {
  defaultStyle: 'default-styles',
};

export function VariantSelection(props: VariantSelectionProps) {
  const { title, optionTypes, onClick, combinations } = props;
  const optionTypeName = optionTypes[0]?.name || 'defaultStyle';
  const styleClass =
    optionTypeNameToStyleClass[optionTypeName] || 'default-styles';

  return (
    <div className={`${styles['variant-selection']}`}>
      <h4 className="s">{title}</h4>
      <div className={`${styles['option-types']}`}>
        {optionTypes.map((optionType, index) => (
          <ItemOptionValue
            key={index}
            className={styles[styleClass]}
            variants={combinations[index]}
            presentation={optionType.presentation}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}
