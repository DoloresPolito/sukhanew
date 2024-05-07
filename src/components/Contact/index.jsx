import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import Contact from "../../sukhacomponents/Contact"

export default function Index() {
    // const container = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ["start end", "end end"]
    // })
    // const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    // const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    // const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div 
        // style={{y}} ref={container} 
        className={styles.contact} id="contacto">
            <div className={styles.body}>

                <Contact/>
               
            </div>
        </motion.div>
    )
}
