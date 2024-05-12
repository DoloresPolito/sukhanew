import styles from "./style.module.scss";

import { motion } from "framer-motion";
import { slide, scale } from "../../animation";
import { Link } from "react-scroll";

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
  closeMobileMenu,
}) {
  const { title, href, index } = data;

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link
        to={href}
        spy={true}
        smooth={true}
        offset={10}
        duration={800}
        onClick={handleLinkClick}
      >
        {title}
      </Link>
    </motion.div>
  );
}
