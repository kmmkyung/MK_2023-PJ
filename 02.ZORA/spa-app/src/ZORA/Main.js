import React from 'react';
import MainFace from './MainFace';
import { ChocoDomeCon } from "./modules/ChocoDomeCon";
import RecCon from "./modules/RecCon";
import DomeCon from './modules/DomeCon';
import { EmailForm } from './modules/EmailForm';
import RecBlur from './modules/RecBlur';
import DomeSlide from './modules/DomeSlide';
import RotateHand from './modules/RotateHand';
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Main = () => {
  return (
    <>
      {/* 1. 메인 main */}
      <MainFace />
      <RotateHand />

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <RecCon cat="main" num="0" />
      </motion.div>
      <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1}}
      >
      <ChocoDomeCon />
      </motion.div>

        <RecBlur num="0" />
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <DomeCon cat="main" num="0" />
        <RecCon cat="main" num="1" sty={{ position: "absolute", top: "min(-2vw,-30px)" }} />
        <DomeSlide />
        <EmailForm />
      </motion.div>
    </>
  );
};

export default Main;
