import Image from 'next/image';
import styles from './style.module.scss';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => {
            direction = e.direction * -1;
          }
        },
        x: "-500px"
      });
    }

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    if (firstText.current) {
      gsap.set(firstText.current, { xPercent: xPercent });
    }
    if (secondText.current) {
      gsap.set(secondText.current, { xPercent: xPercent });
    }

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.main initial="initial" animate="enter" className={styles.landing} id="home">
      <Image
        src={width > 700 ? "/images/home.jpg" : "/images/home-mobile.png" }
        fill={true}
        alt="background"
      />

      {width > 800 && (
        <div className={styles.sliderContainer}>
          {/* <div ref={slider} className={styles.slider}>
            <p ref={firstText}>tenemos la carpa perfecta para vos -</p>
            <p ref={secondText}>tenemos la carpa perfecta para vos -</p>
       
          </div> */}
        </div>
      )}
    </motion.main>
  );
} 