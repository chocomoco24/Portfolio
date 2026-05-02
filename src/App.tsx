import "./styles/globals.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { LoadingProvider } from "./context/LoadingProvider";
import { useLoading } from "./context/LoadingProvider";
import { setProgress } from "./components/Loader";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./App.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function PortfolioInner() {
  const pillRef = useRef<HTMLUListElement>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled50, setScrolled50] = useState(false);
  const { setLoading } = useLoading();

  useEffect(() => {
    const { loaded } = setProgress(setLoading);
    loaded();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      pillRef.current,
      { y: -60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrolled50(scrolled >= 0.35);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    const heroEl = document.getElementById("hero");
    if (heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(""); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      heroObserver.observe(heroEl);
      observers.push(heroObserver);
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Cursor />
      <ul ref={pillRef} className={styles.pill}>
        {navLinks.map((l) => {
          const id = l.href.slice(1);
          const isActive = activeSection === id;
          return (
            <li key={l.href}>
              <a href={l.href} className={`${styles.pillLink} ${isActive ? styles.pillLinkActive : ""}`}>
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>

      <Navbar />
      <main>
        <Hero />
        <About active={activeSection === "about"} />
        <Projects active={activeSection === "projects"} />
        <Skills active={activeSection === "skills"} />
        <Experience active={activeSection === "experience"} />
        <Contact active={activeSection === "contact"} />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${styles.fabBtn} ${scrolled50 ? styles.fabVisible : ""}`}
        aria-label="Back to top"
      >
        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        href="https://drive.google.com/file/d/1ZgRMh2SbvTeMjgj9xAVYLdBhZ_D2YLlQ/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className={`${styles.fabResume} ${scrolled50 ? styles.fabVisible : ""}`}
        aria-label="View Resume"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" />
          <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" />
          <polyline points="10 9 9 9 8 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Resume</span>
      </a>
    </>
  );
}

export default function App() {
  return (
    <LoadingProvider>
      <PortfolioInner />
    </LoadingProvider>
  );
}