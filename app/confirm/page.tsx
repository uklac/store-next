import styles from './page.module.scss';

export default async function Confirm() {
  return (
    <div className="container">
      <div className={`${styles['confirm-step']}`}>
        <fieldset className={`${styles['confirm-step__info']}`}>
          <legend>Confirmar</legend>
        </fieldset>
      </div>
    </div>
  );
}
