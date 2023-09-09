'use client';

import { OptionType, Variant } from 'interfaces';
import { VariantSelection } from '../variant-selection/variant-selection';

interface VariantsListProps {
  optionTypes: OptionType[];
  variants: Variant[];
}

export function VariantsList(props: VariantsListProps) {
  const { optionTypes, variants } = props;
  const selectedVariant = variants[0];
  console.log('selectedVariant: ', selectedVariant);
  // console.log('optionTypes: ', optionTypes);
  // console.log('variants: ', variants);
  // const mainVariante  = variants[0];

  const variantsItems = optionTypes.map((optionType) => {
    const variantOptions = options(variants, optionType);
    const combinations = getCombinations(variantOptions);
    return {
      title: optionType.presentation,
      options: variantOptions,
      combinations: combinations,
    };
  });

  function getCombinations(optionsTypes: any[]) {
    return optionsTypes.map((optionType) => {
      return {
        options: variants.filter((variant) =>
          variant.option_values.find((op) => op.id === optionType.id)
        ),
        title: optionType.presentation,
        id: optionType.id,
      };
    });
  }

  function options(variants: any, optionType: any) {
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

  function onClickVariant(optionType: OptionType) {
    console.log('selected: ', optionType);
  }

  return (
    <>
      {variantsItems.map((variant, index) => (
        <VariantSelection
          key={index}
          title={variant.title}
          optionTypes={variant.options}
          combinations={variant.combinations}
          onClick={(option) => {
            onClickVariant(option);
          }}
        />
      ))}
    </>
  );
}
