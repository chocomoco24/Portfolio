import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/portfolio";
import styles from "./Experience.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Experience({ active = false }: { active?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
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

  const { experience, } = portfolioData;

  return (
    <section id="experience" ref={sectionRef} className={`${styles.exp} section`}>
      <div className="container">
        <div className={styles.cols}>
          {/* Experience */}
          <div>
            <div className="section-header">
              <span className={`section-label ${active ? "active" : ""}`}>Experience</span>
              <div className="section-line" />
            </div>

            {experience.map((e) => (
              <div key={e.company} className={`${styles.card} exp-item`}>
                <div className={styles.cardLeft}>
                  <div className={styles.dot} />
                  <div className={styles.line} />
                </div>
                <div className={styles.cardRight}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.role}>{e.role}</h3>
                      <p className={styles.company}>{e.company}</p>
                    </div>
                    <div className={styles.metaCol}>
                      <span className={styles.period}>{e.period}</span>
                      <a href={"https://drive.google.com/file/d/1_Heb7aW8GAGTW55vkQ7YDKR3kuOMor2o/view?usp=sharing"} target="_blank" rel="noreferrer" className={styles.type}>
                        {e.type}
                      </a>
                    </div>
                  </div>
                  <ul className={styles.points}>
                    {e.points.map((pt) => (
                      <li key={pt} className={styles.point}>
                        <span className={styles.pointDot} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
