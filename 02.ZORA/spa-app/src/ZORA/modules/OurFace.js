import React, { useEffect, useState } from "react";

// Data
import OurFace_data from "../data/OurFace_data";
// CSS
import "../css/ourface.css";


const OurFace = (props) => {
  // 윈도크기리턴함수
  const [winW, setWinW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // 클린업 함수: 이벤트 해제
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <section id="ourface">
        <div className="ourface-wrap">
          {winW < 768 && (
            <div className="ourface-L" style={{ backgroundImage: "none" }}>
              <div className="ourface-L__con">
                <h1>{OurFace_data[props.num].tit}</h1>
                <p>{OurFace_data[props.num].con}</p>
              </div>
            </div>
          )}
          {winW >= 768 && (
            <div className="ourface-L__All">
              <div
                className="ourface-L"
                style={{
                  backgroundImage: `url(${OurFace_data[props.num].src})`,
                }}
              ></div>
              <div className="ourface-L__con">
                <h1>{OurFace_data[props.num].tit}</h1>
                <p>{OurFace_data[props.num].con}</p>
              </div>
            </div>
          )}
          <div className="ourface-R">
            {winW >= 768 && (
              <div
                className="ourface-R__bg"
                style={{ backgroundImage: "none" }}
              ></div>
            )}
            {winW < 768 && (
              <div
                className="ourface-R__bg"
                style={{
                  backgroundImage: `url(${OurFace_data[props.num].src})`,
                }}
              ></div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFace;
