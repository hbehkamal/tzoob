import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["home-page-footer"]}>
      <ul className={styles["home-page-footer--menu"]}>
        <li>Women</li>
        <li>Men</li>
        <li>Children</li>
      </ul>
      <ul className={styles["home-page-footer--menu"]}>
        <li>Home</li>
        <li>Beauty</li>
        <li>Sports</li>
      </ul>
      <ul className={styles["home-page-footer--menu"]}>
        <li>Lorem</li>
        <li>Ipsum</li>
        <li>Dummy</li>
        <li>Text</li>
      </ul>
      <ul className={styles["home-page-footer--menu"]}>
        <li>Printing</li>
        <li>Typesetting </li>
        <li>Industry</li>
        <li>Standard</li>
      </ul>
    </footer>
  );
};

export default Footer;
