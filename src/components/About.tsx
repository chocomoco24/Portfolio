import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/portfolio";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function About({ active = false }: { active?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        ".about-extra",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const { personal, summary, extracurricular, certifications } = portfolioData;

  return (
    <section id="about" ref={sectionRef} className={`${styles.about} section`}>
      <div className="container">
        <div className="section-header">
          <span className={`section-label ${active ? "active" : ""}`}>About</span>
          <div className="section-line" />
        </div>

        {/* TOP ROW — text left, profile image right */}
        <div className={styles.topGrid}>
          <div className={styles.left}>
            <p className={`${styles.intro} about-text`}>
              I'm <strong>{personal.name}</strong>, a Computer Science graduate from
              KIIT University with a passion for building real, production-grade software.
            </p>
            <p className={`${styles.body} about-text`}>{summary}</p>
          </div>

          <div className={`${styles.imageCol} about-text`}>
            <div className={styles.imageWrapper}>
              <img
                src="/profile.png"
                alt={personal.name}
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW — certifications and beyond code side by side, full width */}
        <div className={styles.bottomPanels}>
          <div className={`${styles.panel} about-extra`}>
            <h3 className={styles.panelTitle}>Certifications</h3>
            {certifications.map((c) => (
              <div key={c.title} className={styles.certItem}>
                <span className={styles.certTitle}>{c.title}</span>
                <span className={styles.certIssuer}>{c.issuer}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.panel} about-extra`}>
            <h3 className={styles.panelTitle}>Beyond Code</h3>
            {extracurricular.map((e) => (
              <div key={e.role} className={styles.extraItem}>
                <span className={styles.extraRole}>{e.role}</span>
                <span className={styles.extraOrg}>{e.org}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}