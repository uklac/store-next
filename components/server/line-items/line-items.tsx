import React from 'react';
import styles from './line-items.module.scss';

interface LineItemProps {
  order: {
    display_item_total: {
      to_html: string;
    };
    line_item_adjustments: {
      exists: () => boolean;
      promotion: {
        eligible: {
          exists: () => boolean;
          group_by: (label: string) => Array<{
            label: string;
            amount: number;
          }>;
        };
      };
    };
    shipments: {
      group_by: (name: string) => Array<{
        selected_shipping_rate: {
          name: string;
        };
        total_before_tax: number;
      }>;
    };
    all_adjustments: {
      tax: {
        exists: () => boolean;
        group_by: (label: string) => Array<{
          label: string;
          amount: number;
        }>;
      };
    };
    total_applicable_store_credit: number;
    display_total_applicable_store_credit: {
      to_html: string;
    };
    adjustments: {
      eligible: Array<{
        label: string;
        amount: number;
        source_type: string;
      }>;
    };
    display_order_total_after_store_credit: {
      to_html: string;
    };
  };
}

const LineItems: React.FC<LineItemProps> = ({ order }) => {
  return (
    <dl className={`${styles['line-items']}`}
     id="line-items">
      <div>
        <dt>Subtotal:</dt>
        <dd>{order.display_item_total.to_html}</dd>
      </div>

      {order.line_item_adjustments.exists() &&
        order.line_item_adjustments.promotion.eligible.exists() && (
          <div id="price-adjustments">
            {order.line_item_adjustments.promotion.eligible
              .group_by('label')
              .map((group, index) => (
                <div key={index}>
                  <dt>Promotion:</dt>
                  {/* <dd>{group.reduce((sum, adjustment) => sum + adjustment.amount, 0)}</dd> */}
                </div>
              ))}
          </div>
        )}

      <div id="shipment-total">
        <div>
          <dt>Shipping &mdash;:</dt>
          {/* <dd>{group.reduce((sum, shipment) => sum + shipment.total_before_tax, 0)}</dd> */}
        </div>
      </div>

      {order.all_adjustments.tax.exists() && (
        <div id="tax-adjustments">
          {order.all_adjustments.tax.group_by('label').map((group, index) => (
            <div key={index}>
              <dt>Tax:</dt>
              {/* <dd>{group.reduce((sum, adjustment) => sum + adjustment.amount, 0)}</dd> */}
            </div>
          ))}
        </div>
      )}

      {order.total_applicable_store_credit > 0.0 && (
        <div id="store-credit">
          <dt>Store Credit:</dt>
          <dd>{order.display_total_applicable_store_credit.to_html}</dd>
        </div>
      )}

      {order.adjustments.eligible.map(
        (adjustment, index) =>
          !(
            adjustment.source_type === 'Spree::TaxRate' &&
            adjustment.amount === 0
          ) && (
            <div id="order-charges" key={index}>
              <dt>{adjustment.label}</dt>
              <dd>{adjustment.amount}</dd>
            </div>
          )
      )}

      <div>
        <dt>Order Total:</dt>
        <dd>
          <strong>
            {order.display_order_total_after_store_credit.to_html}
          </strong>
        </dd>
      </div>
    </dl>
  );
};

export default LineItems;
