import { portfolioData } from "../data/portfolio";
import styles from "./Footer.module.css";

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.left}>
          <span className={styles.logo}>
            <span className={styles.dot}>.</span>Portfolio
          </span>
          <span className={styles.copy}>
            © {year} {personal.name}. All rights reserved. //  Built with ❤️ by CHOCOMOCO
          </span>
        </div>
      </div>
    </footer>
  );
}
