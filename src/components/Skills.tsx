import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/portfolio";
import styles from "./Skills.module.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  { label: "Languages", key: "languages" as const, icon: "{", icon2: "}"},
  { label: "Frontend", key: "frontend" as const, icon: "◈", icon2: ""},
  { label: "Backend", key: "backend" as const, icon: "⟳", icon2: ""},
  { label: "Databases", key: "databases" as const, icon: "▦", icon2: "" },
  { label: "Tools", key: "tools" as const, icon: "⚙", icon2: "" },
  { label: "Concepts", key: "concepts" as const, icon: "◎", icon2: "" },
];

export default function Skills({ active = false }: { active?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-group",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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

  const { skills } = portfolioData;

  return (
    <section id="skills" ref={sectionRef} className={`${styles.skills} section`}>
      <div className="container">
        <div className="section-header">
          <span className={`section-label ${active ? "active" : ""}`}>Skills</span>
          <div className="section-line" />
        </div>

        <div className={styles.grid}>
          {skillGroups.map(({ label, key, icon, icon2 }) => (
            <div key={key} className={`${styles.group} skill-group`}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{icon}</span>
                <h3 className={styles.groupLabel}>{label}</h3>
                <span className={styles.groupIcon}>{icon2}</span>
                
              </div>
              <div className={styles.items}>
                {skills[key].map((skill) => (
                  <div key={skill} className={styles.skillItem}>
                    <span className={styles.skillDot} />
                    <span className={styles.skillName}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
