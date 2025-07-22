import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/chocodomecon.css";
import ChocoDomeCon_data from "../data/ChocoDomeCon_data";
import { motion } from "framer-motion";

const setcss_bg = [
  { backgroundColor: "var(--org)" },
  { backgroundColor: "var(--blue)" },
  { backgroundColor: "var(--red)" },
  { backgroundColor: "var(--yell)" },
  { backgroundColor: "var(--pink)" },
];

const chocobreak = () => {
  const chocolateImg1 = document.querySelectorAll(".chocolatepack");
  const chocolateImg2 = document.querySelectorAll(".chocolatebreak");

  chocolateImg2.forEach((ele, idx) => {
    ele.addEventListener("mouseenter", function () {
      this.style.opacity = 1;
      chocolateImg1[idx].style.opacity = 0;
    });
    ele.addEventListener("mouseout", function () {
      this.style.opacity = 0;
      chocolateImg1[idx].style.opacity = 1;
    });
  });
};

function ChocoDomeCon() {
  useEffect(() => chocobreak(), []);

  // framer-motion 애니메이션 variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section id="ChocoDomeCon">
        <div className="ChocoDomeCon__warpAll">
          {ChocoDomeCon_data.main.map((v, i) => (
            <div className="ChocoDomeCon__warp" key={i}>
              <div className="ChocoDomeCon__con">
                <motion.div
                  className="ChocoDomeCon__img"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  variants={fadeUpVariants}
                >
                  <img
                    className="ChocoDomeCon__img-1 chocolatepack"
                    src={v.img1}
                    alt="chocolatepack"
                  />
                  <img
                    className="ChocoDomeCon__img-2 chocolatebreak"
                    src={v.img2}
                    alt="chocolatebreak"
                  />
                </motion.div>
                <motion.div
                  className="ChocoDomeCon__text"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  variants={fadeUpVariants}
                >
                  <h2 className="ChocoDomeCon__text-tit">
                    {v.tit}
                    <br />
                    {v.tit2}
                  </h2>
                  <button className="ChocoDomeCon__text-btn btn-B">
                    <Link to="/sub" state={{ num: i }}>
                      {v.btn}
                    </Link>
                  </button>
                </motion.div>
              </div>

              {i !== 4 && (
                <motion.div
                  className="ChocoDomeCon__back"
                  data-seq={i}
                  style={setcss_bg[i]}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                ></motion.div>
              )}

              {i === 4 && (
                <motion.div
                  className="chocolate-5__backwrap"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div
                    className="ChocoDomeCon__back"
                    data-seq={i}
                    style={setcss_bg[i]}
                  ></div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export { ChocoDomeCon, chocobreak };
