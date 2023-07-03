import React, { useEffect, useRef, useState } from "react";

// Data
import OurFace_data from "../data/OurFace_data";
// CSS
import "../css/ourface.css";
// 제이쿼리
import $ from "jquery";
function jqFn() {
  $(() => {});
}

const OurFace = (props) => {
  // 윈도크기리턴함수
  const reWin = () => $(window).width();
  let [winW, setWinW] = useState(0)

  const test = ()=>{
    setWinW($(window).width())
    console.log("test",winW)
    
  }


  // 리사이즈 업데이트
  // const test = () =>
  // $(window).resize(() => {
  //     setWinW($(window).width())
  //     console.log("리사이즈", winW);
  //     // console.log("reWin:",winW);
  //   });
  // // let [winW, setWinW] = useState(reWin);

  useEffect(() => {
    test();
    window.addEventListener("resize",()=>{
      test()
    });
    return (
      window.removeEventListener("resize",()=>{
        test();
      })
    )
    },[winW]);

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
      {jqFn()}
    </>
  );
};

export default OurFace;
