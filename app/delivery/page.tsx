import styles from './page.module.scss';

export default async function Delivery() {
  return (
    <div className="container">
      <div className={`${styles['delivery-step']}`}>
        <fieldset className={`${styles['delivery-step__delivery']}`}>
          <legend>Delivery</legend>

          <div className={`${styles['textarea-input']}`}>
            <label>Shipping Instructions:</label>
            <textarea
              value={''}
              // onChange={() => console.log('s')}
            />
          </div>
        </fieldset>

        <button
          className="btn btn-outline-primary-2 btn-order"
          type="submit"
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
}
