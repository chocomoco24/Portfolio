import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Navbar.module.css";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".floating-pill",
      { y: -60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.dot}>.</span>Porfolio
        </a>



        <a
          href="https://drive.google.com/file/d/1ZgRMh2SbvTeMjgj9xAVYLdBhZ_D2YLlQ/view?usp=sharing"
          className={styles.hirebtn}
        >
          resume
        </a>
      </div>
    </header>
  );
}
