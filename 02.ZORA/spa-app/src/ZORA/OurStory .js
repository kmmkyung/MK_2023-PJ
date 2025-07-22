// OurStory 페이지
import React from "react";
import RecBlure from "./modules/RecBlur";
import DomeCon from "./modules/DomeCon";
import RecCon from "./modules/RecCon";
import OurFace from "./modules/OurFace";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 100 } },
};

const OurStory = () => {
  return (
    <>
      <OurFace num="0" />
      <RecBlure num="1" />

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <DomeCon cat="Our_Story" num="0" />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <RecCon cat="Our_Story" num="0" />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <DomeCon cat="Our_Story" num="1" />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <RecCon cat="Our_Story" num="1" />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <DomeCon cat="main" num="0" />
      </motion.div>

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <RecCon cat="Our_Story" num="2" />
      </motion.div>
    </>
  );
};
export default OurStory;

