"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <>
      <main className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
           Ofrecemos una <span>variedad de complementos</span> que pueden
            personalizar su evento aún más, incluyendo fogoneros, luces y pisos.
          </p>
        </motion.div>

        <div className={styles.body}>
          <p>
            Ofrecemos una <span>variedad de complementos</span> que pueden
            personalizar su evento aún más, incluyendo fogoneros, luces y pisos.
          </p>
        </div>
      </main>
    </>
  );
}
