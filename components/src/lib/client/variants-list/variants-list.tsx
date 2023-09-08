'use client';

import { OptionType, Variant } from 'app/interfaces/product';
import { VariantSelection } from '../variant-selection/variant-selection';

interface VariantsListProps {
  optionTypes: OptionType[];
  variants: Variant[];
}

export function VariantsList(props: VariantsListProps) {
  const { optionTypes, variants } = props;
  const variantsItems = optionTypes.map((optionType) => {
    return {
      title: optionType.presentation,
      optionValues: optionValues(variants, optionType),
    };
  });
  
  function optionValues(variants: any, optionType: any) {
    return variants
      .map((variant: any) =>
        variant.option_values.find(
          (optionValue: any) => optionValue.option_type_id === optionType.id
        )
      )
      .filter((optionValue: any) => optionValue !== undefined)
      .filter(
        (value: any, index: number, self: any) =>
          self.findIndex((v: any) => v.id === value.id) === index
      );
  }

  return (
    <>
      {variantsItems.map((variant, index) => (
        <VariantSelection
          key={index}
          title={variant.title}
          optionTypes={variant.optionValues}
        />
      ))}
    </>
  );
}
