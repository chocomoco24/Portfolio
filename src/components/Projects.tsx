import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "../data/portfolio";
import styles from "./Projects.module.css";

gsap.registerPlugin(ScrollTrigger);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LiveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Projects({ active = false }: { active?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const { projects } = portfolioData;

  return (
    <section id="projects" ref={sectionRef} className={`${styles.projects} section`}>
      <div className="container">
        <div className="section-header">
          <span className={`section-label ${active ? "active" : ""}`}>Projects</span>
          <div className="section-line" />
        </div>

        <div className={styles.grid}>
          {projects.map((p) => {
            const isOpen = expanded.has(p.id);
            return (
              <div
                key={p.id}
                className={`${styles.card} project-card ${isOpen ? styles.cardOpen : ""}`}
              >
                {/* LEFT — always visible */}
                <div className={styles.cardLeft}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardNumber}>{p.number}</span>
                      <span className={styles.cardCategory}>{p.category}</span>
                    </div>
                    <button
                      className={styles.toggleBtn}
                      onClick={() => toggle(p.id)}
                    >
                      {isOpen ? "Close" : "View details"}
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d={isOpen ? "M8 2L4 6l4 4" : "M4 6h8M8 2l4 4-4 4"}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardDesc}>{p.description}</p>

                  <div className={styles.techRow}>
                    {p.tech.map((t) => (
                      <span key={t} className={styles.tech}>{t}</span>
                    ))}
                  </div>

                  {/* GitHub link stays bottom-left when closed */}
                  {!isOpen && (
                    <div className={styles.cardFooter}>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" className={styles.link}>
                          <GitHubIcon /> GitHub
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className={styles.link}>
                          <LiveIcon /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* RIGHT — only visible when expanded */}
                {isOpen && (
                  <div className={styles.cardRight}>
                    <h4 className={styles.highlightsTitle}>Key Features</h4>
                    <ul className={styles.highlightsList}>
                      {p.highlights.map((h) => (
                        <li key={h} className={styles.highlightItem}>
                          <span className={styles.highlightDot} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Links move to bottom-right of expanded panel */}
                    <div className={styles.cardRightFooter}>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noreferrer" className={styles.link}>
                          <GitHubIcon /> GitHub
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className={styles.link}>
                          <LiveIcon /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}