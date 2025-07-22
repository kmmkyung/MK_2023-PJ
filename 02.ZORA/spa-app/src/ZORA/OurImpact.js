// OurImpact 페이지
import React from "react";
import DomeCon from "./modules/DomeCon";
import OurFace from "./modules/OurFace";
import RecCon from "./modules/RecCon";
import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const OurImpact = () => {

  return (
    <>
  <OurFace num="1" />
  <RecCon cat="Our_Impact" num="0" />
  
  {[0, 1, 2].map((n) => (
    <motion.div
      key={n}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <DomeCon cat="Our_Impact" num={String(n)} />
    </motion.div>
  ))}
</>
  );
}; /////////////
export default OurImpact;
