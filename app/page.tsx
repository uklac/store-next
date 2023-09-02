import Header from './components/Header';
import styles from './page.module.scss';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className="page-wrapper">
      <div className="wrapper">
        <Header></Header>
      </div>
    </div>
  );
}
