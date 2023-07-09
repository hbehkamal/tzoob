import "#/_styles/globals.scss";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import styles from "./page.module.scss";

export const metadata = {
  title: "Tzoob",
  description: "The assignment for Boozt company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
        {children}
        <footer className={styles["home-page-footer"]}>Footer</footer>
      </body>
    </html>
  );
}
