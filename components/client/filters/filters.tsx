'use client';

import React from 'react';
import { Taxon } from 'interfaces';
import Link from 'next/link';
import { Taxonomies } from 'interfaces/taxonomies';

interface FiltersProps {
  taxonomies: Taxonomies;
}

export function Filters(props: FiltersProps) {
  const { taxonomies } = props;
  console.log('taxonomies: ', taxonomies);
  const FiltersCategory = ({
    name,
    taxons,
  }: {
    name: string;
    taxons: Taxon[];
  }) => (
    <div className="widget widget-collapsible">
      <h3 className="widget-title">
        <a
          data-toggle="collapse"
          href="#widget-1"
          role="button"
          aria-expanded="true"
          aria-controls="widget-1"
        >
          {name}
        </a>
      </h3>
      <div className="collapse show" id="widget-1">
        <div className="widget-body">
          <div className="filter-items filter-items-count">
            {taxons.map((taxon, index) => (
              <Link
                key={index}
                href={`/products/category/${taxon.permalink.split('/').pop()}`}
                className="product-category"
              >
                <div className="filter-item" key={index}>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="cat-1"
                    />
                    <label className="custom-control-label">{taxon.name}</label>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="sidebar sidebar-shop">
      <div className="widget widget-clean">
        <label>Filters:</label>
        <a href="#" className="sidebar-filter-clear">
          Clean All
        </a>
      </div>
      {taxonomies?.taxonomies.map((taxonomy, index) => (
        <FiltersCategory
          key={index}
          name={taxonomy.name}
          taxons={taxonomy.root.taxons}
        />
      ))}
    </div>
  );
}
