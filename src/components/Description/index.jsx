import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp} from "./animation";
import Complements from "@/sukhacomponents/Complements";
import Technical from "@/sukhacomponents/Technical";
import Mask from "../Mask"

export default function Index() {
  const phrase =
    "Nos enfocamos en ofrecer a nuestros clientes una experiencia única, asegurándonos de que cada detalle esté cuidado para que su evento sea un éxito asegurado.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description} id="about">
  
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>

        <p>
          {" "}
          Estamos comprometidos con proporcionar soluciones adaptables y de alta
          calidad para todo tipo de eventos y ocasiones.
        </p>
   
      </div>
      <Technical />
      <Mask/>
      <Complements />

    </div>
  );
}
