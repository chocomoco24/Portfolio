import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/portfolio";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ active = false }: { active?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-el",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const { personal } = portfolioData;

  return (
    <section id="contact" ref={sectionRef} className={`${styles.contact} section`}>
      <div className="container">
        <div className="section-header">
          <span className={`section-label ${active ? "active" : ""}`}>Contact</span>
          <div className="section-line" />
        </div>

        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} contact-el`}>
              Let's build<br />
              <span className={styles.headingAccent}>something</span>
            </h2>
            <p className={`${styles.sub} contact-el`}>
              I'm open to full-time roles, internships, and freelance projects.
              Reach out and let's talk.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className={`${styles.emailLink} contact-el`}
            >
              {personal.email}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9.5 4.5L13 8l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className={styles.right}>
            <div className={`${styles.linksGrid} contact-el`}>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className={styles.socialCard}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className={styles.socialLabel}>GitHub</span>
                <span className={styles.socialHandle}>@chocomoco24</span>
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                className={styles.socialCard}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 1.5A4 4 0 003.5 7.5v9A4 4 0 007.5 20.5h9a4 4 0 004-4v-9a4 4 0 00-4-4h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                </svg>
                <span className={styles.socialLabel}>Instagram</span>
                <span className={styles.socialHandle}>@pyaaz._</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.socialCard}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className={styles.socialLabel}>LinkedIn</span>
                <span className={styles.socialHandle}>debarghya4</span>
              </a>

              <a
                href={personal.twitter}
                target="_blank"
                rel="noreferrer"
                className={styles.socialCard}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 5.924c-.793.352-1.647.588-2.538.694a4.47 4.47 0 001.959-2.47 8.936 8.936 0 01-2.83 1.082 4.458 4.458 0 00-7.59 4.061A12.646 12.646 0 013 4.81a4.458 4.458 0 001.38 5.94 4.42 4.42 0 01-2.02-.56v.06a4.458 4.458 0 003.57 4.37 4.485 4.485 0 01-2.012.077 4.459 4.459 0 004.16 3.09 8.938 8.938 0 01-5.535 1.91c-.36 0-.714-.02-1.063-.062a12.61 12.61 0 006.83 2.002c8.2 0 12.68-6.79 12.68-12.68 0-.193-.005-.386-.014-.577A9.053 9.053 0 0022 5.924z" />
                </svg>
                <span className={styles.socialLabel}>Twitter</span>
                <span className={styles.socialHandle}>@debarghyadatta4</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
