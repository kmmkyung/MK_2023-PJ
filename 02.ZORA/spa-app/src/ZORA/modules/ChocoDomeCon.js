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

// 컨테이너에 바인딩(위임 아님) – 이 섹션은 조건부 렌더가 아니라서 1회로 충분
const chocobreak = () => {
  const wraps = document.querySelectorAll(".ChocoDomeCon__img");
  const cleanups = [];
  wraps.forEach((wrap) => {
    const pack = wrap.querySelector(".chocolatepack");
    const brk = wrap.querySelector(".chocolatebreak");
    if (!pack || !brk) return;

    const enter = () => { brk.style.opacity = "1"; pack.style.opacity = "0"; };
    const leave = () => { brk.style.opacity = "0"; pack.style.opacity = "1"; };

    wrap.addEventListener("mouseenter", enter);
    wrap.addEventListener("mouseleave", leave);
    wrap.addEventListener("touchstart", enter, { passive: true });
    wrap.addEventListener("touchend", leave, { passive: true });
    wrap.addEventListener("touchcancel", leave, { passive: true });

    cleanups.push(() => {
      wrap.removeEventListener("mouseenter", enter);
      wrap.removeEventListener("mouseleave", leave);
      wrap.removeEventListener("touchstart", enter);
      wrap.removeEventListener("touchend", leave);
      wrap.removeEventListener("touchcancel", leave);
    });
  });
  return () => cleanups.forEach((fn) => fn());
};

function ChocoDomeCon() {
  useEffect(() => {
    const cleanup = chocobreak();
    return cleanup;
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
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
                variants={fadeUp}
              >
                <img className="ChocoDomeCon__img-1 chocolatepack" src={v.img1} alt="chocolatepack" />
                <img className="ChocoDomeCon__img-2 chocolatebreak" src={v.img2} alt="chocolatebreak" />
              </motion.div>

              <motion.div
                className="ChocoDomeCon__text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                variants={fadeUp}
              >
                <h2 className="ChocoDomeCon__text-tit">
                  {v.tit}<br />{v.tit2}
                </h2>
                <button className="ChocoDomeCon__text-btn btn-B">
                  <Link to="/sub" state={{ num: i }}>{v.btn}</Link>
                </button>
              </motion.div>
            </div>

            {i !== 4 ? (
              <motion.div
                className="ChocoDomeCon__back"
                data-seq={i}
                style={setcss_bg[i]}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ) : (
              <motion.div
                className="chocolate-5__backwrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="ChocoDomeCon__back" data-seq={i} style={setcss_bg[i]} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export { ChocoDomeCon, chocobreak };
