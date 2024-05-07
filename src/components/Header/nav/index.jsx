import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
import Link from "./Link";
import Curve from "./Curve";

const navItems = [
  {
    title: "HOME",
    href: "home",
  },
  {
    title: "QUIENES SOMOS",
    href: "about",
  },
  {
    title: "INFO",
    href: "technical",
  },
  {
    title: "COMPLEMENTOS",
    href: "complements",
  },
  {
    title: "CONTACTO",
    href: "contacto",
  },
];

export default function Index({setSelectedIndicator, selectedIndicator,closeMobileMenu}) {

  const pathname = usePathname();



  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
   
                closeMobileMenu={closeMobileMenu}

              ></Link>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
