import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { portfolioData } from "../data/portfolio";
import styles from "./Hero.module.css";
import PhysicsBalls from "./PhysicsBalls";

function FlipWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const loop = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFlipping(false);
      }, 700);
    }, 2700);
    return () => clearInterval(loop);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: flipping ? "rotateX(90deg) scale(0.8)" : "rotateX(0deg) scale(1)",
        opacity: flipping ? 0 : 1,
        transformOrigin: "center bottom",
        perspective: "600px",
      }}
    >
      {words[index]}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
        .fromTo(
          ".hero-name",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".hero-tagline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-stats",
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);



  const { personal } = portfolioData;

  return (
    <section id="hero" ref={containerRef} className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.gradientBlob} aria-hidden="true" />
      <div className={styles.gradientBlob2} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div className={styles.left}>

          <h1
            className={`${styles.greeting} hero-name`}
            onMouseLeave={() => {
              document.querySelectorAll(`.${styles.magnetLetter}`).forEach((el) => {
                (el as HTMLElement).style.transform = "translate(0, 0)";
              });
            }}
          >{"Hi,I'm".split("").map((char, i) => (
            <span
              key={i}
              className={styles.magnetLetter}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = (e.clientX - cx) / rect.width;
                const dy = (e.clientY - cy) / rect.height;
                (e.currentTarget as HTMLElement).style.transform =
                  `translate(${dx * -40}px, ${dy * -40}px)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
              }}
            >
              {char}
            </span>
          ))}

            <a className={`${styles.bracket} hero-name`}
              onMouseLeave={() => {
                document.querySelectorAll(`.${styles.magnetLetter}`).forEach((el) => {
                  (el as HTMLElement).style.transform = "translate(0, 0)";
                });
              }}>{"{".split("").map((char, i) => (
                <span
                  key={i}
                  className={styles.magnetLetter}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    const dx = (e.clientX - cx) / rect.width;
                    const dy = (e.clientY - cy) / rect.height;
                    (e.currentTarget as HTMLElement).style.transform =
                      `translate(${dx * -40}px, ${dy * -40}px)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                  }}
                >
                  {char}
                </span>
              ))}</a>
          </h1>




          <h1
            className={`${styles.name} hero-name`}
            onMouseLeave={() => {
              document.querySelectorAll(`.${styles.magnetLetter}`).forEach((el) => {
                (el as HTMLElement).style.transform = "translate(0, 0)";
              });
            }}
          >
            {"Debarghya".split("").map((char, i) => (
              <span
                key={i}
                className={styles.magnetLetter}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  const dx = (e.clientX - cx) / rect.width;
                  const dy = (e.clientY - cy) / rect.height;
                  (e.currentTarget as HTMLElement).style.transform =
                    `translate(${dx * -40}px, ${dy * -40}px)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                }}
              >
                {char}
              </span>
            ))}
            <br />
            {"Datta".split("").map((char, i) => (
              <span
                key={i}
                className={styles.magnetLetter}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  const dx = (e.clientX - cx) / rect.width;
                  const dy = (e.clientY - cy) / rect.height;
                  (e.currentTarget as HTMLElement).style.transform =
                    `translate(${dx * -40}px, ${dy * -40}px)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          <p className={`${styles.role} hero-name`} style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            <FlipWord words={["FULL", "MERN"]} />
            {"-STACK DEVELOPER".split("").map((char, i) => (
              <span
                key={i}
                className={styles.magnetLetter}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  const dx = (e.clientX - cx) / rect.width;
                  const dy = (e.clientY - cy) / rect.height;
                  (e.currentTarget as HTMLElement).style.transform =
                    `translate(${dx * -60}px, ${dy * -60}px)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          <p className={`${styles.tagline} hero-tagline`}>
            {personal.tagline.split("").map((char, i) => (
              <span
                key={i}
                className={styles.magnetLetter}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  const dx = (e.clientX - cx) / rect.width;
                  const dy = (e.clientY - cy) / rect.height;
                  (e.currentTarget as HTMLElement).style.transform =
                    `translate(${dx * -80}px, ${dy * -80}px)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          <a className={`${styles.bracket2} hero-name`}
            onMouseLeave={() => {
              document.querySelectorAll(`.${styles.magnetLetter}`).forEach((el) => {
                (el as HTMLElement).style.transform = "translate(0, 0)";
              });
            }}>{"};".split("").map((char, i) => (
              <span
                key={i}
                className={styles.magnetLetter}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const cx = rect.left + rect.width / 2;
                  const cy = rect.top + rect.height / 2;
                  const dx = (e.clientX - cx) / rect.width;
                  const dy = (e.clientY - cy) / rect.height;
                  (e.currentTarget as HTMLElement).style.transform =
                    `translate(${dx * -40}px, ${dy * -40}px)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
                }}
              >
                {char}
              </span>
            ))}</a>
        </div>
        {/* ── RIGHT — Physics Balls ── */}
        <div className={styles.right}>
          <div className={styles.threeCanvas}>
            <PhysicsBalls />
          </div>
          <p className={styles.canvasHint}>hover to disturb</p>
        </div>
      </div>
    </section >
  );
}
