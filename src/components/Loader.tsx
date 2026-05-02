import { useEffect, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";
import styles from "./Loader.module.css";

const Loader = ({ percent }: { percent: number }) => {
    const { setIsLoading } = useLoading();
    const [loaded, setLoaded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [clicked, setClicked] = useState(false);

    if (percent >= 100) {
        setTimeout(() => {
            setLoaded(true);
            setTimeout(() => setIsLoaded(true), 1000);
        }, 600);
    }

    useEffect(() => {
        if (isLoaded) {
            setClicked(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 900);
        }
    }, [isLoaded]);

    function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }

    return (
        <>
            <div className={styles.loadingHeader}>
                <span className={styles.loaderTitle}>.Porfolio</span>
                <div className={`${styles.loaderGame} ${clicked ? styles.loaderOut : ""}`}>
                    <div className={styles.loaderGameContainer}>
                        <div className={styles.loaderGameIn}>
                            {[...Array(27)].map((_, i) => (
                                <div className={styles.loaderGameLine} key={i} />
                            ))}
                        </div>
                        <div className={styles.loaderGameBall} />
                    </div>
                </div>
            </div>

            <div className={styles.loadingScreen}>
                <div className={styles.loadingMarquee}>
                    <Marquee>
                        <span>CHOCOMOCO</span>
                        <span>CHOCOMOCO</span>
                        <span>CHOCOMOCO</span>
                        <span>CHOCOMOCO</span>
                    </Marquee>
                </div>

                <div
                    className={`${styles.loadingWrap} ${clicked ? styles.loadingClicked : ""}`}
                    onMouseMove={handleMouseMove}
                >
                    <div className={styles.loadingHover} />
                    <div className={`${styles.loadingButton} ${loaded ? styles.loadingComplete : ""}`}>
                        <div className={styles.loadingContainer}>
                            <div className={styles.loadingContent}>
                                <div className={styles.loadingContentIn}>
                                    Loading <span>{percent}%</span>
                                </div>
                            </div>
                            <div className={styles.loadingBox} />
                        </div>
                        <div className={styles.loadingContent2}>
                            <span>Welcome</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loader;

export const setProgress = (setLoading: (value: number) => void) => {
    let percent = 0;

    let interval = setInterval(() => {
        if (percent <= 50) {
            percent += Math.round(Math.random() * 2);
            setLoading(percent);
        } else {
            clearInterval(interval);
            interval = setInterval(() => {
                percent += Math.round(Math.random());
                setLoading(percent);
                if (percent > 91) clearInterval(interval);
            }, 4000);
        }
    }, 250);

    const clear = () => {
        clearInterval(interval);
        setLoading(100);
    };

    const loaded = () =>
        new Promise<number>((resolve) => {
            clearInterval(interval);

            const tick = () => {
                if (percent >= 100) {
                    resolve(percent);
                    return;
                }

                percent++;
                setLoading(percent);

                let delay = 18;
                if (percent >= 53 && percent <= 58) {
                    delay = 100;
                } else if (percent ==98) {
                    delay = 700;
                }

                interval = setTimeout(tick, delay) as unknown as ReturnType<typeof setInterval>;
            };

            tick();
        });

    return { loaded, percent, clear };
};