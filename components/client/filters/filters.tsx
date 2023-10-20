'use client';

import React from 'react';
import { Taxon } from 'interfaces';
import Link from 'next/link';

interface FiltersProps {
  taxons: Taxon[];
}

export function Filters(props: FiltersProps) {
  const { taxons } = props;

  return (
    <div className="sidebar sidebar-shop">
      <div className="widget widget-clean">
        <label>Filters:</label>
        <a href="#" className="sidebar-filter-clear">
          Clean All
        </a>
      </div>

      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-1"
            role="button"
            aria-expanded="true"
            aria-controls="widget-1"
          >
            Category
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
                      <label className="custom-control-label">
                        {taxon.name}
                      </label>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-2"
            role="button"
            aria-expanded="true"
            aria-controls="widget-2"
          >
            Size
          </a>
        </h3>
      </div>

      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-3"
            role="button"
            aria-expanded="true"
            aria-controls="widget-3"
          >
            Colour
          </a>
        </h3>
      </div>

      <div className="collapse show" id="widget-3">
        <div className="widget-body">
          <div className="filter-colors">
            <a href="#" style={{ background: '#b87145' }}>
              <span className="sr-only">Color Name</span>
            </a>
            <a href="#" style={{ background: '#f0c04a' }}>
              <span className="sr-only">Color Name</span>
            </a>
            <a href="#" style={{ background: '#333333' }}>
              <span className="sr-only">Color Name</span>
            </a>
            <a href="#" className="selected" style={{ background: '#cc3333' }}>
              <span className="sr-only">Color Name</span>
            </a>
            <a href="#" style={{ background: '#3399cc' }}>
              <span className="sr-only">Color Name</span>
            </a>
            <a href="#" style={{ background: '#669933' }}>
              <span className="sr-only">Color Name</span>
            </a>
            <a href="#" style={{ background: '#f2719c' }}>
              <span className="sr-only">Color Name</span>
            </a>
            <a href="#" style={{ background: '#ebebeb' }}>
              <span className="sr-only">Color Name</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
