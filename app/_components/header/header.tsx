import styles from "./header.module.scss";


const Header = () => {
  return (
    <header className={styles["home-page-header"]}>
      <ul className={styles["home-page-header--menu"]}>
        <li>Women</li>
        <li>Men</li>
        <li>Children</li>
      </ul>
      <div className={styles["home-page-header--logo"]}>
        Boozt<span>.com</span>
      </div>
      <ul className={styles["home-page-header--menu"]}>
        <li>Home</li>
        <li>Beauty</li>
        <li>Sports</li>
      </ul>
    </header>
  );
};

export default Header;
