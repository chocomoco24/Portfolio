import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.85;
      curY += (mouseY - curY) * 0.85;
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(calc(${curX}px - 50%), calc(${curY}px - 50%))`;
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onEnter = () => cursorRef.current?.classList.add(styles.cursorHover);
    const onLeave = () => cursorRef.current?.classList.remove(styles.cursorHover);

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) onEnter();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) onLeave();
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
}